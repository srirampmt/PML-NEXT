import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { AuthProvider } from "@/lib/auth";
import { MainNav } from "@/components/layout/main-nav";
const inter = Inter({ subsets: ["latin"] });
import { Montserrat } from 'next/font/google'
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-montserrat',   // 👈 important
})

export const metadata: Metadata = {
  title: "Apply Umrah Visa Online from India | Umrah Visa Fee ₹14,999",
  description:
    "Easily apply for your Umrah visa online from India. 100% online Saudi visa application for Indian citizens. Fast processing, & expert support.",
  openGraph: {
    title: "Apply Umrah Visa Online from India | Umrah Visa Fee ₹14,999",
    description:
      "Easily apply for your Umrah visa online from India. 100% online Saudi visa application for Indian citizens. Fast processing, & expert support.",
    type: "website",
    url: `https://umrahvisafromindia.com`,
    images: [
      {
        url: "https://umrahvisafromindia.com/success-image.png",
        width: 1536,
        height: 1024,
        alt: "Umrah Visa From India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Umrah Visa Online from India | Umrah Visa Fee ₹14,999",
    description:
      "Easily apply for your Umrah visa online from India. 100% online Saudi visa application for Indian citizens. Fast processing, & expert support.",
    images: ["https://umrahvisafromindia.com/success-image.png"],
  },
  alternates: {
    canonical: `https://umrahvisafromindia.com`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className={`${inter.className} bg-white `}> 
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
