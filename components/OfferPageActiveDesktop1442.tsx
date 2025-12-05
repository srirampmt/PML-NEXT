import svgPaths from "../public/assets/images/svg-5dhlyf1jny";
import imgPlaceholderImage from "figma:asset/62ca2401460037ed1d2144b1d9d71f309a61951d.png";
import imgPlaceholderImage1 from "figma:asset/0a4377ee94a103f195420a30491bc257603a0819.png";
import imgPlaceholderImage2 from "figma:asset/a36badfd578449fc96a5dd0480e1bf7745792e8c.png";
import imgPlaceholderImage3 from "figma:asset/c6404adb11e67dc6be7ff727c6c7c85f3928e94e.png";
import imgGoogleMapsApi from "figma:asset/0d68a79635b5447f675134c5c52609d5c40f2daa.png";
import imgBanners from "figma:asset/6f873aae5691f7eda7a52b833785fd0cc5316ad2.png";
import imgSectionBannerSpecial from "figma:asset/01b2ff00226dbabdde8cfe3a86894a095bb104b0.png";
import imgTravelAwareLight1 from "figma:asset/cf3a44d6206a27ec37def24a997971097ca28b65.png";
import { imgGroup } from "../public/assets/images/svg-tzix1";

function Group2() {
  return (
    <div className="absolute h-[51.226px] left-[3.75px] top-[0.58px] w-[315.471px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 52">
        <g id="Group 2">
          <g id="PLAN">
            <path d={svgPaths.pdfae200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2b390b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1b458680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a3d8f00} fill="var(--fill-0, black)" />
          </g>
          <g id="MY">
            <path d={svgPaths.p13eb8400} fill="var(--fill-0, #CB2187)" />
            <path d={svgPaths.p15526f80} fill="var(--fill-0, #CB2187)" />
          </g>
          <path d={svgPaths.p3210ddc0} fill="var(--fill-0, black)" id="Rectangle 40" />
          <g id="uxe">
            <path d={svgPaths.pf9d4e00} fill="var(--fill-0, #CB2187)" />
            <path d={svgPaths.p5a1fd00} fill="var(--fill-0, #CB2187)" />
            <path d={svgPaths.p3c51dc80} fill="var(--fill-0, #CB2187)" />
          </g>
          <g id="Luxury for less">
            <path d={svgPaths.pae07900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p175d780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p29ef8b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2c5b2800} fill="var(--fill-0, black)" />
            <path d={svgPaths.pe3690c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3db32e80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p256a8980} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16405b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2d2e1100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p24bbfb00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3864ab00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pfaf100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1473ee00} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[68.83%_37.16%_12.83%_52.19%]">
      <div className="absolute inset-[-11.68%_-3.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 12">
          <g id="Group 3">
            <path d={svgPaths.p229f9c00} id="path" stroke="var(--stroke-0, #CB2187)" strokeLinecap="round" strokeWidth="2.22874" />
            <path d={svgPaths.pe004940} id="path_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.22874" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo2Main() {
  return (
    <div className="h-[52px] relative shrink-0 w-[320px]" data-name="logo2-main">
      <Group2 />
      <Group3 />
    </div>
  );
}

function LogoLink() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="logo_link">
      <Logo2Main />
    </div>
  );
}

function MenuLink() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="menu_link">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">{`Deals & Offers`}</p>
    </div>
  );
}

function IconDownArrowRegular() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon / down-arrow / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="down-arrow">
          <path d={svgPaths.p16b0a680} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuLinkWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="menu-link_wrapper">
      <MenuLink />
      <IconDownArrowRegular />
    </div>
  );
}

function MenuItemClosed() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative shrink-0" data-name="menu-item_closed">
      <MenuLinkWrapper />
    </div>
  );
}

function MenuDropdownDeals() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[4]" data-name="menu-dropdown / deals">
      <MenuItemClosed />
    </div>
  );
}

function MenuLink1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="menu_link">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Holiday Styles</p>
    </div>
  );
}

function IconDownArrowRegular1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon / down-arrow / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="down-arrow">
          <path d={svgPaths.p16b0a680} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuLinkWrapper1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="menu-link_wrapper">
      <MenuLink1 />
      <IconDownArrowRegular1 />
    </div>
  );
}

function MenuItemClosed1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative shrink-0" data-name="menu-item_closed">
      <MenuLinkWrapper1 />
    </div>
  );
}

function MenuDropdownHolidayTypes() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[3]" data-name="menu-dropdown / holiday-types">
      <MenuItemClosed1 />
    </div>
  );
}

function MenuLink2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="menu_link">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Destinations</p>
    </div>
  );
}

function IconDownArrowRegular2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon / down-arrow / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="down-arrow">
          <path d={svgPaths.p16b0a680} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuLinkWrapper2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="menu-link_wrapper">
      <MenuLink2 />
      <IconDownArrowRegular2 />
    </div>
  );
}

function MenuItemClosed2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative shrink-0" data-name="menu-item_closed">
      <MenuLinkWrapper2 />
    </div>
  );
}

function MenuDropdownDestinations() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[2]" data-name="menu-dropdown / destinations">
      <MenuItemClosed2 />
    </div>
  );
}

function MenuLink3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="menu_link">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Support</p>
    </div>
  );
}

function IconDownArrowRegular3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon / down-arrow / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="down-arrow">
          <path d={svgPaths.p16b0a680} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuLinkWrapper3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="menu-link_wrapper">
      <MenuLink3 />
      <IconDownArrowRegular3 />
    </div>
  );
}

function MenuItemClosed3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative shrink-0" data-name="menu-item_closed">
      <MenuLinkWrapper3 />
    </div>
  );
}

function MenuDropdownSupport() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="menu-dropdown / support">
      <MenuItemClosed3 />
    </div>
  );
}

function NavbarMenu() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-start relative shrink-0" data-name="navbar-menu">
      <MenuDropdownDeals />
      <MenuDropdownHolidayTypes />
      <MenuDropdownDestinations />
      <MenuDropdownSupport />
    </div>
  );
}

function IconHeadset() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[24px]" data-name="icon-headset">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-headset">
          <path clipRule="evenodd" d={svgPaths.p2837a240} fill="var(--fill-0, #CB2187)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TelephoneLink() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center px-0 py-[8px] relative shrink-0" data-name="telephone_link">
      <IconHeadset />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#cb2187] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        020 3740 0744
      </p>
    </div>
  );
}

function SupportContactWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="support-contact_wrapper">
      <TelephoneLink />
    </div>
  );
}

function SupportLinksWrapper() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="support-links_wrapper">
      <SupportContactWrapper />
    </div>
  );
}

function NavlinksWrapper() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[836px]" data-name="navlinks_wrapper">
      <NavbarMenu />
      <SupportLinksWrapper />
    </div>
  );
}

function NavbarWrapper() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="navbar_wrapper">
      <LogoLink />
      <NavlinksWrapper />
    </div>
  );
}

function PaddingSection1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="padding-section-24">
      <NavbarWrapper />
    </div>
  );
}

function ContainerLarge() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSection1 />
    </div>
  );
}

function PaddingGlobal() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge />
        </div>
      </div>
    </div>
  );
}

function NavbarComponent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="navbar_component">
      <PaddingGlobal />
    </div>
  );
}

function NavbarClosed() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1440px] z-[8]" data-name="navbar-closed">
      <NavbarComponent />
    </div>
  );
}

function OfferPageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[843px]" data-name="offer-page-header">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-center text-nowrap whitespace-pre">DUBAI - THE PALM ISLAND</p>
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#cb2187] text-[24px] w-[min-content]">Deluxe Dubai Break including meals, drinks, transfers and FREE Excursion</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">Exclusive offer to Plan My Luxe - Hurry Limited Seats and Availability - Selling Fast!!!</p>
    </div>
  );
}

function PriceSummaryWrapper() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[132px]" data-name="price-summary_wrapper">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4c4c4c] text-[14px] text-center text-nowrap tracking-[0.14px] whitespace-pre">Price starting from</p>
    </div>
  );
}

function PriceSummaryWrapper1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="price-summary_wrapper">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#4c4c4c] text-[12px] text-center text-nowrap tracking-[0.24px] whitespace-pre">£</p>
    </div>
  );
}

function PriceSummaryWrapper2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[2px] py-0 relative shrink-0" data-name="price-summary_wrapper">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#cb2187] text-[24px] text-center text-nowrap whitespace-pre">199</p>
    </div>
  );
}

function PriceSummaryWrapper3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="price-summary_wrapper">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#4c4c4c] text-[12px] text-center text-nowrap tracking-[0.24px] whitespace-pre">pp</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <PriceSummaryWrapper1 />
      <PriceSummaryWrapper2 />
      <PriceSummaryWrapper3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <PriceSummaryWrapper />
      <Frame3 />
    </div>
  );
}

