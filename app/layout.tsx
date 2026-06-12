import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ulsan-dog-surrender.vercel.app";
const siteTitle = "울산강아지파양 | 유기견 보호소 및 강아지 파양 전문 안내";
const siteDescription =
  "울산강아지파양 전문 상담센터입니다. 울산 지역 강아지 파양, 유기견 보호소 위탁, 입양 연계까지 책임 있는 절차로 안내해 드립니다. 전화 0505-707-0401";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | 울산강아지파양",
  },
  description: siteDescription,
  keywords: [
    "울산강아지파양",
    "울산 강아지 파양",
    "울산 유기견 보호소",
    "강아지 파양",
    "유기견 보호",
    "아가펫",
    "울산 반려견 위탁",
  ],
  authors: [{ name: "아가펫" }],
  creator: "아가펫",
  publisher: "아가펫",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "울산강아지파양 안내",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/shelter-01.png",
        width: 1200,
        height: 630,
        alt: "울산강아지파양 보호소 전경 — 유기견 보호 및 파양 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/shelter-01.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "반려동물",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans pb-safe-floating">
        {children}
      </body>
    </html>
  );
}
