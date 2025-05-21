
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-genrix-purple to-genrix-accent mr-2"></div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">
              Genrix
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How it works</a>
                </li>
                <li>
                  <a href="#tech-stack" className="text-white/80 hover:text-white transition-colors">Tech Stack</a>
                </li>
                <li>
                  <a href="#demo" className="text-white/80 hover:text-white transition-colors">Demo</a>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-2">
              <Button variant="ghost" className="text-white/80 hover:text-white transition-colors">
                Login
              </Button>
              <Button className="bg-genrix-purple hover:bg-genrix-purple/90">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#features" 
                    className="block text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    className="block text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a 
                    href="#tech-stack" 
                    className="block text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a 
                    href="#demo" 
                    className="block text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Demo
                  </a>
                </li>
                <li className="pt-2">
                  <Button variant="ghost" className="w-full text-left text-white/80 hover:text-white transition-colors">
                    Login
                  </Button>
                </li>
                <li>
                  <Button className="w-full bg-genrix-purple hover:bg-genrix-purple/90">
                    Get Started
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
