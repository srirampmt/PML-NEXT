// Placeholder SVG images for development
// These replace the figma:asset imports until actual assets are provided

// Helper function to create SVG data URL
const createSvgDataUrl = (svg: string): string => {
  const encoded = encodeURIComponent(svg);
  return `data:image/svg+xml,${encoded}`;
};

// Hero/Banner placeholder
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="800" viewBox="0 0 1920 800">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#heroGrad)" width="1920" height="800"/>
  <text x="960" y="400" font-family="Arial, sans-serif" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">Hero Section</text>
</svg>`;

// Hotel/Room placeholder
const hotelSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2d3436;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#636e72;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#hotelGrad)" width="400" height="300"/>
  <rect x="140" y="100" width="120" height="80" fill="none" stroke="#ffffff" stroke-width="2" rx="5"/>
  <circle cx="200" cy="140" r="20" fill="none" stroke="#ffffff" stroke-width="2"/>
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">Hotel</text>
</svg>`;

// Destination/Place placeholder
const placeSvg = (label: string, color1: string = "#00b894", color2: string = "#00cec9") => `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="placeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#placeGrad)" width="400" height="300"/>
  <path d="M200 80 L240 160 L160 160 Z" fill="none" stroke="#ffffff" stroke-width="2"/>
  <path d="M170 120 L200 160 L230 120" fill="none" stroke="#ffffff" stroke-width="2"/>
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">${label}</text>
</svg>`;

// Weather card placeholder
const weatherSvg = (temp: string, condition: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
  <defs>
    <linearGradient id="weatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fdcb6e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f39c12;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#weatherGrad)" width="200" height="150" rx="10"/>
  <circle cx="100" cy="50" r="25" fill="none" stroke="#ffffff" stroke-width="2"/>
  <text x="100" y="100" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle">${temp}</text>
  <text x="100" y="130" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">${condition}</text>
</svg>`;

// Banner/Ad placeholder
const bannerSvg = (width: number, height: number, label: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f3460;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#bannerGrad)" width="${width}" height="${height}"/>
  <text x="${width/2}" y="${height/2}" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 10}" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${label}</text>
</svg>`;

// Link/Card image placeholder
const cardSvg = (label: string, color: string = "#CB2187") => `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <rect fill="${color}" width="400" height="300"/>
  <rect x="150" y="100" width="100" height="80" fill="none" stroke="#ffffff" stroke-width="2" rx="8"/>
  <circle cx="200" cy="130" r="15" fill="none" stroke="#ffffff" stroke-width="2"/>
  <line x1="170" y1="160" x2="230" y2="160" stroke="#ffffff" stroke-width="2"/>
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">${label}</text>
</svg>`;

// Background placeholder
const backgroundSvg = (width: number, height: number) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2d3436;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#636e72;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2d3436;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#bgGrad)" width="${width}" height="${height}"/>
</svg>`;

// Feature/Special section placeholder
const featureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="featureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#CB2187;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#featureGrad)" width="800" height="400"/>
  <text x="400" y="200" font-family="Arial, sans-serif" font-size="32" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">Special Feature</text>
</svg>`;

// Travel Aware logo placeholder
const travelAwareSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100">
  <rect fill="#ffffff" width="400" height="100"/>
  <text x="200" y="55" font-family="Arial, sans-serif" font-size="24" fill="#333333" text-anchor="middle" dominant-baseline="middle">Travel Aware</text>
</svg>`;

// Google Maps placeholder
const mapsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect fill="#e8e8e8" width="600" height="400"/>
  <rect x="50" y="50" width="500" height="300" fill="#d5d5d5" stroke="#cccccc" stroke-width="2"/>
  <circle cx="300" cy="200" r="30" fill="#CB2187" opacity="0.8"/>
  <path d="M300 170 L300 150 M300 230 L300 250 M270 200 L250 200 M330 200 L350 200" stroke="#CB2187" stroke-width="3"/>
  <text x="300" y="370" font-family="Arial, sans-serif" font-size="18" fill="#666666" text-anchor="middle">Google Maps</text>
</svg>`;

// Frame placeholder
const frameSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fd79a8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e84393;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#frameGrad)" width="400" height="300"/>
  <rect x="50" y="50" width="300" height="200" fill="none" stroke="#ffffff" stroke-width="3" rx="10"/>
  <text x="200" y="155" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">Frame</text>
</svg>`;

// Export all placeholders
export const imgSectionHeroLarge = createSvgDataUrl(heroSvg);
export const imgLink = createSvgDataUrl(cardSvg("Link", "#2d3436"));
export const imgHotel11 = createSvgDataUrl(hotelSvg);
export const imgHotel12 = createSvgDataUrl(hotelSvg);
export const imgPlaceholderImage = createSvgDataUrl(placeSvg("Destination 1", "#00b894", "#00cec9"));
export const imgPlaceholderImage1 = createSvgDataUrl(placeSvg("Destination 2", "#00cec9", "#0984e3"));
export const imgPlaceholderImage2 = createSvgDataUrl(placeSvg("Destination 3", "#0984e3", "#6c5ce7"));
export const imgPlaceholderImage3 = createSvgDataUrl(placeSvg("Destination 4", "#6c5ce7", "#a29bfe"));
export const imgFrame504 = createSvgDataUrl(frameSvg);
export const imgWeatherCard = createSvgDataUrl(weatherSvg("25°C", "Sunny"));
export const imgWeatherCard1 = createSvgDataUrl(weatherSvg("22°C", "Cloudy"));
export const imgWeatherCard2 = createSvgDataUrl(weatherSvg("28°C", "Clear"));
export const imgWeatherCard3 = createSvgDataUrl(weatherSvg("20°C", "Rainy"));
export const imgSectionFeatureSpecial = createSvgDataUrl(featureSvg);
export const imgSectionBannerSpecial = createSvgDataUrl(featureSvg);
export const imgLink1 = createSvgDataUrl(cardSvg("Link 1", "#2d3436"));
export const imgLink2 = createSvgDataUrl(cardSvg("Link 2", "#636e72"));
export const imgLink3 = createSvgDataUrl(cardSvg("Link 3", "#b2bec3"));
export const imgLink4 = createSvgDataUrl(cardSvg("Link 4", "#74b9ff"));
export const imgLink5 = createSvgDataUrl(cardSvg("Link 5", "#a29bfe"));
export const imgLink6 = createSvgDataUrl(cardSvg("Link 6", "#fd79a8"));
export const imgLargeBanner = createSvgDataUrl(bannerSvg(1200, 400, "Large Banner"));
export const imgBackgroundImage = createSvgDataUrl(backgroundSvg(1920, 1080));
export const imgBackgroundImage1 = createSvgDataUrl(backgroundSvg(1920, 1080));
export const imgTravelAwareLight1 = createSvgDataUrl(travelAwareSvg);
export const imgBanners = createSvgDataUrl(bannerSvg(1200, 300, "Banners"));
export const imgBannerAd = createSvgDataUrl(bannerSvg(300, 250, "Ad 1"));
export const imgBannerAd1 = createSvgDataUrl(bannerSvg(300, 250, "Ad 2"));
export const imgBannerAd2 = createSvgDataUrl(bannerSvg(300, 250, "Ad 3"));
export const imgBannerAd3 = createSvgDataUrl(bannerSvg(300, 250, "Ad 4"));
export const imgGoogleMapsApi = createSvgDataUrl(mapsSvg);
