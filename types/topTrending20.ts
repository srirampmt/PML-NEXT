import type { Deal, HotDeal } from "@/types/homepage";
import type { FaqItem, OfferCard } from "@/types/allOffers";

export type TopTrendingHotel = {
  id?: number;
  slug?: string;
  name?: string;
  location?: string;
  property_rating?: string;
  offer_header?: string;
  info_paragraph?: string;
  card_image?: string;
  offer_tag_type?: string;
  offer_on_card?: string;
  api_url?: string;
  hotel_status?: boolean;
};

export type TopTrending20Page = {
  id: number;
  slug?: string;

  banner_image?: string;
  banner_title?: string;
  banner_subtitle?: string;

  Weekly_deals_title?: string;
  Weekly_deals_subtitle?: string;
  Weekly_hot_deal?: HotDeal | null;
  Weekly_deals_hotels?: Deal[];

  card_image?: string | null;
  add_title?: string;
  add_subtitle?: string;
  add_link?: string;

  trending_deals_title?: string;
  trending_deals_subtitle?: string;
  trending_deals_hotels?: TopTrendingHotel[];

  trending_deals_title_1?: string;
  trending_deals_subtitle_1?: string;
  trending_deals_hotels_1?: TopTrendingHotel[];

  trending_deals_title_2?: string;
  trending_deals_subtitle_2?: string;
  trending_deals_hotels_2?: TopTrendingHotel[];

  trending_deals_title_3?: string;
  trending_deals_subtitle_3?: string;
  trending_deals_hotels_3?: TopTrendingHotel[];

  offer_cards?: OfferCard[];
  faqs?: FaqItem[];

  Meta_Title?: string;
  Meta_Description?: string;
  OG_Image?: string;
  Canonical_URL?: string;
  Twitter_Image?: string;
  Head_Scripts?: string;

  created_at?: string;
  updated_at?: string;
  metadata?: {
    generated_at?: string;
    data_type?: string;
  };
};

export type TopTrending20Response = {
  success: true;
  page: TopTrending20Page;
};
