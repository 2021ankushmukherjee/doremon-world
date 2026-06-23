import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doraemon Pocket Universe",
  description:
    "Explore Doraemon's magical gadgets through an interactive web experience.",
  openGraph: {
    title: "Doraemon Pocket Universe",
    description:
      "Explore Doraemon's magical gadgets through an interactive web experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doraemon Pocket Universe",
    description:
      "Explore Doraemon's magical gadgets through an interactive web experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
