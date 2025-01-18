import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "../../styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrewLA | Website Development | SEO | Product Design",
  description: "BrewLA builds stunning websites, boosts SEO rankings, and designs custom internal tools to help businesses thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
