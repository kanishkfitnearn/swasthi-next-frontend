import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swasthi",
  description:
    "Track your health & achieve your wellness goals with Swasthi. Get personalized insights, daily motivation, & multilingual support. Download now!",
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
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
