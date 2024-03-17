import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/master.scss";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
const poppins = Inter({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Aftab",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
