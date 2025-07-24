"use client";
import Hero from "@/components/home/hero"
import Benefits from "@/components/home/benefits"
import FeaturedProducts from "@/components/home/featured-products"
import Testimonials from "@/components/home/testimonials"
import TrustBadges from "@/components/home/trust-badges"
import CallToAction from "@/components/home/call-to-action"
import OfferPopupCard from "@/components/Popup/popup"
import { AiChatbot } from "@/components/chatbot";
import FMCGPreloader from "@/components/preloader";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://cloud.umami.is/script.js";
    script.setAttribute("data-website-id", "e7e5b06b-5440-4664-8b38-cbcbb40c1ab9");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex flex-col gap-16">
      <FMCGPreloader />
      <AiChatbot />
      <OfferPopupCard />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
      
    </div>
  )
}
