
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
                P2P Lending Marketplace
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect with <span className="text-gradient">Investors</span> Who Believe in Your Business
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our peer-to-peer lending marketplace connects women entrepreneurs with investors who understand your vision and are ready to support your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Diverse Lending Options</h3>
                <p className="text-muted-foreground">
                  Access a range of lending options from microloans to larger funding rounds, tailored to your business stage and needs.
                </p>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path>
                    <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                    <path d="M16 11h0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Interest Rates</h3>
                <p className="text-muted-foreground">
                  Benefit from competitive interest rates based on your business potential rather than traditional collateral requirements.
                </p>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplified Process</h3>
                <p className="text-muted-foreground">
                  Our streamlined application and funding process removes unnecessary bureaucracy, getting you funded faster.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-panel rounded-2xl p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4 text-center">Ready to Get Funded?</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Create an account to access our marketplace and connect with investors who share your vision.
                </p>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/register">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
