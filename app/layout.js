import TrackingScripts from "@/components/TrackingScripts";
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
      <body>
        <TrackingScripts />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        {children}
      </body>
    </html>
  );
}
