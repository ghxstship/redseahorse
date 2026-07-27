import type { Metadata, Viewport } from "next";
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

/* The sticky header is black in every theme, so the browser chrome that abuts
   it is too — one value, no per-scheme split. */
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Pin the stored theme before the body paints. Deferring this to
            theme.js would flash the wrong ground on every load. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('gx-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}",
          }}
        />
        <script src="/theme.js" defer />
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