function AnchorLinkOfferPricing() {
  return (
    <div className="bg-[#cb2187] box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[32px] py-[12px] relative rounded-[8px] shrink-0" data-name="anchor_link [offer-pricing]">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">View Options</p>
    </div>
  );
}

function PriceSummaryContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0 w-[405px]" data-name="price-summary_container">
      <Frame2 />
      <AnchorLinkOfferPricing />
    </div>
  );
}

function OfferPageHeaderWrapper() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[1280px]" data-name="offer-page-header_wrapper">
      <OfferPageHeader />
      <PriceSummaryContainer />
    </div>
  );
}

function PaddingSection2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[24px] relative shrink-0 w-full" data-name="padding-section-24">
      <OfferPageHeaderWrapper />
    </div>
  );
}

function ContainerLarge1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSection2 />
    </div>
  );
}

function PaddingGlobal1() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge1 />
        </div>
      </div>
    </div>
  );
}

function SectionOfferPageHeader() {
  return (
    <div className="box-border content-stretch flex flex-col items-center overflow-clip px-[80px] py-0 relative shrink-0 w-[1440px] z-[7]" data-name="section_offer-page-header">
      <PaddingGlobal1 />
    </div>
  );
}

function IconAttraction() {
  return (
    <div className="relative shrink-0 size-[16px] z-[2]" data-name="icon-attraction">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1845)" id="museum">
          <path d={svgPaths.p1d289000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c746200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3069bc00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p66cd00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2d075c00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p5121980} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p31ba3400} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_3_1845">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AddedExtrasBannerComponent() {
  return (
    <div className="absolute bg-[#595858] box-border content-stretch flex gap-[8px] isolate items-center left-[16px] px-[12px] py-[6px] top-[16px]" data-name="added-extras-banner_component">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <IconAttraction />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre z-[1]">{`Prices include FREE Attraction Entry `}</p>
    </div>
  );
}

function MainImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[843px] relative shrink-0 w-[843px]" data-name="main-image_container">
      <div className="h-[450px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage} />
      </div>
      <AddedExtrasBannerComponent />
    </div>
  );
}

function ImageColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="image_column">
      <div className="h-[217px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <div className="h-[217px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function ImageGalleryContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1280px]" data-name="image-gallery_container">
      <MainImageContainer />
      <ImageColumn />
    </div>
  );
}

function PaddingSection3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[24px] relative shrink-0 w-full" data-name="padding-section-24">
      <ImageGalleryContainer />
    </div>
  );
}

function ContainerLarge2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSection3 />
    </div>
  );
}

function PaddingGlobal2() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge2 />
        </div>
      </div>
    </div>
  );
}

function SectionImageGallery() {
  return (
    <div className="box-border content-stretch flex flex-col items-center overflow-clip px-[80px] py-0 relative shrink-0 w-[1440px] z-[6]" data-name="section_image-gallery">
      <PaddingGlobal2 />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="share 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1864)" id="share 1">
          <path d={svgPaths.p346a9c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1864">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShareOffer() {
  return (
    <div className="bg-[#9f9f9f] box-border content-stretch flex gap-[8px] items-center px-[32px] py-[4px] relative rounded-[32px] shrink-0" data-name="share-offer">
      <Share />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Share This Offer</p>
    </div>
  );
}

function PaddingSection() {
  return (
    <div className="box-border content-stretch flex flex-col items-end overflow-clip px-0 py-[16px] relative shrink-0 w-full" data-name="padding-section-16">
      <ShareOffer />
    </div>
  );
}

function ContainerLarge3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSection />
    </div>
  );
}

function PaddingGlobal3() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge3 />
        </div>
      </div>
    </div>
  );
}

function SectionOfferShare() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1440px] z-[5]" data-name="section_offer-share">
      <PaddingGlobal3 />
    </div>
  );
}

function OfferCta() {
  return (
    <div className="bg-[#cb2187] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="offer-cta">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">LIMITED TIME OFFER: ENDS 14/03/24</p>
    </div>
  );
}

function OfferCta1() {
  return (
    <div className="bg-[#e8e5e5] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="offer-cta">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[12px] text-nowrap whitespace-pre">ULTRA ALL INCLUSIVE</p>
    </div>
  );
}

function OfferCta2() {
  return (
    <div className="bg-[#e8e5e5] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="offer-cta">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[12px] text-nowrap whitespace-pre">FLEXIBLE DURATIONS</p>
    </div>
  );
}

function SectionOfferCta() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[843px]" data-name="section-offer-cta">
      <OfferCta />
      <OfferCta1 />
      <OfferCta2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-[16.68%] right-[16.65%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
        <g id="Group">
          <path d={svgPaths.p1b5f4200} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 contents left-[16.68%] right-[16.65%] top-0" data-name="Group">
      <Group />
    </div>
  );
}

function Pin() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="pin">
      <Group1 />
    </div>
  );
}

function IconPinSmall() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon / pin / small">
      <Pin />
    </div>
  );
}

function LocationWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="location_wrapper">
      <IconPinSmall />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">Dubai, UAE</p>
    </div>
  );
}

function HotelOfferHeader() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="hotel-offer-header">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#4c4c4c] text-[24px] text-nowrap whitespace-pre">Dukes The Palm, a Royal Hideaway Hotel</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[1.87%] left-0 right-0 top-[1.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p16c9ca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[1.87%] contents left-0 right-0 top-[1.87%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function StarWhite() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="star-white">
      <Group5 />
    </div>
  );
}

function IconStarWhiteRegular() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon / star-white / regular">
      <StarWhite />
    </div>
  );
}

function StarRating() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="star-rating">
      {[...Array(5).keys()].map((_, i) => (
        <IconStarWhiteRegular key={i} />
      ))}
    </div>
  );
}

function HotelOfferStatement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="hotel-offer-statement">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] w-[726.394px] whitespace-pre-wrap">{`“Dukes The Palm, a Royal Hideaway Hotel on  Palm Jumeirah combines a world of British charm with cosmopolitan  grandeur. Guests can relax in the lazy river or participate in a variety  of water sports on the beach.”`}</p>
    </div>
  );
}

function OfferHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[843px]" data-name="offer-header">
      <LocationWrapper />
      <HotelOfferHeader />
      <StarRating />
      <HotelOfferStatement />
    </div>
  );
}

function IconChevronDownThinRegular() {
  return (
    <div className="relative size-[16px]" data-name="icon / chevron-down-thin / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right-thin">
          <path d={svgPaths.p22a3cc00} fill="var(--fill-0, #595858)" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="button">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap underline whitespace-pre">Read more</p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <IconChevronDownThinRegular />
        </div>
      </div>
    </div>
  );
}

function FlashDealContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[843px]" data-name="flash-deal-content">
      <div className="font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-black w-[751.162px]">
        <p className="leading-[30px] mb-0 text-[#cb2187] text-[20px]">About The Deal</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] mb-0 text-[#4c4c4c] text-[16px]">With this deal you can spend a week relaxing on a tropical island surrounded by a vibrant coral reef, complete with a secluded beach villa to retreat to. We couldn’t find the hotel alone for less than £900 per x§person when we researched the offer—so this half-price deal with return flights, speedboat transfers, and meals is packed with value at £1199 per person</p>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] mb-0 text-[#4c4c4c] text-[16px]">What’s Included</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">Return flights, with 20kg checked baggage</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">Return speedboat transfers</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">Seven nights at Eriyadu Island Resort Maldives, in a Deluxe Beachfront Villa with Private Walkout Patio</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">All-inclusive board, covering all meals, drinks, and snacks</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">A 30-minute jet lag massage per person, per stay</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">One sunset cruise per person, per stay</span>
          </li>
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#4c4c4c] text-[16px]">25% off spa treatments</span>
          </li>
        </ul>
      </div>
      <Button />
    </div>
  );
}

function OfferKspHeader() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="offer-ksp-header">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#cb2187] text-[16px] text-nowrap whitespace-pre">Why we love this hotel</p>
    </div>
  );
}

function Component3Check() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check />
    </div>
  );
}

function KspWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Unlimited waterpark entry</p>
    </div>
  );
}

function Component3Check1() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check1 />
    </div>
  );
}

function KspWrapper1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark1 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">TripAdvisor Travellers Choice Award</p>
    </div>
  );
}

function Component3Check2() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check2 />
    </div>
  );
}

function KspWrapper2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark2 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Luxury resort hotel</p>
    </div>
  );
}

function Component3Check3() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check3 />
    </div>
  );
}

function KspWrapper3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark3 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">First-class facilities</p>
    </div>
  );
}

function Component3Check4() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check4 />
    </div>
  );
}

