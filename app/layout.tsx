import type { Metadata } from "next";
import "../colors_and_type.css";
import "../components.css";
import "../terminal.css";
import "../polish.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghxstship.tours"),
  title: {
    default: "Experiential Production & Operations Management — GHXSTSHIP",
    template: "%s — GHXSTSHIP",
  },
  description:
    "GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <script src="/site-form.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
