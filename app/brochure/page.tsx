"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FLIP_EVERY_MS = 3000;
const UI_HIDE_AFTER_MS = 2000;
const STAGE_SCALE = 0.96; // leave a small margin so the book never touches edges

function computeStageSize(viewportWidth: number, viewportHeight: number) {
  const target = 16 / 9;
  const current = viewportWidth / viewportHeight;
  if (current >= target) {
    const height = viewportHeight;
    const width = Math.floor(height * target);
    return { width, height };
  }
  const width = viewportWidth;
  const height = Math.floor(width / target);
  return { width, height };
}

function isScrollKey(key: string) {
  return (
    key === " " ||
    key === "PageUp" ||
    key === "PageDown" ||
    key === "Home" ||
    key === "End" ||
    key === "ArrowUp" ||
    key === "ArrowDown" ||
    key === "ArrowLeft" ||
    key === "ArrowRight"
  );
}

export default function BrochureBooklet() {
  const pages = useMemo(
    () =>
      Array.from(
        { length: 20 },
        (_, i) => `/assets/images/pages-1-20-0.-PML-Brochure/page_${i + 1}.png`
      ),
    []
  );

  const bookRef = useRef<any>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const flipTimerRef = useRef<number | null>(null);
  const uiHideTimerRef = useRef<number | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [uiVisible, setUiVisible] = useState(false);
  const [stage, setStage] = useState(() => ({ width: 1280, height: 720 }));
  const [pageAspect, setPageAspect] = useState(842 / 1191); // A3 portrait fallback
  const [pageSize, setPageSize] = useState(() => ({ width: 500, height: 1000 }));

  const cursorClass = uiVisible ? "cursor-default" : "cursor-none";

  useEffect(() => {
    // Kiosk hardening: no scrollbars, no selection, prevent scroll keys.
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (isScrollKey(e.key)) e.preventDefault();
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
    };

    const onSelectStart = (e: Event) => e.preventDefault();
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("keydown", onKeyDown as any);
      window.removeEventListener("wheel", onWheel as any);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    // Detect the page aspect ratio from the first image (so sizing is correct on TVs).
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setPageAspect(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = pages[0];
  }, [pages]);

  useEffect(() => {
    const updateStage = () => {
      const nextStage = computeStageSize(window.innerWidth, window.innerHeight);
      setStage(nextStage);

      const availableWidth = Math.floor(nextStage.width * STAGE_SCALE);
      const availableHeight = Math.floor(nextStage.height * STAGE_SCALE);

      // Compute a two-page spread that fits inside the 16:9 stage.
      // `width` prop is per-page width for react-pageflip.
      let height = availableHeight;
      let width = Math.floor(height * pageAspect);

      if (width * 2 > availableWidth) {
        width = Math.floor(availableWidth / 2);
        height = Math.floor(width / pageAspect);
      }

      setPageSize({ width, height });
    };

    updateStage();
    window.addEventListener("resize", updateStage);
    return () => window.removeEventListener("resize", updateStage);
  }, [pageAspect]);

  useEffect(() => {
    // Auto page turn. Loops back to the beginning.
    if (pages.length <= 1) return;

    const scheduleNext = () => {
      flipTimerRef.current = window.setTimeout(() => {
        const api = bookRef.current?.pageFlip?.();
        if (api) {
          const current = api.getCurrentPageIndex?.() ?? 0;
          const total = api.getPageCount?.() ?? pages.length;

          // In 2-page spread mode, the last visible spread usually starts at `total - 2`.
          // If we only check `total - 1`, we can get stuck on the last spread.
          const lastSpreadStartIndex = Math.max(0, total - 2);
          if (current >= lastSpreadStartIndex) api.flip?.(0, "top");
          else api.flipNext?.("top");
        }
        scheduleNext();
      }, FLIP_EVERY_MS);
    };

    scheduleNext();
    return () => {
      if (flipTimerRef.current) window.clearTimeout(flipTimerRef.current);
      flipTimerRef.current = null;
    };
  }, [pages.length]);

  const showUiTemporarily = () => {
    setUiVisible(true);
    if (uiHideTimerRef.current) window.clearTimeout(uiHideTimerRef.current);
    uiHideTimerRef.current = window.setTimeout(() => setUiVisible(false), UI_HIDE_AFTER_MS);
  };

  const toggleFullscreen = async () => {
    try {
      const el = outerRef.current;
      if (!el) return;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      ref={outerRef}
      className={`fixed inset-0 bg-black overflow-hidden select-none touch-none ${cursorClass}`}
      onContextMenu={(e) => e.preventDefault()}
      onMouseMove={showUiTemporarily}
      onPointerMove={showUiTemporarily}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Fullscreen button (hidden until mouse moves, then auto-hides) */}
      <button
        type="button"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        onClick={toggleFullscreen}
        className={
          uiVisible
            ? "absolute top-4 right-4 z-20 rounded-md bg-black/50 px-3 py-2 text-white/90 hover:bg-black/70 transition-opacity duration-700"
            : "pointer-events-none absolute top-4 right-4 z-20 rounded-md bg-black/50 px-3 py-2 text-white/90 opacity-0 transition-opacity duration-700"
        }
      >
        {isFullscreen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3H5a2 2 0 0 0-2 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 3h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 21H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 21h4a2 2 0 0 0 2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3H5a2 2 0 0 0-2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 3h3a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 21H5a2 2 0 0 1-2-2v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* 16:9 Stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{ width: `${stage.width}px`, height: `${stage.height}px` }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: `${pageSize.width * 2}px`, height: `${pageSize.height}px` }}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={pageSize.width}
              height={pageSize.height}
              minWidth={pageSize.width}
              maxWidth={pageSize.width}
              minHeight={pageSize.height}
              maxHeight={pageSize.height}
              size="fixed"
              showCover={false}
              className=""
              style={{}}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={false}
              startZIndex={10}
              autoSize={false}
              maxShadowOpacity={0.5}
              swipeDistance={30}
              disableFlipByClick={true}
              clickEventForward={false}
              useMouseEvents={false}
              showPageCorners={false}
              mobileScrollSupport={false}
            >
              {pages.map((src, idx) => (
                <div key={idx} className="h-full w-full bg-white">
                  <img
                    src={src}
                    alt={`Page ${idx + 1}`}
                    className="h-full w-full object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </div>
  );
}
