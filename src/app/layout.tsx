import type { Metadata } from "next";
import { mainFont } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Prescription System',
    default: 'Prescription System'
  },
  description: "Clinical application for doctors where they can make an electronic prescription for their patients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${mainFont.className}`}>
        {children}
      </body>
    </html>
  );
}
