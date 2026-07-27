import type { Metadata, Viewport } from "next";
import "../modernist.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghxstship.tours"),
  title: {
    // Short on purpose: search shows ~60 characters, and the four services
    // read better in the description than truncated out of a title.
    default: "GHXSTSHIP | Experiential Production | Miami, FL",
    template: "%s | GHXSTSHIP",
  },
  description:
    "One accountable partner for live and experiential projects: experiential design & production, venue & site operations, tour & talent management, and technology & systems engineering. Headquartered in Miami.",
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
   it is too, one value, no per-scheme split. */
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Pin the stored theme before the body paints. Deferring this to
            theme.js would flash the wrong ground on every load. */}
        <link rel="preload" href="/fonts/bebas-neue-400-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/archivo-800-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
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