function KspWrapper4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark4 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Beachfront location</p>
    </div>
  );
}

function Component3Check5() {
  return (
    <div className="absolute inset-[9.81%_6.15%]" data-name="3-Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
        <g id="3-Check">
          <path d={svgPaths.p11ddca00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckMark5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check-mark 1">
      <Component3Check5 />
    </div>
  );
}

function KspWrapper5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ksp_wrapper">
      <CheckMark5 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4c4c4c] text-[16px] text-nowrap whitespace-pre">Free WiFi throughout</p>
    </div>
  );
}

function OfferKsps() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="offer-ksps">
      <OfferKspHeader />
      <KspWrapper />
      <KspWrapper1 />
      <KspWrapper2 />
      <KspWrapper3 />
      <KspWrapper4 />
      <KspWrapper5 />
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="call 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_1748)" id="call 2">
          <path clipRule="evenodd" d={svgPaths.p1d705900} fill="var(--fill-0, #595858)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1748">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Telephone() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="telephone">
      <Call />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap whitespace-pre">020 8123 1234</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[6.25%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g id="Group">
          <path d={svgPaths.p2712a100} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[31.25%_21.88%_62.5%_21.88%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
        <g id="Group">
          <path d={svgPaths.p1ba76db0} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-1/2 left-[21.88%] right-[46.88%] top-[43.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
        <g id="Group">
          <path d={svgPaths.p3f0f2500} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X314Comment() {
  return (
    <div className="absolute contents inset-[6.25%_3.13%]" data-name="_x31_4_comment">
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Comment() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="comment">
      <X314Comment />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="chat">
      <Comment />
      <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap tracking-[0.14px] underline whitespace-pre">chat online</p>
    </div>
  );
}

function Whatsapp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1803)" id="whatsapp">
          <path d={svgPaths.p36becec0} fill="var(--fill-0, #595858)" id="Vector" />
          <path d={svgPaths.p10d85f80} fill="var(--fill-0, #595858)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1803">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Whatsapp1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="whatsapp">
      <Whatsapp />
      <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap tracking-[0.14px] underline whitespace-pre">send a whatsapp</p>
    </div>
  );
}

function ContactOptionsWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="contact-options_wrapper">
      <Telephone />
      <Chat />
      <Whatsapp1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap whitespace-pre">Our team are available 24 hours, 7 days</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">Hurry this deal has limited availability - call our helpful team now</p>
      <ContactOptionsWrapper />
    </div>
  );
}

function TeamContact() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="team-contact">
      <div className="relative shrink-0 size-[100px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage3} />
      </div>
      <Container />
    </div>
  );
}

function FlashInfoColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="flash-info_column">
      <SectionOfferCta />
      <OfferHeader />
      <FlashDealContent />
      <OfferKsps />
      <TeamContact />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <FlashInfoColumn />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="basis-0 flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#4c4c4c] text-[24px]">
        <p className="leading-[32px]">{`Holiday Dates & Prices`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[12px] w-full">
        <p className="leading-[18px]">Departing from</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] w-full">
        <p className="leading-[normal]">Any airport</p>
      </div>
    </div>
  );
}

function InputPartNativeBoardBasis() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px overflow-clip px-0 py-[11.5px] relative shrink-0" data-name="Input::part(native) - Board basis">
      <Container5 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[32.5%_17.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
          <path clipRule="evenodd" d={svgPaths.p2feab700} fill="var(--fill-0, #595858)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SlotEcsIcon() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 size-[16px]" data-name="Slot → ecs-icon">
      <Svg />
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[8px] pr-[2px] py-0 relative shrink-0" data-name="Container">
      <SlotEcsIcon />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-start justify-center px-[17px] py-px relative w-full">
          <InputPartNativeBoardBasis />
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f9f9f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EcsInputLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ecs-input → Label">
      <Margin />
      <BackgroundBorder />
    </div>
  );
}

function EcsSelect() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px pb-0 pt-[4px] px-0 relative shrink-0" data-name="ecs-select">
      <EcsInputLabel />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[12px] w-full">
        <p className="leading-[18px]">Board basis</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] w-full">
        <p className="leading-[normal]">All Inclusive</p>
      </div>
    </div>
  );
}

function InputPartNativeBoardBasis1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px overflow-clip px-0 py-[11.5px] relative shrink-0" data-name="Input::part(native) - Board basis">
      <Container8 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-full relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[32.5%_17.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
          <path clipRule="evenodd" d={svgPaths.p2feab700} fill="var(--fill-0, #595858)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SlotEcsIcon1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 size-[16px]" data-name="Slot → ecs-icon">
      <Svg1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[8px] pr-[2px] py-0 relative shrink-0" data-name="Container">
      <SlotEcsIcon1 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-start justify-center px-[17px] py-px relative w-full">
          <InputPartNativeBoardBasis1 />
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f9f9f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EcsInputLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ecs-input → Label">
      <Margin1 />
      <BackgroundBorder1 />
    </div>
  );
}

function EcsSelect1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px pb-0 pt-[4px] px-0 relative shrink-0" data-name="ecs-select">
      <EcsInputLabel1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[12px] w-full">
        <p className="leading-[18px]">Duration</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] w-full">
        <p className="leading-[normal]">5 nights</p>
      </div>
    </div>
  );
}

function InputPartNativeBoardBasis2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px overflow-clip px-0 py-[11.5px] relative shrink-0" data-name="Input::part(native) - Board basis">
      <Container11 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-full relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[32.5%_17.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
          <path clipRule="evenodd" d={svgPaths.p2feab700} fill="var(--fill-0, #595858)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SlotEcsIcon2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 size-[16px]" data-name="Slot → ecs-icon">
      <Svg2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[8px] pr-[2px] py-0 relative shrink-0" data-name="Container">
      <SlotEcsIcon2 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-start justify-center px-[17px] py-px relative w-full">
          <InputPartNativeBoardBasis2 />
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9f9f9f] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EcsInputLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ecs-input → Label">
      <Margin2 />
      <BackgroundBorder2 />
    </div>
  );
}

function EcsSelect2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start min-h-px min-w-px pb-0 pt-[4px] px-0 relative shrink-0" data-name="ecs-select">
      <EcsInputLabel2 />
    </div>
  );
}

function JanCalendarConfiguration() {
  return (
    <div className="content-stretch flex gap-[8px] h-[70px] items-start justify-center relative shrink-0 w-full" data-name="jan-calendar-configuration">
      <EcsSelect />
      <EcsSelect1 />
      <EcsSelect2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#595858] grow min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[16px] py-[7px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-full">
            <p className="leading-[18px]">Price per person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlotEcsToggleButton() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Slot → ecs-toggle-button">
      <Button1 />
    </div>
  );
}

function SlotEcsToggleButton1() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-center min-h-px min-w-px pb-[7.25px] pt-[6.75px] px-0 relative shrink-0" data-name="Slot → ecs-toggle-button">
      <div className="basis-0 flex flex-col font-['Montserrat:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#595858] text-[12px] text-center">
        <p className="leading-[18px]">Total price</p>
      </div>
    </div>
  );
}

function PriceSwitcxh() {
  return (
    <div className="h-[34px] relative rounded-[4px] shrink-0 w-full" data-name="price-switcxh">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[34px] items-start p-px relative w-full">
          <SlotEcsToggleButton />
          <SlotEcsToggleButton1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4d3e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function IconLeftEmpty() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-left-empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1861)" id="icon-left-empty">
          <path d={svgPaths.p22befc00} fill="var(--fill-0, #595858)" id="Left_Arrow_5_" />
        </g>
        <defs>
          <clipPath id="clip0_3_1861">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">December 2025</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative rounded-[4px] shrink-0 w-[160px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#9f9f9f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container13 />
    </div>
  );
}

function IconRightEmpty() {
  return (
    <div className="relative size-[16px]" data-name="icon-right-empty">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1829)" id="icon-right-empty">
          <path d={svgPaths.p22befc00} fill="var(--fill-0, #595858)" id="Left_Arrow_5_" />
        </g>
        <defs>
          <clipPath id="clip0_3_1829">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <IconLeftEmpty />
      <Container14 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconRightEmpty />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Mon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Tue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Wed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Thu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Fri</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Sat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
            <p className="leading-[1.4] whitespace-pre">Sun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Date />
      <Date1 />
      <Date2 />
      <Date3 />
      <Date4 />
      <Date5 />
      <Date6 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">11</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date10() {
  return (
    <div className="bg-[#cb2187] box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#cb2187] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">12</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">13</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">14</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date13() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Date7 />
      <Date8 />
      <Date9 />
      <Date10 />
      <Date11 />
      <Date12 />
      <Date13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">15</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date14() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">16</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date15() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">17</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date16() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date17() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">19</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date18() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[green] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">20</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[green] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date19() {
  return (
    <div className="bg-[#a6eda6] box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[green] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">21</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date20() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Date14 />
      <Date15 />
      <Date16 />
      <Date17 />
      <Date18 />
      <Date19 />
      <Date20 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">22</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date21() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date22() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">24</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date23() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">25</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date24() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">26</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date25() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">27</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date26() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date27() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container85() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Date21 />
      <Date22 />
      <Date23 />
      <Date24 />
      <Date25 />
      <Date26 />
      <Date27 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">29</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date28() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date29() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-center text-nowrap">
        <p className="leading-[1.4] whitespace-pre">31</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#595858] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">£1999</p>
      </div>
    </div>
  );
}

function Date30() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return <div className="content-stretch flex flex-col items-center justify-center shrink-0 w-full" data-name="Container" />;
}

