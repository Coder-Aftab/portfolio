import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/master.scss";
const poppins = Poppins({
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
