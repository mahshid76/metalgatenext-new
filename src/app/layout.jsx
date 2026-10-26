import { Barlow, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://metalgateleeds.co.uk"),
  title: {
    default: "Metalgate Leeds | Metal Gates, Railings & Fabrication",
    template: "%s | Metalgate Leeds",
  },
  description:
    "Made-to-measure metal gates, railings, fences, staircases and canopies across Leeds and West Yorkshire. Repairs and welding too. Free, no-obligation quotes.",
  openGraph: {
    title: "Metalgate Leeds | Metal Gates, Railings & Fabrication",
    description:
      "Made-to-measure metal gates, railings, fences, staircases and canopies across Leeds and West Yorkshire.",
    url: "https://metalgateleeds.co.uk",
    siteName: "Metalgate Leeds",
    images: ["/images/30.jpg"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${playfair.variable}`}>
      <body className="on-dark bg-surface font-sans text-fg antialiased">
        <div className="progress" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
