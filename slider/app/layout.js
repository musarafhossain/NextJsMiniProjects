import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sidebar Toggle Menu",
  description: "Sidebar Toggle Menu Created by Musaraf Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-hidden ${inter.className}`}>{children}</body>
    </html>
  );
}
