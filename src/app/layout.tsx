// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./globals.css"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Swasthi",
  description: "Join FitnEarn: The ultimate fitness platform where you can exercise, earn rewards, and enjoy your fitness journey. Achieve your goals, stay motivated, and have fun!",
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
        {/* <title>Swasthi</title>
        <link rel="icon" type="image/png" href="/Logo.png" sizes="16x16" /> */}
       </head>
      <body>
        {children}
      </body>
    </html>

     </>
  );
}