import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EarthMap from "./components/EarthMap"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orbital Advantage",
  description: "Live global intelligence interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="relative w-full h-screen">
          <EarthMap />

          <div className="absolute top-0 left-0 z-10 w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
