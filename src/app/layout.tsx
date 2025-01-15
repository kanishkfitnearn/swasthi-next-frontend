import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swasthi",
  description:
    "Track your health & achieve your wellness goals with Swasthi. Get personalized insights, daily motivation, & multilingual support. Download now!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
        <meta name="google-site-verification" content="uReRaXlxpfWYmuQqRPGqzeKvMmVxK6M0h1LNuAIfaTE" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
