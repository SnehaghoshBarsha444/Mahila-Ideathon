
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";

const Blockchain = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                Blockchain Security
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Trust</span> & Transparency in Lending
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Our blockchain technology ensures secure, transparent, and fair transactions for all lending activities on the platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">How Blockchain Empowers Our Platform</h2>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Immutable transaction records ensure transparency",
                    "Smart contracts automate lending terms fairly",
                    "Reduced transaction costs by eliminating intermediaries",
                    "Enhanced security through cryptographic verification",
                    "Complete audit trail for all financial activities"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="rounded-full">
                  <Link to="/register">
                    Experience Secure Lending <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full flex items-center justify-center">
                    <Shield className="w-32 h-32 text-primary/30" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 md:w-60 md:h-60 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Blockchain Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Contracts</h3>
                  <p className="text-muted-foreground text-sm">
                    Self-executing contracts with loan terms written directly into code, ensuring automatic enforcement.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Distributed Ledger</h3>
                  <p className="text-muted-foreground text-sm">
                    All transactions are recorded on multiple computers, making the system highly resistant to fraud.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <path d="M8 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M12 8v.01"></path>
                      <path d="M12 16v.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tokenization</h3>
                  <p className="text-muted-foreground text-sm">
                    Convert loan assets into digital tokens that can be easily transferred, divided, or combined.
                  </p>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 bg-primary/5 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Experience Blockchain-Secured Lending?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our platform to benefit from the security and transparency that blockchain technology provides.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/register">
                    Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blockchain;
