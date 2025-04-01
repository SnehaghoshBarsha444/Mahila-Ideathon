
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
                Global Accessibility
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Access <span className="text-gradient">For Everyone</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                We've designed our platform to be accessible to women entrepreneurs worldwide, regardless of language, device, or ability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full flex items-center justify-center">
                    <Globe className="w-32 h-32 text-primary/30" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <Smartphone className="w-20 h-20 text-primary" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                        5+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-6">Breaking Down Barriers</h2>
                <p className="text-muted-foreground mb-6">
                  Our commitment to accessibility ensures that financial tools and resources are available to women entrepreneurs regardless of location, language, or technical expertise.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Multi-language support with 5+ languages",
                    "Responsive design that works on any device",
                    "Low-bandwidth mode for areas with limited internet",
                    "Voice-enabled features for hands-free operation",
                    "Compliance with WCAG 2.1 accessibility guidelines"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="rounded-full">
                  <Link to="/register">
                    Experience Global Access <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Accessibility Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 6-6 2-3"></path>
                      <path d="M2 5h12"></path>
                      <path d="M7 2h1"></path>
                      <path d="m22 22-5-10-5 10"></path>
                      <path d="M14 18h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Multi-language Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Access the platform in English, Spanish, French, Arabic, and more languages to serve entrepreneurs globally.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Our platform adapts to any screen size, from smartphones to desktops, ensuring a seamless experience.
                  </p>
                </div>
                
                <div className="glass-panel rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m16.2 7.8-2 6.3-6.4 2.1 2-6.3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Offline Capabilities</h3>
                  <p className="text-muted-foreground text-sm">
                    Access critical features even with limited connectivity, with data syncing when you're back online.
                  </p>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 bg-primary/5 text-center">
                <h3 className="text-xl font-bold mb-4">Accessibility Is At Our Core</h3>
                <p className="text-muted-foreground mb-6">
                  We believe financial tools should be accessible to everyone. Join our platform to experience financial services designed with accessibility in mind.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/register">
                    Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
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

export default Accessibility;
