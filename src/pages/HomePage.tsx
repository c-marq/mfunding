import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import QuickFeaturesSection from '../components/landing/QuickFeaturesSection';
import MCAExplainerSection from '../components/landing/MCAExplainerSection';
import LeverageSection from '../components/landing/LeverageSection';
// import CalculatorSection from '../components/landing/CalculatorSection';
import RequirementsSection from '../components/landing/RequirementsSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import UseCasesSection from '../components/landing/UseCasesSection';
import ReviewsSection from '../components/landing/ReviewsSection';
import GuideSection from '../components/landing/GuideSection';
import ApplySection from '../components/landing/ApplySection';
import Footer from '../components/landing/Footer';
import { SpotlightCursor } from '../components/ui/spotlight-cursor';
import StickyApplyCTA from '../components/ui/StickyApplyCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import { HomePageSEO } from '../components/seo/SEO';

const HomePage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <HomePageSEO />

      {/* Global spotlight cursor effect */}
      <SpotlightCursor config={{ radius: 300, brightness: 0.08, color: '#00D49D' }} />

      <Navbar />
      <StickyApplyCTA />
      <ScrollToTop />
      <main>
        <HeroSection />
        <QuickFeaturesSection />
        <MCAExplainerSection />
        {/* <CalculatorSection /> */}
        <LeverageSection />
        <RequirementsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <ReviewsSection />
        <GuideSection />
        <ApplySection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
