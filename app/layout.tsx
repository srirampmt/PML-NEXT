"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/layout/main-nav";
import { Montserrat } from 'next/font/google'
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/brochure");
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className={`${montserrat.className} bg-white `}> 
        {!hideChrome && <MainNav />}
        {children}
        {!hideChrome && <Footer />}
      </body>
    </html>
  );
}
