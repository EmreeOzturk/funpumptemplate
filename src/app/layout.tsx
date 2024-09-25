import type { Metadata } from "next";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Poppins } from "next/font/google"
import Header from "@/components/header";
import Providers from "@/components/providers/web3-provider";
import { headers } from "next/headers";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie");
  return (
    <html lang="en" className="px-4 sm:px-6 lg:px-8 py-8   max-w-[1444px] mx-auto  ">
      <body
        className={`antialiased ${poppins.className} bg-neutral-700 `}>
        <Providers cookie={cookie}>
          <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] -z-10 opacity-20 blur-[100px]"></div>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
