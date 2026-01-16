import { HotelDeal } from "@/types/hotel";
import {
  formatAirline,
  formatAirport,
  formatDateTime,
  getBoardBasisText,
  getEffectivePrice,
  getPricePerPerson,
} from "@/lib/hotel-utils";
import { useParams, useRouter } from "next/navigation";
import { Phone } from "lucide-react";

type FlightSummaryProps = {
  selectedDeal?: HotelDeal | null;
  emptyStateMessage?: string;
  onBookNow?: () => void;
};

export default function FlightSummary({
  selectedDeal,
  emptyStateMessage =
    "We couldn’t find any offers that match your current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll create the perfect travel plan tailored just for you.",
  onBookNow,
}: FlightSummaryProps) {
  const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>();
  const safeSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!selectedDeal) {
    return (
      <div className="w-full md:max-w-[405px] h-fit bg-[#FFF7FC] rounded-[4px] font-['Montserrat']">
        <div className="bg-[#595858] text-white px-3 py-4 rounded-t-[4px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold text-[#ffffff]">Holiday Summary</h2>
        </div>

        <div className="p-3 rounded-b-[4px]">
          <div className="min-h-[520px] flex items-center justify-center text-center px-4">
            <div>
              <div className="text-[#242F40] font-semibold text-[16px]">No deal found</div>
              <div className="text-[#242F40] font-normal text-[14px] mt-1">We couldn’t find any offers that match your
            current search, but don’t worry — our team is ready to help! Please call us or send an enquiry, and we’ll
            create the perfect travel plan tailored just for you.</div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBookNow}
                  className="flex-1 bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 sm:py-2.5 rounded-[8px] transition-all duration-200 text-[16px]"
                >
                  Enquire Now
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!safeSlug) return;
                    router.push(`/hotels/${safeSlug}`);
                  }}
                  className="shrink-0 whitespace-nowrap bg-[#595858] hover:bg-[#4C4C4C] text-white font-semibold py-3 px-6 rounded-[8px] transition-all duration-200 text-[16px]"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const outbound = formatDateTime(selectedDeal.flight.outboundDepartureDate);
  const outboundArrival = formatDateTime(selectedDeal.flight.outboundArrivalDate);
  const inbound = formatDateTime(selectedDeal.flight.inboundDepartureDate);
  const inboundArrival = formatDateTime(selectedDeal.flight.inboundArrivalDate);

  const outboundFlightNumber = `${formatAirline(selectedDeal.flight.outboundFlightSupplier)} - ${selectedDeal.flight.outboundFlightNumber}`;
  const inboundFlightNumber = `${formatAirline(selectedDeal.flight.inboundFlightSupplier)} - ${selectedDeal.flight.inboundFlightNumber}`;

  const departureCode = `${formatAirport(selectedDeal.flight.departureAirportCode)}`;
  const arrivalCode = `${formatAirport(selectedDeal.flight.arrivalAirportCode)}`;

  const pricePerPerson = getPricePerPerson(getEffectivePrice(selectedDeal));

  return (
      <div className="w-full md:max-w-[405px] h-fit bg-[#FFF7FC] rounded-[4px] font-['Montserrat']">
        <div className="bg-[#595858] text-white px-3 py-4 rounded-t-[4px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold text-[#ffffff]">Holiday Summary</h2>
        </div>

        <div className="p-3 rounded-b-[4px]">
          <div className="mb-4">
            <div className="text-[#242F40] font-normal text-[16px] mb-1">Total Holiday Duration</div>
            <div className="text-[16px] md:text-[24px] font-medium text-[#242F40]">
              {selectedDeal.hotel.duration} nights
            </div>
          </div>

          <div className="border-t border-[1px] border-[#9F9F9F] mb-5" />

          <div className="mb-5">
            <div className="flex items-start gap-3 mb-2">
              <div className="mt-[3px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6281 15.83L14.4163 5.7616C14.4163 5.47948 14.5924 5.10933 14.8222 4.93284L15.5977 4.36859C15.6157 4.36859 15.6157 4.35099 15.6157 4.35099L17.5906 2.90517C17.6082 2.88711 17.6434 2.86996 17.661 2.85236C18.2604 2.34092 18.6134 1.14157 18.0492 0.471695C17.4849 -0.198176 16.2504 -0.0925492 15.6333 0.401277L12.9881 2.62305C12.7764 2.79909 12.3711 2.88756 12.089 2.81715L2.40878 0.190024C2.12666 0.119155 1.73891 0.207177 1.5272 0.418882L0.751256 1.15917C0.539551 1.35327 0.575212 1.61779 0.839278 1.75908L8.50939 5.79681C8.7563 5.93809 8.79151 6.18501 8.58026 6.37911L4.64815 9.64089H4.52447L0.645629 9.19988C0.504342 9.18227 0.345451 9.28835 0.310243 9.41203L0.0105159 10.3636C-0.024693 10.5049 0.0285717 10.6638 0.169407 10.7337L2.86695 12.1448C2.99063 12.2152 3.13146 12.3741 3.14907 12.5149L3.8546 15.4774C3.88981 15.6183 4.03064 15.7239 4.17193 15.7063L5.15958 15.6535C5.2322 15.6501 5.30149 15.6221 5.356 15.574C5.4105 15.5259 5.44695 15.4606 5.45931 15.389L5.97029 11.5097C5.97029 11.4745 5.98835 11.4216 6.00595 11.3864L8.31574 9.71176C8.33335 9.71176 8.33334 9.69371 8.35095 9.69371L10.1493 8.38917C10.3786 8.21268 10.6255 8.3183 10.6959 8.58327L12.7588 16.9937C12.8297 17.2758 13.0766 17.3638 13.3231 17.223L14.2227 16.6407C14.4516 16.4827 14.6457 16.1121 14.6281 15.83Z" fill="#595858"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="font-semibold text-[#393939] text-[14px] leading-[24px]">Outbound flight:</span>
                  <span className="text-[14px] text-[#393939] leading-[24px] font-normal">{outboundFlightNumber}</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-[#393939] text-[14px] leading-[24px]">{departureCode}</div>
                    <div className="text-[14px] text-[#393939] leading-[24px] font-normal">
                      {outbound.date}, {outbound.time}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#393939] text-[14px] leading-[24px]">{arrivalCode}</div>
                    <div className="text-[14px] text-[#393939] leading-[24px] font-normal">
                      {outboundArrival.date}, {outboundArrival.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="mt-[3px]">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.70495 15.83L3.91666 5.7616C3.91666 5.47948 3.74061 5.10933 3.51085 4.93284L2.73536 4.36859C2.7173 4.36859 2.7173 4.35099 2.7173 4.35099L0.742445 2.90517C0.72484 2.88711 0.689631 2.86996 0.672026 2.85236C0.0725727 2.34092 -0.280416 1.14157 0.283829 0.471695C0.848072 -0.198176 2.08264 -0.0925492 2.69969 0.401277L5.34487 2.62305C5.55658 2.79909 5.96193 2.88756 6.24405 2.81715L15.9242 0.190024C16.2064 0.119155 16.5941 0.207177 16.8058 0.418882L17.5818 1.15917C17.7935 1.35327 17.7578 1.61779 17.4937 1.75908L9.82362 5.79681C9.57671 5.93809 9.5415 6.18501 9.75275 6.37911L13.6849 9.64089H13.8085L17.6874 9.19988C17.8287 9.18227 17.9876 9.28835 18.0228 9.41203L18.3225 10.3636C18.3577 10.5049 18.3044 10.6638 18.1636 10.7337L15.4661 12.1448C15.3424 12.2152 15.2015 12.3741 15.1839 12.5149L14.4784 15.4774C14.4432 15.6183 14.3024 15.7239 14.1611 15.7063L13.1734 15.6535C13.1008 15.6501 13.0315 15.6221 12.977 15.574C12.9225 15.5259 12.8861 15.4606 12.8737 15.389L12.3627 11.5097C12.3627 11.4745 12.3447 11.4216 12.3271 11.3864L10.0173 9.71176C9.99966 9.71176 9.99966 9.69371 9.98206 9.69371L8.1837 8.38917C7.95439 8.21268 7.70748 8.3183 7.63706 8.58327L5.57418 16.9937C5.50331 17.2758 5.2564 17.3638 5.00994 17.223L4.11031 16.6407C3.88145 16.4827 3.68735 16.1121 3.70495 15.83Z" fill="#595858"/>
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="font-semibold text-[#393939] text-[14px] leading-[24px]">Inbound flight:</span>
                  <span className="text-[14px] text-[#393939] leading-[24px] font-normal">{inboundFlightNumber}</span>
                </div>
                <div className="flex justify-between items-start text-sm sm:text-base">
                  <div>
                    <div className="font-semibold text-[#393939] text-[14px] leading-[24px]">{arrivalCode}</div>
                    <div className="text-[14px] text-[#393939] leading-[24px] font-normal">
                      {inbound.date}, {inbound.time}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#393939] text-[14px] leading-[24px]">{departureCode}</div>
                    <div className="text-[14px] text-[#393939] leading-[24px] font-normal">
                      {inboundArrival.date}, {inboundArrival.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!!selectedDeal.hotel.boardBasis && (
              <div className="mt-2 flex items-center gap-1 text-[#393939] text-[14px] leading-[24px] font-normal">
                <span className="p-1 inline-flex items-center justify-center w-7 h-7">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4063 2.1875L17.4053 17.2012C17.6741 17.6436 17.9522 17.8136 18.1854 17.8125C18.4168 17.8114 18.6919 17.6393 18.9555 17.2102L18.2357 9.5418L18.2273 9.4484L18.2849 9.37394C19.112 8.31266 19.4011 6.4791 19.1651 4.92824C19.0471 4.15277 18.8002 3.4509 18.4544 2.95473C18.1644 2.53863 17.8184 2.2732 17.4064 2.1875H17.4063ZM2.86043 2.18766L2.8598 4.8098L2.36918 4.80918V2.18781H1.81039L1.81047 4.8093H1.31914V2.18781H0.75V6.22016C0.749961 6.66613 0.993359 6.91344 1.37656 7.06633L1.53516 7.12969L1.53164 7.30039C1.45352 10.6039 1.37629 13.9074 1.29875 17.2109C1.56594 17.648 1.84039 17.8136 2.06891 17.8125C2.29742 17.8114 2.57164 17.6415 2.83543 17.2097C2.745 13.9071 2.65457 10.6044 2.5643 7.30172L2.55961 7.12984L2.71871 7.06711C3.12199 6.90672 3.3843 6.63453 3.3843 6.22039V2.18766H2.86043ZM10.0005 3.71094C8.33258 3.71094 6.73294 4.37353 5.55351 5.55296C4.37408 6.73239 3.71148 8.33204 3.71148 10C3.71148 11.668 4.37408 13.2676 5.55351 14.447C6.73294 15.6265 8.33258 16.2891 10.0005 16.2891C11.6685 16.2891 13.2682 15.6265 14.4476 14.447C15.627 13.2676 16.2896 11.668 16.2896 10C16.2896 8.33204 15.627 6.73239 14.4476 5.55296C13.2682 4.37353 11.6685 3.71094 10.0005 3.71094Z" fill="#595858"/>
                  </svg>
                </span>
                <span>{getBoardBasisText(selectedDeal.hotel.boardBasis)}</span>
              </div>
            )}
          </div>

          <div className="border-t border-[1px] border-[#9F9F9F] mb-5" />

          <div className="text-[16px] text-[#242F40] font-normal mb-4 flex justify-between items-center">
            <span>
              Price Per Person From
              <br />
              <span>(incl. Flights)</span>
            </span>
            <div className="text-[16px] md:text-[32px] font-semibold text-[#242F40]">{pricePerPerson}</div>
          </div>

          <div className="flex justify-between items-center mb-6 text-[16px] text-[#242F40] font-normal">
            <span className="">Quote Ref:</span>
            <span className="text-[16px] tracking-[0.02em] font-bold text-[#242F40]">{selectedDeal.quoteReference}</span>
          </div>

          <button
            onClick={onBookNow}
            className="w-full bg-pml-primary hover:bg-pink-800 text-white font-semibold py-3 sm:py-2.5 rounded-[8px] transition-all duration-200 text-[16px]"
          >
            Book Now
          </button>
          {/* ATOL Card */}
          <div className="flex flex-col items-center mt-2 py-2 gap-[10px] w-full max-w-[385px]">
            <div className="flex flex-col items-center justify-center w-full h-[68px] bg-white rounded-[8px]">
              <div className="flex flex-row justify-center items-center p-0 w-full max-w-[339px] h-[52px]">
                <div className="flex flex-col items-center p-2 w-[52px] h-[52px]">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#393939]"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#clip0_atol)">
                      <path
                        d="M16.7015 13.6654C16.7015 13.6654 13.9297 13.609 12.5703 10.9013C10.6459 7.11958 14.6077 5.08789 14.6077 5.08789L18.1174 5.70761L16.7015 13.6654Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8.09961 14.5672L8.66456 14.6799L8.49508 14.1729L8.09961 14.5672ZM12.9088 14.8489C12.7393 14.7926 12.5698 14.8489 12.4568 14.8489C12.3438 14.9052 12.2308 15.0179 12.2308 15.1306C12.2308 15.2433 12.2308 15.356 12.3438 15.4686C12.4568 15.5813 12.5698 15.6376 12.7958 15.6376C12.9653 15.694 13.1348 15.6376 13.2478 15.6376C13.3608 15.5813 13.4737 15.4686 13.4737 15.356C13.4737 15.2433 13.4737 15.1306 13.3608 15.0179C13.2478 14.9616 13.0783 14.9052 12.9088 14.8489Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.1574 12.1973C8.83753 9.7712 8.83753 6.95078 10.2535 4.35219L8.32907 4.01416L6.17871 16.1444L15.9101 17.8381L16.5315 14.2254C16.6445 14.2254 13.4772 14.6198 11.1574 12.1937V12.1973ZM8.89403 15.1867L8.78104 14.905L7.9336 14.736L7.70762 14.9613L7.19916 14.8487L8.21608 13.8346L8.78104 13.9473L9.40249 15.2466L8.89403 15.1902V15.1867ZM11.6093 14.6797L10.9314 14.567L10.7619 15.5247L10.2535 15.412L10.4229 14.4543L9.74499 14.3416L9.80149 14.1163L11.6694 14.4543L11.6129 14.6797H11.6093ZM13.9292 15.4684C13.8727 15.6937 13.7597 15.8064 13.4772 15.8628C13.3077 15.9191 13.0253 15.9191 12.6863 15.8628C12.3473 15.8064 12.1213 15.6937 11.9518 15.5811C11.7259 15.412 11.6694 15.243 11.6694 15.0177C11.7259 14.7923 11.8389 14.6797 12.1213 14.6233C12.2908 14.567 12.5733 14.567 12.9123 14.6233C13.2512 14.6797 13.4772 14.7923 13.6467 14.905C13.8727 15.074 13.9857 15.243 13.9292 15.4684ZM15.8536 16.4261L14.2117 16.1444L14.4376 14.9578L14.9461 15.0705L14.7201 15.9719L15.8536 16.1973V16.4226V16.4261Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.0812 23.0882C3.96905 22.0143 -0.10216 16.2044 0.971254 10.1093C2.04467 4.01426 7.8743 -0.0456031 13.9864 1.02482C20.0985 2.09524 24.1733 7.90862 23.0963 14.0037C22.0229 20.0424 16.1933 24.1621 10.0812 23.0882ZM0.180317 9.94031C-0.953124 16.4297 3.40409 22.6938 9.91167 23.8206C16.4192 24.9509 22.7008 20.6058 23.8308 14.1164C23.9437 13.4403 24.0002 12.7044 24.0002 12.0283C24.0567 6.2713 19.982 1.25017 14.1559 0.179749C7.59182 -0.950533 1.36672 3.39454 0.180317 9.94031Z"
                        fill="currentColor"
                      />
                      <path
                        d="M3.00855 14.2289C3.00855 14.2852 3.06504 14.3979 3.12154 14.4542C3.23453 14.6796 3.46051 14.6796 3.68649 14.6232C3.96897 14.5669 4.13846 14.3415 4.08196 14.1725L4.02547 13.9472L3.00855 14.2289ZM1.70562 14.6232C1.70562 14.5105 1.64912 14.4542 1.64912 14.3415C1.64912 14.2289 1.59263 14.1725 1.53613 14.0598L3.96897 13.3838L4.25145 14.2852C4.36444 14.7922 4.25145 15.0739 3.85598 15.1866C3.23453 15.3556 2.95205 14.9613 2.78257 14.2852L1.70915 14.6232H1.70562ZM3.85598 16.4296C4.02547 16.7676 4.25145 16.8803 4.59042 16.6549C4.64692 16.6549 4.70341 16.5986 4.75991 16.5422C4.98589 16.3169 4.8164 16.0915 4.70341 15.9225L3.85598 16.4296ZM4.64692 15.3591L5.04239 16.0352C5.15538 16.2042 5.26837 16.4296 5.26837 16.5986C5.26837 16.8239 5.21187 16.9929 4.98589 17.162C4.64692 17.331 4.36444 17.2746 4.13846 16.9929C3.91248 17.331 3.74299 17.7253 3.5735 18.0634L3.46051 18.2887C3.40402 18.176 3.34752 18.0634 3.29102 18.007C3.23453 17.8944 3.17803 17.838 3.12154 17.7253L3.5735 16.9366C3.5735 16.8803 3.68649 16.6549 3.74299 16.5422L2.72607 17.1056C2.66957 17.0493 2.66957 16.9366 2.61308 16.8803C2.55658 16.8239 2.50009 16.7113 2.44359 16.6549L4.65045 15.3556L4.64692 15.3591ZM5.21187 18.5739C4.8729 18.912 4.70341 19.4753 5.15538 19.8169C5.60734 20.2113 6.1723 19.9296 6.5713 19.4789C6.91027 19.1408 7.07976 18.5775 6.68429 18.1796C6.23232 17.8979 5.78036 17.9542 5.21187 18.5739ZM4.98589 19.9859C4.36444 19.4789 4.25145 18.7429 4.8164 18.1232C5.32486 17.5598 6.11933 17.5035 6.79728 18.0669C7.58821 18.7429 7.30574 19.5352 6.96676 19.9296C6.4583 20.4929 5.66384 20.6056 4.98589 19.9859ZM8.09667 21.8486C8.04018 21.7922 7.92719 21.7359 7.87069 21.7359C7.8142 21.6796 7.70121 21.6796 7.58821 21.6232L8.49214 19.5352C8.26616 19.4225 8.04018 19.3662 7.8142 19.3098C7.8142 19.2535 7.87069 19.1972 7.87069 19.1972C7.87069 19.1408 7.92719 19.0845 7.92719 19.0282L9.68208 19.7606C9.68208 19.8169 9.62558 19.8732 9.62558 19.8732C9.62558 19.9296 9.56909 19.9859 9.56909 20.0422C9.3996 19.9296 9.17362 19.8169 9.00413 19.7606L8.10021 21.8486M11.437 20.0986C11.437 20.1549 11.3805 20.2113 11.3805 20.2676V20.4366C11.1545 20.3803 10.9285 20.3239 10.533 20.2676L10.4201 21.0563L10.8155 21.1127C10.985 21.1127 11.1545 21.169 11.2675 21.169C11.2675 21.2253 11.211 21.2817 11.211 21.338V21.507C11.098 21.4507 10.9285 21.4507 10.759 21.3944L10.3636 21.2253L10.2506 22.1831C10.646 22.2394 10.872 22.2394 11.098 22.2958C11.098 22.3521 11.0415 22.4084 11.0415 22.4648V22.6338L9.62558 22.4084L10.0211 19.926L11.437 20.0951M14.0958 22.0141L14.0393 22.3521C13.8133 22.4648 13.5873 22.5775 13.3049 22.5775C12.5139 22.6338 11.8889 22.2394 11.7759 21.4472C11.663 20.4894 12.2844 19.9789 13.0789 19.9225C13.3049 19.9225 13.6438 19.9225 13.8698 20.0352C13.8698 20.1479 13.8133 20.3169 13.8133 20.4296H13.7568C13.5873 20.2606 13.3614 20.1479 13.1354 20.1479C12.5139 20.2042 12.3444 20.8239 12.4009 21.3345C12.4574 21.9542 12.7964 22.3486 13.3614 22.2922C13.6438 22.3486 13.8698 22.1796 14.0958 22.0105M16.1897 21.7852C16.0767 21.7852 16.0202 21.8415 15.9072 21.8415C15.7942 21.8979 15.7377 21.8979 15.6812 21.9542L14.8338 19.8662C14.6078 19.9789 14.3818 20.0915 14.2123 20.1479C14.2123 20.0915 14.2123 20.0352 14.1558 19.9789C14.1558 19.9225 14.0993 19.8662 14.0993 19.8662L15.8542 19.1901C15.8542 19.2465 15.8542 19.3028 15.9107 19.3591C15.9107 19.4155 15.9672 19.4718 15.9672 19.4718C15.7412 19.5282 15.5152 19.5845 15.3458 19.6408L16.1932 21.7852M17.3266 18.1725C17.3266 18.2289 17.3831 18.2852 17.3831 18.2852L17.4961 18.3979C17.2701 18.5106 17.1006 18.6232 16.7617 18.8486L17.2136 19.4683L17.5526 19.2429C17.6656 19.1303 17.7786 19.0739 17.8916 18.9613C17.8916 19.0176 17.9481 19.0739 17.9481 19.0739L18.0611 19.1866C17.9481 19.2429 17.7786 19.2993 17.6656 19.412L17.3266 19.6373L17.8916 20.426C18.1741 20.2007 18.4 20.0317 18.5695 19.919C18.5695 19.9753 18.626 20.0317 18.626 20.0317L18.739 20.1444L17.6056 20.9331L16.1332 18.9014L17.3231 18.169M19.8689 18.8451L20.0384 18.6197C20.3774 18.2253 20.3774 17.7746 19.6994 17.2077C19.1345 16.757 18.739 16.8697 18.3965 17.2641L18.1705 17.5458L19.8689 18.8451ZM18.5095 16.8697C19.018 16.25 19.6429 16.3627 20.1514 16.757C20.8294 17.2641 20.8294 18.0563 20.3774 18.6197L19.7559 19.4084L17.7186 17.8838L18.5095 16.8697Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_atol">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="flex flex-col items-start p-2 h-[40px] w-[270px] max-w-full min-w-0 md:min-w-[265.3px]">
                  <span className="flex items-center w-full max-w-[254px] h-[24px] text-[#393939] text-[12px] md:text-[16px] leading-[24px] font-normal">
                    All holidays are ATOL protected!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-6 flex-col items-center text-center font-['Montserrat'] flex">
        <h3 className="text-[#595858] text-[16px] md:text-[24px] font-semibold mb-3">
          Our team are available 24 hours, 7 days
        </h3>

        <p className="text-[#595858] text-[14px] font-normal mb-3 px-4">
          Hurry this deal has limited availability - call our helpful team now
        </p>

        <div className="space-y-2 w-full max-w-xs text-xl sm:text-2xl text-[#595858]">
          <a
            href="#"
            className="flex items-center justify-center hover:text-[#cb2187] font-medium leding-[140%]"
          >
            <Phone className="w-5 h-5 mr-2" />
            020 8123 1234
          </a>

          <a
            href="#"
            className="flex items-center justify-center hover:text-[#cb2187] gap-2 font-medium leding-[140%]"
          >
            <svg
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M5.25 21C5.13975 21 5.02875 20.9753 4.9245 20.9257C4.66575 20.8005 4.5 20.5387 4.5 20.25V16.5H2.25C1.0095 16.5 0 15.4905 0 14.25V2.25C0 1.0095 1.0095 0 2.25 0H20.25C21.4905 0 22.5 1.0095 22.5 2.25V14.25C22.5 15.4905 21.4905 16.5 20.25 16.5H11.1383L5.71875 20.8358C5.583 20.9445 5.41725 21 5.25 21ZM2.25 1.5C1.836 1.5 1.5 1.83675 1.5 2.25V14.25C1.5 14.6632 1.836 15 2.25 15H5.25C5.66475 15 6 15.3352 6 15.75V18.69L10.4062 15.1642C10.5398 15.0577 10.704 15 10.875 15H20.25C20.664 15 21 14.6632 21 14.25V2.25C21 1.83675 20.664 1.5 20.25 1.5H2.25Z"
                fill="#595858"
              />
              <path
                d="M17.25 7.5H5.25C4.83525 7.5 4.5 7.164 4.5 6.75C4.5 6.336 4.83525 6 5.25 6H17.25C17.6648 6 18 6.336 18 6.75C18 7.164 17.6648 7.5 17.25 7.5Z"
                fill="#595858"
              />
              <path
                d="M11.25 10.5H5.25C4.83525 10.5 4.5 10.164 4.5 9.75C4.5 9.336 4.83525 9 5.25 9H11.25C11.6648 9 12 9.336 12 9.75C12 10.164 11.6648 10.5 11.25 10.5Z"
                fill="#595858"
              />
            </svg>
            chat online
          </a>

          <a
            href="https://wa.me/442081231234?text=Hello%20there" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center hover:text-[#cb2187] font-medium leding-[140%]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.402ZM22.002 11.866c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375C-.478 10.546 4.26 1.966 12.072 1.966c2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99Z" />
              <path d="M17.507 14.307c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345Z" />
            </svg>
            send a whatsapp
          </a>
        </div>
      </div>
      </div>
  );
}
