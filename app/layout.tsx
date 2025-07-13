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
  title: "GRCSPL | Home",
  description: "GRCSPL offers high-quality health, personal care & home products. Join Tamil Nadu's leading direct selling company for financial freedom & multiple income streams.",
  icons: {
    icon: "/GR.png",
    shortcut: "/GR.png",
    apple: "/GR.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/GR.png",
    }
  },
  keywords: "home care products, personal care products, auto care products, health care products, FMCG direct selling, Geeaar Consumer Solutions, GRCSPL, direct selling company Tamilnadu, passive income opportunities, multiple earning opportunities, best MLM company, network marketing business, daily use products, household cleaning solutions, skincare essentials, car maintenance products, health supplements, herbal personal care, wellness products, organic home care, car cleaning solutions, direct selling business Tamilnadu, trusted MLM company, best direct selling opportunity, FMCG network marketing, Tamilnadu MLM products, Geeaar direct selling, home hygiene solutions, beauty and skincare products, auto care essentials, financial freedom with direct selling, work from home business, extra income opportunity, Tamilnadu consumer products, leading direct selling company, Geeaar health care, online business opportunity, premium home care products, natural wellness solutions, earn with direct selling, residual income business, flexible earning opportunity, FMCG business Tamilnadu, profitable MLM business, Geeaar product range, part-time income opportunity, direct sales success, best passive income business, network marketing opportunities Tamilnadu.",
  authors: [{ name: "GEEAAR Consumer Solutions Private Limited", url: "https://www.grcspl.com" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.grcspl.com/",
    languages: {
      'ta-IN': 'https://www.grcspl.com/',
    }
  },
  openGraph: {
    url: "https://www.www.grcspl.com/",
    type: "website",
    title: "GEEAAR Consumer Solutions | Transform Your Life Through Direct Selling",
    description: "Join Tamil Nadu's premier direct selling company. GRCSPL offers premium health & lifestyle products with unmatched earning opportunities.",
    siteName: "GEEAAR Consumer Solutions Private Limited",
    locale: "ta_IN",
    images: [
      {
        url: "https://i.postimg.cc/653M02g5/2.png", // "https://i.postimg.cc/nL7RDy54/1.png",
        secureUrl: "https://i.postimg.cc/653M02g5/2.png", // "https://i.postimg.cc/nL7RDy54/1.png",
        width: 1200,
        height: 630,
        alt: "GRCSPL - Premium Direct Selling Products",
        type: "image/jpeg",
      },
      {
        url: "https://i.postimg.cc/653M02g5/2.png", // "https://i.postimg.cc/nL7RDy54/1.png",
        width: 400,
        height: 400,
        alt: "GRCSPL WhatsApp Share Image",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRCSPL | Premium Direct Selling Opportunity in Tamil Nadu",
    description: "Transform your financial future with GRCSPL. Join Tamil Nadu's leading direct selling company offering premium health & lifestyle products.",
    creator: "@GRCSPL",
    site: "@GRCSPL",
    images: {
      url: "https://i.postimg.cc/653M02g5/2.png", // "https://i.postimg.cc/nL7RDy54/1.png",
      width: 1200,
      height: 630,
      alt: "GRCSPL - Premium Direct Selling Products",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "GRCSPL",
    "msapplication-TileColor": "#39b54b",
    "msapplication-config": "/browserconfig.xml",
    handheldfriendly: "true",
    mobileoptimized: "width",
    "revisit-after": "7 days",
    "theme-color": "#39b54b",
    copyright: "GEEAAR Consumer Solutions Private Limited",
    "ICBM": "11.0168, 76.9558",
    "format-detection": "telephone=+914224350058 email=office@www.grcspl.com",
    "fb:app_id": "GRCSPL_APP_ID", 
    "og:image:width": "1200",
    "og:image:height": "630",
    "pinterest-rich-pin": "true",
    "twitter:label1": "Business Category",
    "twitter:data1": "Direct Selling Company",
    "twitter:label2": "Located in",
    "twitter:data2": "Tamil Nadu, India",
  },
  // verification: {
  //   google: "google-site-verification-code",
  //   yandex: "yandex-verification-code",
  // },
};

// ✅ Correct viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
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
