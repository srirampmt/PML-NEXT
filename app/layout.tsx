import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/layout/main-nav";
import { Montserrat } from 'next/font/google'
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import ResponseIQProvider from "@/components/ResponseIQProvider";
import TawkToProvider from "@/components/TawkToProvider";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-montserrat',   // 👈 important
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className={`${montserrat.className} bg-white `}>
        <MainNav />
        <div style={{ paddingTop: "var(--main-nav-height, 0px)" }}>
          {children}
          <Footer />
        </div>
        <GoogleTagManager gtmId="GTM-NSW36DKM" />
        <TawkToProvider />
        <ResponseIQProvider />
      </body>
    </html>
  );
}
