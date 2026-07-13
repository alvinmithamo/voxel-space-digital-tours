import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AudienceSection from "@/components/sections/AudienceSection";
import ValuePropsSection from "@/components/sections/ValuePropsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import UrgencySection from "@/components/sections/UrgencySection";
import QuoteSection from "@/components/sections/QuoteSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AudienceSection />
        <ValuePropsSection />
        <ProcessSection />
        <UrgencySection />
        <QuoteSection />
        <FAQSection />
        <ContactSection />
        <PartnershipsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