function Container93() {
  return <div className="content-stretch flex items-center justify-center shrink-0 w-full" data-name="Container" />;
}

function Date31() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[114.143px]" data-name="date">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Container">
      <Date28 />
      <Date29 />
      <Date30 />
      {[...Array(4).keys()].map((_, i) => (
        <Date31 key={i} />
      ))}
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container55 />
      <Container70 />
      <Container85 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container25 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[green] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">Best Price</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#a6eda6] box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[green] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4c4c4c] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">Per person price based on lowest priced flights and rooms</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[#ededed] box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#9f9f9f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end justify-center p-[10px] relative w-full">
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-0 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.001px_1.2px] mask-size-[16px_13.576px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path clipRule="evenodd" d="M0 0H16V16H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-[7.65%] contents left-0 right-0 top-[7.5%]" data-name="Mask group">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[7.65%] contents left-0 right-0 top-[7.5%]" data-name="Group">
      <div className="absolute bottom-[7.65%] left-0 right-0 top-[7.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path d={svgPaths.p21a7e480} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function Image() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="image">
      <Group10 />
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="image fill">
      <Image />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16px]" data-name="logo">
      <ImageFill />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#393939] box-border content-stretch flex flex-col h-[32px] items-center justify-center min-w-[32px] px-[8px] py-0 relative rounded-[16px] shrink-0" data-name="Background">
      <Logo />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[#393939] text-nowrap" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Your trip</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">8 Oct 2025 - 15 Oct 2025</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">(7 nights)</p>
      </div>
    </div>
  );
}

function TripSummary() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="trip-summary">
      <Background />
      <Container103 />
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative rounded-[8px] shrink-0 w-[843px]" data-name="calendar-grid">
      <Container3 />
      <JanCalendarConfiguration />
      <PriceSwitcxh />
      <Container96 />
      <Container102 />
      <TripSummary />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0" data-name="Container">
      <Container1 />
      <CalendarGrid />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#595858] h-[51px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[51px] items-center px-[10px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Holiday Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HolidayDuration() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Holiday Duration">
      <div aria-hidden="true" className="absolute border-[#9f9f9f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#242f40] text-[16px] text-nowrap whitespace-pre">Total Holiday Duration</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#242f40] text-[24px] text-nowrap whitespace-pre">14 nights</p>
    </div>
  );
}

function PlaneOb() {
  return (
    <div className="h-[25.289px] relative shrink-0 w-[26.333px]" data-name="plane-ob">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 26">
        <g id="plane-ob">
          <path d={svgPaths.pb118b00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlightInfo() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap" data-name="Flight Info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">
          <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold">Outbound flight</span>:
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">WIZ/U2 - W95313</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <FlightInfo />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">LTN</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Thu, 15 Jan, 08:10</p>
      </div>
    </div>
  );
}

function DepartureInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Departure Info">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">HRG</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Thu, 15 Jan, 16:35</p>
      </div>
    </div>
  );
}

function ArrivalInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Arrival Info">
      <Container108 />
      <Container109 />
    </div>
  );
}

function FlightTimeContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Flight Time Container">
      <DepartureInfo />
      <ArrivalInfo />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pl-0 pr-[24px] py-0 relative w-full">
          <FlightTimeContainer />
        </div>
      </div>
    </div>
  );
}

function FlightDetailsContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Flight Details Container">
      <Container105 />
      <Container110 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <PlaneOb />
      <FlightDetailsContainer />
    </div>
  );
}

function PlaneIb() {
  return (
    <div className="h-[25.289px] relative w-[26.333px]" data-name="plane-ib">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 26">
        <g id="plane-ib">
          <path d={svgPaths.pb118b00} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlightInfo1() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] relative shrink-0 text-[#393939] text-[14px]" data-name="Flight Info">
      <div className="flex flex-col justify-center relative shrink-0 w-[120px]">
        <p className="leading-[24px]">
          <span className="font-['Montserrat:SemiBold',sans-serif] font-semibold">Inbound flight</span>:
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[24px] whitespace-pre">WIZ/U2 - W95313</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <FlightInfo1 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">HRG</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Thu, 15 Jan, 08:10</p>
      </div>
    </div>
  );
}

function DepartureInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Departure Info">
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">LTN</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Thu, 15 Jan, 16:35</p>
      </div>
    </div>
  );
}

function ArrivalInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Arrival Info">
      <Container115 />
      <Container116 />
    </div>
  );
}

function FlightTimeContainer1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Flight Time Container">
      <DepartureInfo1 />
      <ArrivalInfo1 />
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start pl-0 pr-[24px] py-0 relative w-full">
          <FlightTimeContainer1 />
        </div>
      </div>
    </div>
  );
}

function FlightDetailsContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Flight Details Container">
      <Container112 />
      <Container117 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <PlaneIb />
        </div>
      </div>
      <FlightDetailsContainer1 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Container111 />
      <Container118 />
    </div>
  );
}

function Vector() {
  return (
    <div className="relative size-[20px]" data-name="vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="vector">
          <path d={svgPaths.p2f338f70} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Board() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative" data-name="board">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Vector />
        </div>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[239px]" data-name="container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">All Inclusive</p>
      </div>
    </div>
  );
}

function AllInclusiveContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="All Inclusive Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Board />
        </div>
      </div>
      <Container120 />
    </div>
  );
}

function Container121() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="container">
      <div aria-hidden="true" className="absolute border-[#9f9f9f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container119 />
      <AllInclusiveContainer />
    </div>
  );
}

function Vector1() {
  return (
    <div className="relative size-[22px]" data-name="vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="vector">
          <path d={svgPaths.p348b1980} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Board1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative" data-name="board">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Vector1 />
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] w-full">
        <p className="leading-[24px]">Includes: Hand luggage for each passenger</p>
      </div>
    </div>
  );
}

function IncludesInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Includes Info">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Board1 />
        </div>
      </div>
      <Container122 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-0 left-[7.89%] right-[7.9%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Group">
          <path d={svgPaths.p2898580} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-0 contents left-[7.89%] right-[7.9%] top-0" data-name="Group">
      <Group11 />
    </div>
  );
}

function Vector2() {
  return (
    <div className="overflow-clip relative size-[20px]" data-name="vector">
      <Group12 />
    </div>
  );
}

function Board2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative" data-name="board">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Vector2 />
        </div>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[14px] w-full">
        <p className="leading-[24px]">Transfers not included</p>
      </div>
    </div>
  );
}

function TransfersContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Transfers Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Board2 />
        </div>
      </div>
      <Container123 />
    </div>
  );
}

function IncludesContainer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Includes Container">
      <div aria-hidden="true" className="absolute border-[#9f9f9f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IncludesInfo />
      <TransfersContainer />
    </div>
  );
}

function PriceLabel() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 text-[#242f40] text-[16px]" data-name="Price Label">
      <p className="relative shrink-0 text-nowrap whitespace-pre">Price Per Person From</p>
      <p className="h-[22px] relative shrink-0 w-[159px]">(incl. Flights)</p>
    </div>
  );
}

function PriceValueContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Price Value Container">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#242f40] text-[32px] text-nowrap whitespace-pre">£4,099</p>
    </div>
  );
}

function PriceInfo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Price Info">
      <PriceLabel />
      <PriceValueContainer />
    </div>
  );
}

function QuoteValueContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Quote Value Container">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#242f40] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">ABC123456</p>
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Quote Container">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#242f40] text-[16px] text-nowrap whitespace-pre">Quote Ref:</p>
      <QuoteValueContainer />
    </div>
  );
}

function PriceContainer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Price Container">
      <PriceInfo />
      <QuoteContainer />
    </div>
  );
}

