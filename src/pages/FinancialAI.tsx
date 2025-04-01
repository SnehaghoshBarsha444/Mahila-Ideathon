
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { ChatInterface } from "@/components/ChatInterface";
import { FinanceTransfer } from "@/components/FinanceTransfer";

const FinancialAI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                  AI Financial Advisor
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Personal <span className="text-gradient">Financial</span> Expert
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI-powered financial advisor provides personalized guidance, helps you understand loan options, and offers strategic advice to grow your business. Now with fund transfer capabilities.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Get personalized financial planning advice",
                    "Learn about loan management strategies",
                    "Receive investment recommendations",
                    "Process secure fund transfers",
                    "Access financial education resources",
                    "Available 24/7 in multiple languages"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full max-w-md mx-auto lg:ml-auto">
                <div className="glass-panel rounded-2xl shadow-card p-4 h-[500px] flex flex-col">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Financial Advisor AI</h3>
                  </div>
                  <ChatInterface />
                </div>
              </div>
            </div>
            
            <div className="mt-20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Financial Tools</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <FinanceTransfer />
                
                <div className="rounded-xl border p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles size={18} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">AI Credit Assessment</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Get a personalized credit assessment based on your business performance, not just traditional metrics.
                  </p>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/ai-credit">
                      Start Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How Our AI Helps You Succeed</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="glass-panel rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Personalized Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get advice tailored to your unique business situation and financial goals.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                      <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"></path>
                      <path d="M18 6h.01"></path>
                      <path d="M6 18h.01"></path>
                      <path d="M14.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                      <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M18 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Access financial advice whenever you need it, day or night, from anywhere.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI learns from interactions to provide increasingly relevant advice over time.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/register">
                    Start Using AI Advisor <ArrowRight className="ml-2 h-5 w-5" />
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

export default FinancialAI;
