import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyG2Cloud from "@/components/WhyG2Cloud";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-border" />
      </div>
      <About />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-border" />
      </div>
      <Services />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-border" />
      </div>
      <WhyG2Cloud />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-border" />
      </div>
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
