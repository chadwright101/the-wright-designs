import type { Metadata } from "next";

import Footer from "@/app/_components/navigation/footer";
import Header from "@/app/_components/navigation/header";

import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thewrightdesigns.co.za"),
  description:
    "Clean, functional & custom-made website development at an affordable price point",
  keywords:
    "website development, website design, website, development, design, portfolio, developer, frontend, frontend developer",
  openGraph: {
    description:
      "Clean, functional & custom-made website development at an affordable price point",
    type: "website",
    locale: "en_ZA",
    siteName: "The Wright Designs",
    images: [
      {
        url: "https://www.thewrightdesigns.co.za/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthe-wright-designs-logo-square.39dc2b90.jpg&w=1080&q=75",
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
      <body>
        <div className="overflow-x-hidden">
          <Header />
          <div className="px-5 tablet:px-10 desktop:px-0 desktop:max-w-[1280px] desktop:m-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
