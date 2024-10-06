import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Africa",
  description: "Plateforme de soutien pour les créateurs africains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}