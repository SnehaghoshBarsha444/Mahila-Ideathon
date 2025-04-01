
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { User, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 glass-panel shadow-subtle" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="public/favicon.ico" 
              alt="FemFin Connect Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-display font-semibold text-xl">FemFin Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="animated-underline font-medium">Marketplace</Link>
            <Link to="/financial-ai" className="animated-underline font-medium">Financial AI</Link>
            <Link to="/learn" className="animated-underline font-medium">Learn</Link>
            <LanguageToggle />
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/login">
                <User size={18} className="mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild className="rounded-full shadow-subtle">
              <Link to="/register">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 rounded-xl p-4 animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/marketplace" 
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/financial-ai" 
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Financial AI
            </Link>
            <Link 
              to="/learn" 
              className="px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <div className="px-4 py-2">
              <LanguageToggle />
            </div>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button asChild variant="outline" size="sm" className="justify-center">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={16} className="mr-2" />
                  Login
                </Link>
              </Button>
              <Button asChild className="justify-center">
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
