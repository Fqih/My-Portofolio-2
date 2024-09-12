import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from '@/app/Theme'; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Faqih Hakim's Portfolio",
  description: "Welcome to the portfolio of Muhammad Faqih Hakim, a passionate web developer and data enthusiast.",
  keywords: "Muhammad Faqih Hakim, portfolio, Faqih Gunadarma, Faqih Data Science, Faqih Fullstack",
  author: "Faqih Hakim",
  robots: "index, follow",
  "og:title": "Faqih Hakim's Portfolio",
  "og:description": "Explore projects and insights from Faqih Hakim, a skilled web developer and data enthusiast.",
  "og:image": "/images/faqih.jpg",
  "og:url": "https://faqihhakim.com", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
