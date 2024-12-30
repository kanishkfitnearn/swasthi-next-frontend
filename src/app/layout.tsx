// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Swasthi",
  description:
    "Track your health & achieve your wellness goals with Swasthi. Get personalized insights, daily motivation, & multilingual support. Download now!",
  // openGraph:{
  //   images: [
  //     {
  //       url: "/Logo.png", // Replace with the path to your meta image
  //       width: 1200, // Recommended size for Open Graph
  //       height: 630,
  //       alt: "Swasthi Meta Image",
  //     },
  //   ],
  // }
};
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   AOS.init({
  //     once: false,
  //     duration: 1000,
  //   });
  // });

  return (
    <>
      <html lang="en">
        <head>
           {/* <title>Swasthi</title> */}
        <link rel="icon" type="image/png" href="/Logo.png" sizes="16x16" /> 
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
