import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import FunctionsGrid from "@/components/landing/FunctionsGrid";
import AccountingBlock from "@/components/landing/AccountingBlock";
import AutomationsBlock from "@/components/landing/AutomationsBlock";
import FAQ from "@/components/landing/FAQ";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <FunctionsGrid />
        <AccountingBlock />
        <AutomationsBlock />
        <FAQ />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
