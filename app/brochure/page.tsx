"use client";
import HTMLFlipBook from "react-pageflip";
import React from "react";

export default function BrochureBooklet() {
  const pages = Array.from(
    { length: 20 },
    (_, i) => `/assets/images/pages-1-20-0.-PML-Brochure/page_${i + 1}.png`
  );

  // Dynamic height state
  const [bookHeight, setBookHeight] = React.useState(700);

  React.useEffect(() => {
    const updateHeight = () => {
      setBookHeight(window.innerHeight); // 100% screen height
    };

    updateHeight(); // initial load
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-[10px] sm:py-[10px] md:py-[15px] lg:py-[20px]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="w-full flex justify-center bg-gray-100">
            <HTMLFlipBook
              width={500}
              height={bookHeight}        // 📌 Full screen height
              minHeight={bookHeight}     // 📌 Lock height
              maxHeight={bookHeight}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              showCover={true}
              className="shadow-xl"
              mobileScrollSupport={true}
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={true}
              startZIndex={10}
              autoSize={true}
              maxShadowOpacity={0.5}
              swipeDistance={30}
              disableFlipByClick={false}
              clickEventForward={true}
              useMouseEvents={true}
              showPageCorners={true}
            >
              {/* Cover */}
              <div className="w-full h-full">
                <img
                  src={pages[0]}
                  className="w-full h-full object-cover"
                  alt="Cover Page"
                />
              </div>

              {/* Inside Pages */}
              {pages.slice(1).map((src, idx) => (
                <div key={idx} className="w-full h-full">
                  <img
                    src={src}
                    alt={`Page ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </section>
  );
}
