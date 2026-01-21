import Link from "next/link";
import { Phone } from "lucide-react";

type ContactAndTrendingProps = {
  phoneNumber?: string;
};

export default function ContactAndTrending({
  phoneNumber = "020 8123 1234",
}: ContactAndTrendingProps) {
  return (
    <>
      <Link
        href="https://planmyluxe.co.uk/top-trending-20"
        className="bg-pml-primary relative overflow-hidden rounded-[16px] p-[24px] sm:p-[28px] md:p-[32px] lg:p-[36px] h-[164px] sm:h-[164px] md:h-[185px] flex flex-col justify-center items-center text-center"
      >
        <svg
          viewBox="0 0 374 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        >
          <g opacity="0.4">
            <path
              d="M165.099 15.0549C191.573 20.568 208.739 30.361 217.252 44.4012C220.518 49.7873 221.127 55.3032 220.735 60.8919C220.315 66.8725 221.839 72.6622 226.678 78.1572C231.58 83.7249 240.917 88.3734 252.051 90.3914C246.266 85.3573 243.227 80.1059 244.758 74.6171C246.179 69.5184 248.961 64.5019 251.727 59.5387C253.02 57.2179 256.607 56.5892 260.394 57.8466C300.886 71.2918 328.154 89.3771 326.604 115.656C325.14 140.465 304.698 160.433 263.583 173.756C251.539 177.659 238.339 180.178 224.487 181.707C223.129 181.856 221.4 181.93 220.25 181.622C203.207 177.046 187.029 171.822 174.94 163.791C157.197 152.006 154.742 138.892 162.98 124.886C167.5 117.202 176.548 107.709 183.458 103.513C198.391 110.477 207.203 119.115 209.856 129.496C212.425 139.552 209.354 149.228 202.749 158.669C202.298 159.314 201.402 160.129 201.796 160.631C202.702 161.788 203.824 163.245 205.685 163.765C208.373 164.516 211.464 163.832 212.566 162.202C224.775 144.137 227.844 126.156 207.63 109.06C202.165 104.438 193.757 100.747 186.394 96.7852C183.558 95.2593 179.859 95.3964 177.337 97.1904C157.917 111.008 144.154 125.985 147.208 143.683C149.441 156.623 161.162 167.273 180.291 175.533C186.74 178.317 193.79 180.717 201.834 183.775C194.58 183.775 188.557 183.875 182.55 183.758C154.7 183.217 128.156 180.095 104.042 172.433C74.4409 163.027 56.8234 149.105 49.8981 131.523C40.6164 107.958 51.4514 86.9279 80.8316 68.5408C94.9054 59.7329 109.982 51.4737 127.82 44.6456C139.653 40.1157 143.598 32.5447 138.57 25.3073C136.552 22.4024 133.129 19.7744 130.752 16.9267C129.777 15.7578 128.748 13.9424 129.777 13.141C131.008 12.1828 134.638 11.3679 136.843 11.583C146.218 12.4981 155.45 13.8171 165.099 15.0549Z"
              fill="#DF8ABD"
            />
          </g>
        </svg>

        <div className="relative z-10 mt-8">
          <span className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold tracking-[1.5px] leading-[1%] uppercase mb-[4px] sm:mb-[6px] md:mb-[8px] block">
            DISCOVER EXCLUSIVES
          </span>
          <h3 className="text-white text-[18px] sm:text-[22px] md:text-[24px] lg:text-[24px] font-bold leading-[1.2] mb-[6px] sm:mb-[7px] md:mb-[8px] lg:mb-[10px]">
            TRENDING TOP 20
          </h3>
          <span className="inline-block bg-[#f5d742] text-[#1a1a1a] text-[8px] sm:text-[10px] md:text-[14px] font-bold px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] py-[6px] sm:py-[6px] md:py-[6px] lg:py-[6px] rounded-full">
            Save upto 60%
          </span>
        </div>
      </Link>
    </>
  );
}


