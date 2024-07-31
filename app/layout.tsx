import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kreativy",
  description: "Digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-uncut">{children}</body>
    </html>
  );
}
