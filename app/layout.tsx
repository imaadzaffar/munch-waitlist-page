import type { Metadata } from "next";
import { Inter_Tight, DM_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter_Tight({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Munch",
  description: "Munch is the ultimate food app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
