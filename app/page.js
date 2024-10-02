import About from "@/components/About";
import CarouselSection from "@/components/Carousel";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Promotion from "@/components/Promotion";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <CarouselSection />

      <Promotion />

      <Guide />

      <FAQs />

      <Pricing />

      <About />

      <ScrollToTopButton />
    </main>
  );
}
