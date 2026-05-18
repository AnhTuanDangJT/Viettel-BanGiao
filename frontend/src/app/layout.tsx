import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const fsMagistral = localFont({
  src: [
    {
      path: "./fonts/FS Magistral-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FS Magistral-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FS Magistral-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-fs-magistral",
});

const fsBeauSans = localFont({
  src: [
    {
      path: "./fonts/FS PFBeauSansPro/FS PFBeauSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FS PFBeauSansPro/FS PFBeauSansPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FS PFBeauSansPro/FS PFBeauSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-beausans",
});

const myriadPro = localFont({
  src: [
    {
      path: "./fonts/MYRIADPRO-REGULAR.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myriad",
});

export const metadata: Metadata = {
  title: "Viettel Store",
  description: "Viettel Store - 20 Năm Khát Vọng Vươn Xa",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Viettel Store",
    description: "Viettel Store - 20 Năm Khát Vọng Vươn Xa",
    images: [
      {
        url: "https://cdn.viettelstore.vn/images/Advertises/default-logo-vts.png",
        secureUrl: "https://cdn.viettelstore.vn/images/Advertises/default-logo-vts.png",
      }
    ],
  },
};

import { Header } from "@/components/layout/Header";
import { LoadingIntro } from "@/components/layout/LoadingIntro";
import { PageTransition } from "@/components/layout/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${roboto.variable} ${fsMagistral.variable} ${fsBeauSans.variable} ${myriadPro.variable} font-sans antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <LoadingIntro />
        <Header />
        <main className="flex-1 overflow-x-clip">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
