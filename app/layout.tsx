import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRCSPL | Premium Health & Lifestyle Products | Direct Selling Leader",
  description: "GRCSPL offers premium health, personal care & home products with guaranteed quality. Join Tamil Nadu's #1 direct selling company for financial freedom with multiple income streams and transform your future today.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon/icon.png", sizes: "any" },
      { url: "/icon/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/icon.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/GR.png",
    apple: [
      { url: "/icon/icon.png", sizes: "57x57", type: "image/png" },
      { url: "/icon/icon.png", sizes: "60x60", type: "image/png" },
      { url: "/icon/icon.png", sizes: "72x72", type: "image/png" },
      { url: "/icon/icon.png", sizes: "76x76", type: "image/png" },
      { url: "/icon/icon.png", sizes: "114x114", type: "image/png" },
      { url: "/icon/icon.png", sizes: "120x120", type: "image/png" },
      { url: "/icon/icon.png", sizes: "144x144", type: "image/png" },
      { url: "/icon/icon.png", sizes: "152x152", type: "image/png" },
      { url: "/icon/icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/GR.png" },
      { rel: "mask-icon", url: "/icon/icon.png", color: "#39b54b" },
      { rel: "icon", url: "/icon/icon.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon/icon.png", sizes: "512x512", type: "image/png" }
    ]
  },
  keywords: "home care products, personal care products, auto care products, health care products, FMCG direct selling, Geeaar Consumer Solutions, GRCSPL, direct selling company Tamilnadu, passive income opportunities, multiple earning opportunities, best MLM company, network marketing business, daily use products, household cleaning solutions, skincare essentials, car maintenance products, health supplements, herbal personal care, wellness products, organic home care, car cleaning solutions, direct selling business Tamilnadu, trusted MLM company, best direct selling opportunity, FMCG network marketing, Tamilnadu MLM products, Geeaar direct selling, home hygiene solutions, beauty and skincare products, auto care essentials, financial freedom with direct selling, work from home business, extra income opportunity, Tamilnadu consumer products, leading direct selling company, Geeaar health care, online business opportunity, premium home care products, natural wellness solutions, earn with direct selling, residual income business, flexible earning opportunity, FMCG business Tamilnadu, profitable MLM business, Geeaar product range, part-time income opportunity, direct sales success, best passive income business, network marketing opportunities Tamilnadu.",
  authors: [{ name: "GEEAAR Consumer Solutions Private Limited", url: "https://www.grcspl.com" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.grcspl.com/",
  },
  openGraph: {
    url: "https://www.grcspl.com/",
    type: "website",
    title: "GEEAAR Consumer Solutions | Transform Your Life Through Premium Direct Selling",
    description: "Join Tamil Nadu's premier direct selling company. GRCSPL offers premium health & lifestyle products with unmatched earning opportunities. Quality guaranteed products for your home, health & personal care.",
    siteName: "GEEAAR Consumer Solutions Private Limited",
    locale: "ta_IN",
    images: [
      {
        url: "https://i.postimg.cc/653M02g5/2.png",
        secureUrl: "https://i.postimg.cc/653M02g5/2.png",
        width: 1200,
        height: 630,
        alt: "GRCSPL - Premium Direct Selling Products",
        type: "image/jpeg",
      },
      {
        url: "https://i.postimg.cc/653M02g5/2.png",
        width: 400,
        height: 400,
        alt: "GRCSPL WhatsApp Share Image",
        type: "image/png",
      },
      {
        url: "https://i.postimg.cc/sxNQSSqR/meta.jpg",
        width: 1080,
        height: 1080,
        alt: "GRCSPL Product Range",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRCSPL | Tamil Nadu's Leading Direct Selling Company",
    description: "Transform your financial future with GRCSPL. Join Tamil Nadu's premier direct selling company offering premium health & lifestyle products with guaranteed quality and effectiveness.",
    creator: "@GRCSPL",
    site: "@GRCSPL",
    images: [
      {
        url: "https://i.postimg.cc/653M02g5/2.png",
        width: 1200,
        height: 630,
        alt: "GRCSPL - Premium Direct Selling Products",
      },
      {
        url: "https://i.postimg.cc/sxNQSSqR/meta.jpg",
        width: 1080,
        height: 1080,
        alt: "GRCSPL Product Range",
      }
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "GRCSPL",
    "msapplication-TileColor": "#39b54b",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-navbutton-color": "#39b54b",
    "msapplication-starturl": "/icon/icon.png",
    handheldfriendly: "true",
    mobileoptimized: "width",
    "revisit-after": "7 days",
    "theme-color": "#39b54b",
    copyright: "GEEAAR Consumer Solutions Private Limited",
    "ICBM": "11.0168, 76.9558", // Coimbatore coordinates
    "geo.position": "11.0168;76.9558",
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore, Tamil Nadu, India",
    "format-detection": "telephone=+914224350058 email=office@www.grcspl.com",
    "fb:app_id": "GRCSPL_APP_ID", 
    "og:image:width": "1200",
    "og:image:height": "630",
    "pinterest-rich-pin": "true",
    "twitter:label1": "Business Category",
    "twitter:data1": "Direct Selling Company",
    "twitter:label2": "Located in",
    "twitter:data2": "Tamil Nadu, India",
    "whatsapp-catalog": "yes",
    "application-name": "GRCSPL",
    "dc.language": "ta-IN",
    "dc.title": "GRCSPL - Premium Direct Selling Company",
    "dc.description": "GRCSPL offers premium health, personal care & home products with guaranteed quality and effectiveness.",
    "dc.publisher": "GEEAAR Consumer Solutions Private Limited",
    "dc.subject": "Direct Selling, Health Products, Personal Care, Home Care",
    "article:publisher": "https://www.facebook.com/GRCSPL",
    "og:street-address": "Coimbatore",
    "og:locality": "Coimbatore",
    "og:region": "Tamil Nadu",
    "og:postal-code": "641001",
    "og:country-name": "India",
    "og:email": "office@www.grcspl.com",
    "og:phone_number": "+914224350058",
    "product:availability": "in stock",
    "product:price:amount": "Visit website for pricing",
    "product:price:currency": "INR"
  },
  verification: {
    google: "add-your-google-verification-code",
  },
  appLinks: {
    ios: {
      url: "grcspl://",
      // app_store_id: "your-app-store-id",
    },
    android: {
      package: "com.grcspl.app",
      app_name: "GRCSPL",
    },
    web: {
      url: "https://www.grcspl.com/",
      should_fallback: true,
    },
  },
  category: "Business & Direct Selling",
};

// Enhanced viewport settings for better mobile experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  minimumScale: 1.0,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#39b54b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <LanguageProvider>
            
            <div className="flex min-h-screen flex-col">
              <Header />
              {/* AnnouncementBanner can be added here if needed */}
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
