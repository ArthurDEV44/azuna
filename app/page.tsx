import ScrollContainer from "@/app/components/ScrollContainer";
import AnimatedSection from "@/app/components/AnimatedSection";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import Faq from "@/app/components/Faq";
import Contact from "@/app/components/Contact";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollContainer>
        <div className="snap-start h-screen">
          <Hero />
        </div>

        <AnimatedSection>
          <Stats />
        </AnimatedSection>

        <AnimatedSection>
          <Services />
        </AnimatedSection>

        <AnimatedSection>
          <Features />
        </AnimatedSection>

        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <Pricing />
        </AnimatedSection>

        <AnimatedSection>
          <Faq />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>

        <AnimatedSection>
          <Cta />
        </AnimatedSection>
      </ScrollContainer>
      <Footer />
    </>
  );
}
