import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Legacy Lungi - নিজস্ব তাঁতে তৈরি প্রিমিয়াম লুঙ্গি",
  description:
    "Legacy Lungi থেকে কিনুন শতভাগ কটন, আরামদায়ক ও টেকসই নিজস্ব তাঁতে তৈরি প্রিমিয়াম লুঙ্গি। প্রতিদিনের ব্যবহার ও বিশেষ উপহারের জন্য সেরা পছন্দ।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
