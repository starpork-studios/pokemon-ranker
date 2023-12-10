import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const pokemonFont = localFont({
  src: [
    {
      path: "../../public/fonts/Pokemon-Hollow.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pokemon-Solid.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white `}>
          <Nav/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
