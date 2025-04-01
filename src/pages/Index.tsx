
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  Sparkles, 
  BarChart3, 
  Users, 
  CheckCircle,
  GraduationCap,
  ArrowUpRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  // Animation observer setup for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToFeatures = () => {
    featuresSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
              Empowering Women Entrepreneurs
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-down">
              <span className="text-gradient">Financial Freedom</span> Through Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in">
              A revolutionary fintech platform that enhances financial access for women entrepreneurs using AI and blockchain technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <Button asChild size="lg" className="rounded-full h-12 px-8">
                <Link to="/register">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button onClick={scrollToFeatures} variant="outline" size="lg" className="rounded-full h-12 px-8">
                Explore Features
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center space-x-8 animate-fade-in">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Women Funded</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">$25M+</p>
                <p className="text-sm text-muted-foreground">Loans Facilitated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Repayment Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Cards Section */}
      <section ref={featuresSectionRef} className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10">
              Innovative Solutions for Financial Growth
            </h2>
            <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10">
              Our platform combines advanced technology with financial expertise to create a comprehensive ecosystem for women entrepreneurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards with links to dedicated pages */}
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Credit Evaluation</h3>
              <p className="text-muted-foreground mb-6">
                Our intelligent system assesses creditworthiness based on business performance and alternative financial indicators.
              </p>
              <Link to="/ai-credit" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">P2P Lending Marketplace</h3>
              <p className="text-muted-foreground mb-6">
                Connect directly with investors who believe in your business through our secure peer-to-peer lending platform.
              </p>
              <Link to="/marketplace" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blockchain Security</h3>
              <p className="text-muted-foreground mb-6">
                All transactions are secured and transparent with blockchain technology, ensuring trust and fairness in lending.
              </p>
              <Link to="/blockchain" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Insights</h3>
              <p className="text-muted-foreground mb-6">
                Gain valuable insights into your financial health and growth opportunities through data analytics.
              </p>
              <Link to="/insights" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Financial Advisor</h3>
              <p className="text-muted-foreground mb-6">
                Get personalized financial advice and education through our AI-powered chatbot assistant.
              </p>
              <Link to="/financial-ai" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover group animate-on-scroll opacity-0 translate-y-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Accessibility</h3>
              <p className="text-muted-foreground mb-6">
                Access our platform in multiple languages and with a responsive design that works on any device.
              </p>
              <Link to="/accessibility" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot Demo Section - Shortened version */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-secondary/30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10">
              Meet Your AI Financial Assistant
            </h2>
            <p className="text-muted-foreground mb-8 animate-on-scroll opacity-0 translate-y-10">
              Our AI-powered chatbot provides personalized financial guidance to help you grow your business.
            </p>
            <Button asChild size="lg" className="rounded-full animate-on-scroll opacity-0 translate-y-10">
              <Link to="/financial-ai">
                Try The Full Version <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYwIiBoZWlnaHQ9IjU2MCIgdmlld0JveD0iMCAwIDU2MCA1NjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuMSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDgwLjUxNCAxNjIuMDQyQzQ2OS42MjcgMTU0LjQ4NSA0NTQuOTE0IDE1Ni43OTEgNDQ3LjM1OCAxNjcuNjc3TDIyNS40MzggNDY0Ljg3NkMyMTcuODgxIDQ3NS43NjMgMjIwLjE4NyA0OTAuNDc1IDIzMS4wNzMgNDk4LjAzMUMyNDEuOTYgNTA1LjU4OCAyNTYuNjcyIDUwMy4yODIgMjY0LjIyOSA0OTIuMzk2TDQ4Ni4xNDkgMTk1LjE5N0M0OTMuNzA1IDE4NC4zMSA0OTEuNCAxNjkuNTk4IDQ4MC41MTQgMTYyLjA0MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zXzE3NikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOTYuODI0IDI0NS43MzNDMzg1LjkzNyAyMzguMTc2IDM3MS4yMjUgMjQwLjQ4MiAzNjMuNjY4IDI1MS4zNjhMMTQxLjc0OCA1NDguNTY4QzEzNC4xOTIgNTU5LjQ1NCAxMzYuNDk4IDU3NC4xNjYgMTQ3LjM4NCA1ODEuNzIzQzE1OC4yNzEgNTg5LjI3OSAxNzIuOTgzIDU4Ni45NzMgMTgwLjUzOSA1NzYuMDg3TDQwMi40NTkgMjc4Ljg4N0M0MTAuMDE2IDI2OC4wMDEgNDA3LjcxIDI1My4yODkgMzk2LjgyNCAyNDUuNzMzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzNfMTc2KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5OC44MzMgMjM3LjY2NUMyODcuOTQ3IDIzMC4xMDkgMjczLjIzNSAyMzIuNDE1IDI2NS42NzggMjQzLjMwMUw0My43NTggNTQwLjVDMzYuMjAyIDU1MS4zODcgMzguNTA4IDU2Ni4wOTkgNDkuMzk0IDU3My42NTVDNjAuMjgxIDU4MS4yMTIgNzQuOTkzIDU3OC45MDYgODIuNTQ5IDU2OC4wMkwzMDQuNDY5IDI3MC44MkMzMTIuMDI1IDI1OS45MzQgMzA5LjcxOSAyNDUuMjIyIDI5OC44MzMgMjM3LjY2NVoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8zXzE3NikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00ODkuMzMzIDI2NS4zMzRDNTAyLjc2OCAyNjUuMzM0IDUxMy42NjYgMjU0LjQzNiA1MTMuNjY2IDI0MS4wMDFWMjEwLjY2N0M1MTMuNjY2IDE5Ny4yMzMgNTAyLjc2OCAxODYuMzM0IDQ4OS4zMzMgMTg2LjMzNEM0NzUuODk5IDE4Ni4zMzQgNDY1IDE5Ny4yMzMgNDY1IDIxMC42NjdWMjQxLjAwMUM0NjUgMjU0LjQzNiA0NzUuODk5IDI2NS4zMzQgNDg5LjMzMyAyNjUuMzM0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzNfMTc2KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM1NCAzNDBDMzY3LjQzNCAzNDAgMzc4LjMzMyAzMjkuMTAyIDM3OC4zMzMgMzE1LjY2N1YyODUuMzMzQzM3OC4zMzMgMjcxLjg5OSAzNjcuNDM0IDI2MSAzNTQgMjYxQzM0MC41NjYgMjYxIDMyOS42NjcgMjcxLjg5OSAzMjkuNjY3IDI4NS4zMzNWMzE1LjY2N0MzMjkuNjY3IDMyOS4xMDIgMzQwLjU2NiAzNDAgMzU0IDM0MFoiIGZpbGw9InVybCgjcGFpbnQ0X2xpbmVhcl8zXzE3NikiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzNfMTc2IiB4MT0iMjM0LjcxMiIgeTE9IjQ5Ni4wMjEiIHgyPSI0NzYuODc0IiB5Mj0iMTY0LjA1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzNfMTc2IiB4MT0iMjAwLjczMyIgeTE9IjU3Mi42MDEiIHgyPSIzOTIuMTg0IiB5Mj0iMjQ3Ljc0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzNfMTc2IiB4MT0iNjkuODMyIiB5MT0iNTcxLjYxIiB4Mj0iMjk0LjE5MiIgeTI9IjIzOS42NzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8zXzE3NiIgeDE9IjQ3NS40NjYiIHkxPSIyNTIuNjQ5IiB4Mj0iNTEzLjEwOCIgeTI9IjE5OC4yMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8zXzE3NiIgeDE9IjM0MC4xMzMiIHkxPSIzMjcuMzE1IiB4Mj0iMzc3Ljc3NSIgeTI9IjI3Mi44OTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10">
              Join thousands of women entrepreneurs who have used our platform to access capital, improve financial literacy, and grow their businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll opacity-0 translate-y-10">
              <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 text-primary font-medium">
                <Link to="/register">
                  Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 border-white/30 hover:bg-white/10">
                <Link to="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
