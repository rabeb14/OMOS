import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/providers/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSMOS - Industrial Maintenance Solutions",
  description: "High-performance industrial maintenance solutions for the Oil & Gas sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`}>
        <LanguageProvider>
          <ThemeProvider>
            <ScrollToTop />
            <Navbar />
            <div className="pt-[52px] sm:pt-[64px] md:pt-[82px] pb-[50px] md:pb-[130px]">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
