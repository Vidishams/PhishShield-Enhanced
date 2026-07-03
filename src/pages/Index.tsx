import { useAuth } from "../context/AuthContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DocumentationSection from "@/components/DocumentationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const { user } = useAuth(); // Get current logged-in user

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Optional greeting above HeroSection */}
        {user && (
          <div className="text-center mt-6 mb-4">
            <p className="text-lg text-muted-foreground">
              Welcome back, <span className="font-semibold">{user.displayName}</span>!
            </p>
          </div>
        )}

        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DocumentationSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
