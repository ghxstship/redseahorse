import type { Metadata } from "next";
import "../modernist.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghxstship.tours"),
  title: {
    default:
      "Experiential Design & Production, Venue & Site Operations, Tour & Talent Management, Technology & Systems — GHXSTSHIP",
    template: "%s — GHXSTSHIP",
  },
  description:
    "GHXSTSHIP is a professional services firm for live and experiential projects — experiential design & production, venue & site operations, tour & talent management, and technology & systems implementation — headquartered in Miami, with regional offices in Los Angeles, Chicago, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix.",
  icons: {
    icon: "/assets/logo-ghostship-skull.svg",
    apple: "/assets/skull-bone.png",
  },
  openGraph: {
    siteName: "GHXSTSHIP",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script src="/site-form.js" defer />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