function ButtonRent() {
  return (
    <div className="bg-[#cb2187] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Button Rent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-0 relative w-full">
          <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.32px]">
            <p className="leading-[1.5] whitespace-pre">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookNowContainer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Book Now Container">
      <ButtonRent />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <HolidayDuration />
      <Container121 />
      <IncludesContainer />
      <PriceContainer />
      <BookNowContainer />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p3cbb7980} fill="var(--fill-0, #393939)" id="Vector" />
          <path d={svgPaths.p31afc600} fill="var(--fill-0, #393939)" id="Vector_2" />
          <path d={svgPaths.p13cc5780} fill="var(--fill-0, #393939)" id="Vector_3" />
          <path d={svgPaths.p186f3100} fill="var(--fill-0, #393939)" id="Vector_4" />
          <path d={svgPaths.p520e600} fill="var(--fill-0, #393939)" id="Vector_5" />
          <path d={svgPaths.p29152300} fill="var(--fill-0, #393939)" id="Vector_6" />
          <path d={svgPaths.p97a9400} fill="var(--fill-0, #393939)" id="Vector_7" />
          <path d={svgPaths.p35f21600} fill="var(--fill-0, #393939)" id="Vector_8" />
          <path d={svgPaths.p8188980} fill="var(--fill-0, #393939)" id="Vector_9" />
          <path d={svgPaths.p2723aa80} fill="var(--fill-0, #393939)" id="Vector_10" />
          <path d={svgPaths.p4865b00} fill="var(--fill-0, #393939)" id="Vector_11" />
          <path d={svgPaths.p889a740} fill="var(--fill-0, #393939)" id="Vector_12" />
          <path d={svgPaths.p3e3b0280} fill="var(--fill-0, #393939)" id="Vector_13" />
          <path d={svgPaths.p2eb13dc0} fill="var(--fill-0, #393939)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="box-border content-stretch flex flex-col items-start p-[8px] relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container125() {
  return (
    <div className="box-border content-stretch flex flex-col items-start min-w-[265.3px] p-[8px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#393939] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">All holidays are ATOL protected!</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[339px]" data-name="Container">
      <Container124 />
      <Container125 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Container126 />
        </div>
      </div>
    </div>
  );
}

function AtolContainer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="ATOL Container">
      <Background1 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#fff7fc] relative rounded-[4px] shrink-0 w-full" data-name="Content Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[10px] py-0 relative w-full">
          <Content1 />
          <AtolContainer />
        </div>
      </div>
    </div>
  );
}

function PriceSummaryActive() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[405px]" data-name="Price Summary - Active">
      <Header />
      <ContentContainer />
    </div>
  );
}

function Call1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="call 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="call 2">
          <path clipRule="evenodd" d={svgPaths.p27482180} fill="var(--fill-0, #595858)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Telephone1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="telephone">
      <Call1 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[24px] text-nowrap whitespace-pre">020 8123 1234</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[6.25%_3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 21">
        <g id="Group">
          <path d={svgPaths.p58a5700} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[31.25%_21.88%_62.5%_21.88%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
        <g id="Group">
          <path d={svgPaths.p2ed9c670} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-1/2 left-[21.88%] right-[46.88%] top-[43.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
        <g id="Group">
          <path d={svgPaths.p1cfed800} fill="var(--fill-0, #595858)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X314Comment1() {
  return (
    <div className="absolute contents inset-[6.25%_3.13%]" data-name="_x31_4_comment">
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Comment1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="comment">
      <X314Comment1 />
    </div>
  );
}

function Chat1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="chat">
      <Comment1 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[24px] text-nowrap whitespace-pre">chat online</p>
    </div>
  );
}

function Whatsapp2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_1751)" id="whatsapp">
          <path d={svgPaths.p1d7bfc00} fill="var(--fill-0, #595858)" id="Vector" />
          <path d={svgPaths.p1cbe1700} fill="var(--fill-0, #595858)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1751">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Whatsapp3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="whatsapp">
      <Whatsapp2 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[24px] text-nowrap whitespace-pre">send a whatsapp</p>
    </div>
  );
}

function ContactOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="contact-options">
      <Telephone1 />
      <Chat1 />
      <Whatsapp3 />
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Contact Container">
      <ContactOptions />
    </div>
  );
}

function ContactCard() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[405px]" data-name="contact-card">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[24px] text-center w-full">Our team are available 24 hours, 7 days</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-center w-full">Hurry this deal has limited availability - call our helpful team now</p>
      <ContactContainer />
    </div>
  );
}

function FlashSummaryColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="flash-summary_column">
      <PriceSummaryActive />
      <ContactCard />
    </div>
  );
}

function IconTrending() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="icon-trending">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
        <g id="icon-trending" opacity="0.4">
          <path d={svgPaths.p38400500} fill="var(--fill-0, #DF8ABD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DiscountChip() {
  return (
    <div className="bg-[#ffd13d] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[4px] relative rounded-[32px] shrink-0" data-name="discount-chip">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Save upto 60%</p>
    </div>
  );
}

function DestinationCardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[70px] items-center left-[16px] top-[71px] w-[373.333px]" data-name="destination-card_content">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] w-[min-content]">DISCOVER EXCLUSIVES</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]">TRENDING TOP 20</p>
      <DiscountChip />
    </div>
  );
}

function SaleCardItem() {
  return (
    <div className="bg-[#cb2187] h-[208px] relative rounded-[16px] shrink-0 w-full" data-name="sale-card_item">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[208px] items-center justify-center p-[16px] relative w-full">
          <IconTrending />
          <DestinationCardContent />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Main Container">
      <FlashSummaryColumn />
      <SaleCardItem />
    </div>
  );
}

function FlashContentContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="flash-content_container">
      <Container104 />
      <MainContainer />
    </div>
  );
}

function PaddingGlobal4() {
  return (
    <div className="box-border content-stretch flex items-start justify-center px-[40px] py-0 relative shrink-0" data-name="padding-global">
      <FlashContentContainer />
    </div>
  );
}

function LayoutContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-[1440px]" data-name="layout-container">
      <PaddingGlobal4 />
    </div>
  );
}

function TabText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tab text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Hotel Details</p>
    </div>
  );
}

function TabLink() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="tab-link">
      <TabText />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 2">
            <line id="Line 15" stroke="var(--stroke-0, #CB2187)" strokeLinecap="round" strokeWidth="2" x1="1" x2="92" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabText1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tab text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Location</p>
    </div>
  );
}

function TabLink1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="tab-link">
      <TabText1 />
    </div>
  );
}

function TabText2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tab text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Facilities</p>
    </div>
  );
}

function TabLink2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="tab-link">
      <TabText2 />
    </div>
  );
}

function TabText3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tab text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Reviews</p>
    </div>
  );
}

function TabLink3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="tab-link">
      <TabText3 />
    </div>
  );
}

function TabText4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tab text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Fine Print</p>
    </div>
  );
}

function TabLink4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="tab-link">
      <TabText4 />
    </div>
  );
}

function OfferContentNavigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="offer-content-navigation">
      <TabLink />
      <TabLink1 />
      <TabLink2 />
      <TabLink3 />
      <TabLink4 />
    </div>
  );
}

function HotelInfoHeader() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="hotel-info-header">
      <p className="basis-0 font-['Montserrat:Bold',sans-serif] font-bold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#595858] text-[22px]">About The Hotel</p>
    </div>
  );
}

function IconChevronUpThinRegular() {
  return (
    <div className="relative size-[16px]" data-name="icon / chevron-up-thin / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right-thin">
          <path d={svgPaths.p22a3cc00} fill="var(--fill-0, #595858)" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="button">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap underline whitespace-pre">Read less</p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconChevronUpThinRegular />
        </div>
      </div>
    </div>
  );
}

function HotelInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="hotel-info">
      <HotelInfoHeader />
      <div className="font-['Montserrat:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#595858] text-[0px] w-[min-content]">
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">Overview</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] mb-0 text-[16px]">{`The King Evelthon Beach Hotel & Resort is a wonderful beachfront hotel in sunny Paphos that offers a comfortable luxury escape. This hotel offers a memorable stay to its guests, nestled cosily on the Chlorakas bay, within lush and landscaped grounds. Boasting its very own water park, kids' club, spa, and a la carte restaurants, this opulent hotel provides world-class amenities. Well-appointed guestrooms with rich décor and all modern conveniences entice guests to spend their days (and nights) in complete leisure, while the hotel staff provides friendly, unobtrusive hospitality. When you stay at this facility-packed resort, you can make the most of your beach holiday in Paphos.`}</p>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">{`Amenities, Sports & Entertainment`}</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] mb-0 text-[16px]">{`The King Evelthon Beach Hotel & Resort, with an outdoor and indoor pool, provides abundant facilities for guests' leisure. Guests can unwind in the calm atmosphere of its exquisite restaurants and bars. The waterpark is a great spot to have fun with the whole family or take a leisurely stroll through the lovely hotel grounds. For those who want to stay active, there is a spa where they can enjoy soothing massages and therapies, as well as fitness equipment, tennis, and mini football fields. There is also a 'Kid's Club' for the little ones.`}</p>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">{`Food & Drink`}</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] mb-0 text-[16px]">{`The hotel features two wonderful restaurants, one indoors and one outside with alfresco seating. Choose from a range of regional and international cuisines prepared by professional chefs using only the freshest ingredients. The hotel also features three bars where visitors may unwind with their cocktails: the Terrace bar, the Wooden Cosy bar, and the Pool Snack bar. On request, a children's menu is available.`}</p>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">All Inclusive Option</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Breakfast, Buffet, Restaurant: 07:00 - 10:00.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Late Breakfast, Continental, Restaurant: 10:00 - 11:00.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Lunch, Buffet, Restaurant: 12:30 - 14:30.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Afternoon Tea, Lobby Bar: 16:30 - 17:30.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Dinner, Buffet, Restaurant: 18:30 - 21:30.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Dinner, A la Carte Restaurants (El Grego Greek Tavern, Little Italy Italian Restaurant, Viva Mexico Mexican), Once per stay: 18:30 - 22:00.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Midnight snacks: 22:00 - 00:00</span>
          </li>
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Drinks: Locally produced Alcoholic and non-Alcoholic selected times and bars.</span>
          </li>
        </ul>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">Rooms</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] mb-0 text-[16px]">{`The well-appointed guestrooms of the King Evelthon Beach Hotel & Resort have a furnished balcony or a terrace with spectacular views of the Mediterranean Sea. The rooms offer parquet floors, flat-screen satellite TVs, a small fridge, a hairdryer, and free toiletries, as well as a seating area.`}</p>
        <p className="leading-[1.4] text-[16px]">&nbsp;</p>
      </div>
      <Button2 />
    </div>
  );
}

function HotelLocationContent() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="hotel-location-content">
      <div className="font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#595858] text-[0px] w-[848.608px]">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] mb-0 text-[16px]">{`The King Evelthon Beach Hotel & Resort is located on the Chlorakas bay in Paphos Town. Chloraka is famous for its tangerine sunsets and pleasant weather all year. The major tourist attraction, Tombs of the Kings, is only 2 kms away. The Agia Kyriaki Chrysopolitissa is 5 kms away. Paphos International Airport is roughly 20 kms away.`}</p>
        <p className="leading-[1.4] mb-0 text-[16px]">&nbsp;</p>
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[16px]">Distances</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Seafront (access to the sea is via steps from rocks)</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">800m from the nearest shops, bars, and restaurants</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">3km from the beach</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">3km from Paphos resort centre</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">8km from Coral Bay resort centre.</span>
          </li>
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] text-[16px]">Approximate transfer time 50 minutes</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function HotelLocation() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="hotel-location">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#595858] text-[20px] w-[848.608px]">Location</p>
      <div className="h-[217px] relative shrink-0 w-full" data-name="google-maps-api">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGoogleMapsApi} />
      </div>
      <HotelLocationContent />
    </div>
  );
}

function FacilitiesColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="facilities_column">
      <ul className="[white-space-collapse:collapse] block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#595858] text-[16px] text-nowrap">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Rivayat restaurant</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Tamimt restaurant</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Azur restaurant</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Vue bar</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">The Oberoi Spa</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Fitness centre</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Yoga studio</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Clay tennis court</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Swimming pool</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">{`Kids' club`}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Library</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Cooking classes</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Shuttle service</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Laundry service</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Valet parking</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[1.4]">Wi-Fi</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[1.4]">Check-in: 3pm / Checkout: 12pm</span>
        </li>
      </ul>
    </div>
  );
}

function HotelFacilities() {
  return (
    <div className="content-stretch flex gap-[69px] items-start relative shrink-0" data-name="hotel-facilities">
      {[...Array(2).keys()].map((_, i) => (
        <FacilitiesColumn key={i} />
      ))}
    </div>
  );
}

function HotelFacilities1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="hotel-facilities">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#595858] text-[20px] w-[848.608px]">Facilities</p>
      <HotelFacilities />
    </div>
  );
}

function IconTripadvisorFullRegular() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon / tripadvisor-full / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon / tripadvisor-full / regular">
          <circle cx="12" cy="12" fill="var(--fill-0, #00AF87)" id="tripadvisor-full" r="12" />
        </g>
      </svg>
    </div>
  );
}

function IconTripadvisorHalfRegular() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon / tripadvisor-half / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon / tripadvisor-half / regular">
          <g id="tripadvisor-half"></g>
        </g>
      </svg>
    </div>
  );
}

function Tripadvisor() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Tripadvisor">
      {[...Array(4).keys()].map((_, i) => (
        <IconTripadvisorFullRegular key={i} />
      ))}
      <IconTripadvisorHalfRegular />
    </div>
  );
}

function ReviewDetails() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0" data-name="Review details">
      <Tripadvisor />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap underline whitespace-pre">4,090 reviews</p>
    </div>
  );
}

function ReviewHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Review header">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[16px] text-nowrap whitespace-pre">TripAdvisor Reviews</p>
      <ReviewDetails />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap whitespace-pre">Last updated: 01/01/2024</p>
    </div>
  );
}

function TripadvisorReviews() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="tripadvisor-reviews">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#595858] text-[20px] text-nowrap whitespace-pre">Reviews</p>
      <ReviewHeader />
    </div>
  );
}

function IconChevronUpThinRegular1() {
  return (
    <div className="relative size-[16px]" data-name="icon / chevron-up-thin / regular">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right-thin">
          <path d={svgPaths.p22a3cc00} fill="var(--fill-0, #595858)" id="Right_Arrow_4_" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="button">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#595858] text-[14px] text-nowrap underline whitespace-pre">Read less</p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconChevronUpThinRegular1 />
        </div>
      </div>
    </div>
  );
}

function OfferConditions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1280px]" data-name="offer-conditions">
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#595858] text-[0px] w-[min-content]">
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.4] mb-0 text-[20px]">Fine Print</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">Our prices are per person, based on two people sharing, and are all subject to availability.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">Prices are correct at time of publish are subject to change at any time.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`Our offers are extremely popular as many are exclusive or  have added values therefore they operate on a first come first served  basis with limited availability.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`Any upgrades and extras not outlined with the promotional  offers can be added however all costs will be an additional cost payable  by the customer.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`Once flights are confirmed the onus is with the client/s to  complete their own online check-in, if you require this service or  additional support from the team a supplement will apply.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">Our premium support package is not included in the deal.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`This website / landing page does not host live pricing, we  will endeavour to keep our prices updated as close to live prices as  possible.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`Please note that this website is a price service providing  website and its motive is solely to assist customers in sourcing the  availability of travel-related goods and services and to make  permissible reservations or otherwise perform business with suppliers.  We do not operate any suppliers.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">We do not share our client data with any third parties.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">We are TTA bonded and ATOL protected.</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))] whitespace-pre-wrap">
            <span className="leading-[1.4] text-[16px]">{`If you are banned from flying with any airline we will be  forced to cancel your holiday and refund would be processed without any  notice.`}</span>
          </li>
          <li className="mb-0 ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">Any refunds made by us will take 7-10 business days,</span>
          </li>
          <li className="ms-[calc(1.5*1*var(--list-marker-font-size,0))]">
            <span className="leading-[1.4] text-[16px]">We hold right to ask you for any identity proof or payment authorisation code/s in order to avoid any fraudulent transactions</span>
          </li>
        </ul>
      </div>
      <Button3 />
    </div>
  );
}

function MaxWidthXlarge() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="max-width-xlarge">
      <OfferContentNavigation />
      <HotelInfo />
      <HotelLocation />
      <HotelFacilities1 />
      <TripadvisorReviews />
      <OfferConditions />
    </div>
  );
}

function PaddingSection4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center overflow-clip px-0 py-[24px] relative shrink-0 w-full" data-name="padding-section-24">
      <MaxWidthXlarge />
    </div>
  );
}

function ContainerLarge4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSection4 />
    </div>
  );
}

function PaddingGlobal5() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge4 />
        </div>
      </div>
    </div>
  );
}

function SectionOfferContent() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1440px]" data-name="section_offer-content">
      <PaddingGlobal5 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 z-[4]" data-name="container">
      <LayoutContainer />
      <SectionOfferContent />
    </div>
  );
}

