import type { Metadata } from "next";

import Footer from "@/app/_components/navigation/footer";
import Header from "@/app/_components/navigation/header";

import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thewrightdesigns.co.za"),
  description:
    "A web design & development team dedicated to providing modern online solutions for small to medium sized businesses",
  keywords:
    "website development, website design, web design, web development, website, development, design, portfolio, developer, frontend, frontend developer",
  openGraph: {
    description:
      "A web design & development team dedicated to providing modern online solutions for small to medium sized businesses",
    type: "website",
    locale: "en_ZA",
    siteName: "The Wright Designs",
    images: [
      {
        url: "https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/the-wright-designs/open-graph-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="px-5 overflow-x-hidden tablet:px-10 desktop:px-0 desktop:max-w-[1280px] desktop:m-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
