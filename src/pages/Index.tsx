import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      
      {/* Demo Navigation - Remove in production */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Demo Navigation</h3>
          <p className="text-muted-foreground mb-6">Click below to explore different interfaces</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/login"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign In
            </a>
            <a 
              href="/student"
              className="px-6 py-3 bg-creative text-creative-foreground rounded-lg hover:bg-creative/90 transition-colors"
            >
              Student Dashboard
            </a>
            <a 
              href="/mentor"
              className="px-6 py-3 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-colors"
            >
              Mentor Dashboard
            </a>
            <a 
              href="/parent"
              className="px-6 py-3 bg-primary/80 text-primary-foreground rounded-lg hover:bg-primary/70 transition-colors"
            >
              Parent Dashboard
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