function IconTrending1() {
  return (
    <div className="relative size-[131px]" data-name="icon-trending">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 131">
        <g id="icon-trending">
          <path d={svgPaths.p30e38040} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col h-[70px] items-center leading-[1.4] relative shrink-0 text-white w-[373.333px]" data-name="Container">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium relative shrink-0 text-[14px] tracking-[0.14px] w-full">DISCOVER EXCLUSIVES</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[24px] w-full">TRENDING TOP 20</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#cb2187] box-border content-stretch flex gap-[10px] h-[46px] items-center justify-center px-[32px] py-[12px] relative rounded-[8px] shrink-0" data-name="button">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Find Your Pefect Deal</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Container128 />
      <Button4 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex h-[131px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconTrending1 />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Banners() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[208px] items-start justify-center overflow-clip px-[45px] py-[30px] relative rounded-[8px] shrink-0 w-[1280px]" data-name="Banners">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgBanners} />
      <Container129 />
    </div>
  );
}

function SectionBannerSpecial() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[80px] py-[60px] relative shrink-0 w-[1440px] z-[3]" data-name="section-banner-special">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgSectionBannerSpecial} />
      <Banners />
    </div>
  );
}

function LowPrices() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="low-prices">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_1734)" id="low-prices">
          <path d={svgPaths.p2d1cef80} id="Vector" stroke="var(--stroke-0, #666666)" />
        </g>
        <defs>
          <clipPath id="clip0_3_1734">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function KspCard() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center p-[16px] relative shrink-0 w-[256px]" data-name="ksp-card">
      <LowPrices />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#666666] text-[0px] text-[14px] text-center w-[220px]">
        <span>{`We offer `}</span>
        <span className="font-['Montserrat:Bold',sans-serif] font-bold">low deposits</span>
        <span>{` for as little as £29 per person`}</span>
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[12.54%] left-[12.54%] right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group">
          <path d={svgPaths.p20c0ba00} id="Vector" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p304b1e00} id="Vector_2" stroke="var(--stroke-0, #666666)" />
        </g>
      </svg>
    </div>
  );
}

function Pound() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="pound">
      <Group16 />
    </div>
  );
}

function KspCard1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center p-[16px] relative shrink-0 w-[256px]" data-name="ksp-card">
      <Pound />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#666666] text-[0px] text-[14px] text-center w-[220px]">
        <span>{`Helpful `}</span>
        <span className="font-['Montserrat:Bold',sans-serif] font-bold">spread the cost</span>
        <span>{` payment options`}</span>
      </p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-0 left-[6.05%] right-[6.05%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 32">
        <g id="Group">
          <path d={svgPaths.p65bfec0} id="Vector" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p2eb0300} id="Vector_2" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p244c5580} id="Vector_3" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p8f43e00} id="Vector_4" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p3270eb00} id="Vector_5" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p3b4f040} id="Vector_6" stroke="var(--stroke-0, #666666)" />
        </g>
      </svg>
    </div>
  );
}

function HelpDesk() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="help-desk">
      <Group17 />
    </div>
  );
}

function KspCard2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center p-[16px] relative shrink-0 w-[256px]" data-name="ksp-card">
      <HelpDesk />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#666666] text-[0px] text-[14px] text-center w-[220px]">
        <span>{`Our `}</span>
        <span className="font-['Montserrat:Bold',sans-serif] font-bold">24/7 support service</span>
        <span>{` - always here to help you.`}</span>
      </p>
    </div>
  );
}

function Protection() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="protection">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_1725)" id="protection">
          <path d={svgPaths.p22de5180} id="Vector" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p27b03800} id="Vector_2" stroke="var(--stroke-0, #666666)" />
          <path d={svgPaths.p23d74f00} id="Vector_3" stroke="var(--stroke-0, #666666)" />
        </g>
        <defs>
          <clipPath id="clip0_3_1725">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function KspCard3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center p-[16px] relative shrink-0 w-[256px]" data-name="ksp-card">
      <Protection />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#666666] text-[0px] text-[14px] text-center w-[220px]">
        <span className="font-['Montserrat:Regular',sans-serif] font-normal">{`We'll `}</span>price match<span className="font-['Montserrat:Regular',sans-serif] font-normal">{` any product against any other retailer`}</span>
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[3.13%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Icon">
          <path d={svgPaths.p2e87cc00} id="Vector" stroke="var(--stroke-0, #666666)" />
        </g>
      </svg>
    </div>
  );
}

function Insurance() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="insurance">
      <Icon />
    </div>
  );
}

function KspCard4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center p-[16px] relative shrink-0 w-[256px]" data-name="ksp-card">
      <Insurance />
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#666666] text-[0px] text-[14px] text-center w-[220px]">
        <p className="mb-0">Enjoy peace of mind with</p>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold">fully bonded holidays</p>
      </div>
    </div>
  );
}

function KspCardWrapper() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="ksp-card_wrapper">
      <KspCard />
      <KspCard1 />
      <KspCard2 />
      <KspCard3 />
      <KspCard4 />
    </div>
  );
}

function CarouselContainer() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="carousel_container">
      <KspCardWrapper />
    </div>
  );
}

function BenefitsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full" data-name="benefits_content">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#666666] text-[24px] w-full">Holidays you can trust....</p>
      <CarouselContainer />
    </div>
  );
}

function NavLinkSmall() {
  return (
    <div className="h-[20px] relative shrink-0 w-[146px]" data-name="nav-link-small">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[1.4] text-[#666666] text-[14px] text-nowrap underline whitespace-pre">Learn more about us</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-end p-[8px] relative shrink-0" data-name="link_container">
      <NavLinkSmall />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#cb2187] box-border content-stretch flex gap-[10px] h-[46px] items-center justify-center px-[32px] py-[12px] relative rounded-[8px] shrink-0" data-name="button">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Let’s Chat</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[32px] items-end relative shrink-0" data-name="Link">
      <LinkContainer />
      <Button5 />
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="links_container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end p-[10px] relative w-full">
          <Link />
        </div>
      </div>
    </div>
  );
}

function BenefitsComponent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="benefits_component">
      <BenefitsContent />
      <LinksContainer />
    </div>
  );
}

function SectionTrust() {
  return (
    <div className="bg-[#ededed] box-border content-stretch flex flex-col items-center overflow-clip pb-[24px] pt-[32px] px-[80px] relative shrink-0 w-[1440px] z-[2]" data-name="section_trust">
      <BenefitsComponent />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute h-[25.613px] left-[1.87px] top-[0.29px] w-[158.235px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159 26">
        <g id="Group 2">
          <g id="PLAN">
            <path d={svgPaths.p17594a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14641200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c160900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p190a8200} fill="var(--fill-0, white)" />
          </g>
          <g id="MY">
            <path d={svgPaths.p17cb1100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2fd41e00} fill="var(--fill-0, white)" />
          </g>
          <path d={svgPaths.p2bd05900} fill="var(--fill-0, white)" id="Rectangle 40" />
          <g id="uxe">
            <path d={svgPaths.pdec3a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p109dca00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b5c7680} fill="var(--fill-0, white)" />
          </g>
          <g id="Luxury for less">
            <path d={svgPaths.p6748780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28e7e9f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bf79300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3deb7900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p522c200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10d2c080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b170700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1fbdf400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1322c000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ec3b380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e790f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22d40d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24bd5300} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[68.83%_37.16%_12.82%_52.19%]">
      <div className="absolute inset-[-11.68%_-3.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 6">
          <g id="Group 3">
            <path d={svgPaths.pdaf5840} id="path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.11437" />
            <path d={svgPaths.p78567e0} id="path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.11437" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo2Main1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[160px]" data-name="logo2-main">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Logo2White() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="logo2-white">
      <Logo2Main1 />
    </div>
  );
}

function AtolWhite() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ATOL-white">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_1710)" id="ATOL-white">
          <path d={svgPaths.p3b967400} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2de81b80} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p242083c0} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
          <path d={svgPaths.p68ae000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p12842200} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_3_1710">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AtolHeaderWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="atol-header_wrapper">
      <AtolWhite />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">ALL HOLIDAYS ARE ATOL PROTECTED</p>
    </div>
  );
}

function LogoFooterContentWrapper() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="logo-footer-content_wrapper">
      <Logo2White />
      <AtolHeaderWrapper />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="section-header">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">CONTACT</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(223, 138, 189, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 2">
            <line id="Line 12" stroke="var(--stroke-0, #DF8ABD)" strokeLinecap="round" strokeWidth="2" x1="1" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EnquiryLink() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-end px-[4px] py-[8px] relative shrink-0" data-name="enquiry_link">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white underline whitespace-pre">Send an enquiry</p>
    </div>
  );
}

function IconHeadset1() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[24px]" data-name="icon-headset">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-headset">
          <path clipRule="evenodd" d={svgPaths.p2837a240} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TelephoneLink1() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center px-0 py-[8px] relative shrink-0" data-name="telephone_link">
      <IconHeadset1 />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">020 3740 0744</p>
    </div>
  );
}

function SupportContactWrapper1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="support-contact_wrapper">
      <EnquiryLink />
      <TelephoneLink1 />
    </div>
  );
}

function SupportLinksContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="support-links_container">
      <SupportContactWrapper1 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[4px] py-[10px] relative shrink-0" data-name="section-header">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">SOCIAL MEDIA</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(223, 138, 189, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 2">
            <line id="Line 12" stroke="var(--stroke-0, #DF8ABD)" strokeLinecap="round" strokeWidth="2" x1="1" x2="124" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.pb233c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_1701)" id="Facebook">
          <path d={svgPaths.p2c14000} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1701">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.pb776a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p24af4d00} fill="var(--fill-0, #595858)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[0.02%] left-0 right-[0.06%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.pb5b4340} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pc090600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3ba67800} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Instagram">
      <Group20 />
    </div>
  );
}

function Google() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_1689)" id="Google">
          <path clipRule="evenodd" d={svgPaths.p348b3500} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_3_1689">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIconsContainer() {
  return (
    <div className="box-border content-stretch flex gap-[24px] items-start px-[4px] py-0 relative shrink-0" data-name="social-icons_container">
      <LinkedIn />
      <Facebook />
      <Twitter />
      <Instagram />
      <Google />
    </div>
  );
}

function SocialFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Social Frame">
      <SectionHeader1 />
      <SocialIconsContainer />
    </div>
  );
}

function ContactInfoWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="contact-info_wrapper">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">PlanMyLuxe is a trading name of Plan My Tour Ltd.</p>
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`314 Midsummer Boulevard, `}</p>
        <p>Milton Keynes, Beds MK9 2UB</p>
      </div>
      <SupportLinksContainer />
      <SocialFrame />
    </div>
  );
}

function FooterContactColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="footer-contact_column">
      <SectionHeader />
      <ContactInfoWrapper />
    </div>
  );
}

function FooterLinksHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="footer-links-header">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">{`HELP & SUPPORT`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(223, 138, 189, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 2">
            <line id="Line 12" stroke="var(--stroke-0, #DF8ABD)" strokeLinecap="round" strokeWidth="2" x1="1" x2="148" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterLinkRegular() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Latest Travel Advice</p>
    </div>
  );
}

function FooterLinkRegular1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function FooterLinkRegular2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Frequently Asked Questions</p>
    </div>
  );
}

function FooterLinkRegular3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">{`Feedback & Reviews`}</p>
    </div>
  );
}

function FooterLinkRegular4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Download our brochure</p>
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="footer-links_column">
      <FooterLinksHeader />
      <FooterLinkRegular />
      <FooterLinkRegular1 />
      <FooterLinkRegular2 />
      <FooterLinkRegular3 />
      <FooterLinkRegular4 />
    </div>
  );
}

function FooterLinksHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="footer-links-header">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">USEFUL LINKS</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(223, 138, 189, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 2">
            <line id="Line 12" stroke="var(--stroke-0, #DF8ABD)" strokeLinecap="round" strokeWidth="2" x1="1" x2="122" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterLinkRegular5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLinkRegular6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Why Choose Us</p>
    </div>
  );
}

function FooterLinkRegular7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Payment Options</p>
    </div>
  );
}

function FooterLinkRegular8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function FooterLinkRegular9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Work for us</p>
    </div>
  );
}

function FooterLinkRegular10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="footer-link-regular">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.64px] whitespace-pre">Sitemap</p>
    </div>
  );
}

function FooterLinksColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="footer-links_column">
      <FooterLinksHeader1 />
      <FooterLinkRegular5 />
      <FooterLinkRegular6 />
      <FooterLinkRegular7 />
      <FooterLinkRegular8 />
      <FooterLinkRegular9 />
      <FooterLinkRegular10 />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="footer-content">
      <FooterContactColumn />
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

function NewsletterHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="newsletter-header">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.32px] whitespace-pre">SIGNUP TO OUR NEWSLETTER</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(223, 138, 189, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <line id="Line 12" stroke="var(--stroke-0, #DF8ABD)" strokeLinecap="round" strokeWidth="2" x1="1" x2="259" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NewsletterHeaderWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="newsletter-header_wrapper">
      <NewsletterHeader />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Receive exclusive deals and discounts</p>
    </div>
  );
}

function NameField() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="name_field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ededed] text-[20px] text-nowrap whitespace-pre">FULL NAME</p>
        </div>
      </div>
    </div>
  );
}

function IconCheckThinRegular() {
  return <div className="shrink-0 size-[16px]" data-name="icon / check-thin / regular" />;
}

function FormFieldStandard() {
  return (
    <div className="bg-[#9f9f9f] box-border content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[380px]" data-name="form-field-standard">
      <NameField />
      <IconCheckThinRegular />
    </div>
  );
}

function EmailField() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="email_field">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#ededed] text-[20px] text-nowrap whitespace-pre">EMAIL ADDRESS</p>
        </div>
      </div>
    </div>
  );
}

function FormFieldEmail() {
  return (
    <div className="bg-[#9f9f9f] box-border content-stretch flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[380px]" data-name="form-field-email">
      <EmailField />
    </div>
  );
}

function FormFieldsWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="form-fields_wrapper">
      <FormFieldStandard />
      <FormFieldEmail />
    </div>
  );
}

function SignupButton() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative shrink-0" data-name="Signup Button">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">SIGNUP</p>
    </div>
  );
}

function ButtonGradient() {
  return (
    <div className="box-border content-stretch flex gap-[62px] h-[48px] items-center justify-center px-[14px] py-[6px] relative rounded-[8px] shrink-0 w-[170px]" data-name="button - gradient">
      <SignupButton />
    </div>
  );
}

function EmailSignupComponent() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="email-signup_component">
      <FormFieldsWrapper />
      <ButtonGradient />
    </div>
  );
}

function FooterNewsletter() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="footer-newsletter">
      <NewsletterHeaderWrapper />
      <EmailSignupComponent />
    </div>
  );
}

function FooterTravelAware() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-travel-aware">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[30px] items-center p-[10px] relative w-full">
          <div className="h-[91.523px] relative shrink-0 w-[100px]" data-name="travel-aware-light 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTravelAwareLight1} />
          </div>
          <div className="basis-0 font-['Montserrat:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="mb-[16px]">TRAVEL AWARE - PREPARING FOR SAFE AND HEALTHY TRAVEL ABROAD</p>
            <p className="mb-[16px]">{`The Foreign, Commonwealth & Development Office (FCDO) provide the latest travel advice by country including safety and security, entry requirements, travel warnings and health. For the latest FCDO advice please refer to www.gov.uk/travelaware`}</p>
            <p>Current travel health information can be found by visiting www.travelhealthpro.org.uk a resource set up by Department of Health. The advice can change on all sites so please check regularly for updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="copyright">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_1673)" id="copyright">
          <path d={svgPaths.p1aa3aa80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p8a47e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1673">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterLegalStatement() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="footer_legal-statement">
      <Copyright />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">2024 Plan My Tour Limited. All Rights Reserved.</p>
    </div>
  );
}

function TextLinkSmall() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="text-link-small">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g id="Frame 313">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" id="Ellipse 23" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function TextLinkSmall1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="text-link-small">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function TextLinkSmall2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="text-link-small">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function FooterLegalLinks() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="footer-legal_links">
      <TextLinkSmall />
      <Frame />
      <TextLinkSmall1 />
      <Frame />
      <TextLinkSmall2 />
    </div>
  );
}

function FooterLegalContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-legal_container">
      <FooterLegalStatement />
      <FooterLegalLinks />
    </div>
  );
}

function FooterContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="footer-content_container">
      <LogoFooterContentWrapper />
      <FooterContent />
      <FooterNewsletter />
      <FooterTravelAware />
      <FooterLegalContainer />
    </div>
  );
}

function PaddingSectionFooter() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[32px] px-0 relative shrink-0 w-full" data-name="padding-section-[footer]">
      <FooterContentContainer />
    </div>
  );
}

function ContainerLarge5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1280px]" data-name="container-large">
      <PaddingSectionFooter />
    </div>
  );
}

function PaddingGlobal6() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding-global">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[40px] py-0 relative w-full">
          <ContainerLarge5 />
        </div>
      </div>
    </div>
  );
}

function FooterContentContainer1() {
  return (
    <div className="bg-[#666666] content-stretch flex flex-col items-center overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[1440px]" data-name="footer-content_container">
      <PaddingGlobal6 />
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="footer_component">
      <FooterContentContainer1 />
    </div>
  );
}

export default function OfferPageActiveDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Offer Page - ACTIVE / Desktop 1442">
      <NavbarClosed />
      <SectionOfferPageHeader />
      <SectionImageGallery />
      <SectionOfferShare />
      <Container127 />
      <SectionBannerSpecial />
      <SectionTrust />
      <FooterComponent />
    </div>
  );
}