import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRADDY",
  description: "짧고 가볍고 안전한 여행 동행 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-body">{children}</body>
    </html>
  );
}
