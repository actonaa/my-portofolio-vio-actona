import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

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

const playfairDisplay = Playfair_Display({
  subsets: ["latin"], // Tentukan subset yang Anda perlukan
  weight: ["400", "700"], // Atur weight sesuai kebutuhan
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
