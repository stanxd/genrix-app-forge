
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Build a Next.js blog with authentication and comments';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Reset after a pause
        setTimeout(() => {
          currentIndex = 0;
          const resetInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(resetInterval);
            }
          }, 100);
        }, 3000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Animated blobs in background */}
      <div className="blob blob-purple w-[500px] h-[500px] top-0 left-[10%]"></div>
      <div className="blob blob-blue w-[400px] h-[400px] bottom-[10%] right-[5%]"></div>
      <div className="blob blob-pink w-[300px] h-[300px] bottom-[30%] left-[20%]"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <Button variant="outline" className="rounded-full px-4 py-1 h-auto text-sm border-genrix-purple/30 bg-genrix-purple/10 text-genrix-purple mb-4">
                Introducing Genrix AI
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Transform your ideas into</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">
                Next.js applications
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-lg">
              Genrix is an AI-powered platform that converts text descriptions into full-stack Next.js web applications in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-genrix-purple hover:bg-genrix-purple/90 text-white px-8">
                Get Started Free
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-6 text-sm text-white/50">
              No credit card required • Free tier available
            </div>
          </div>
          
          <div className="lg:col-span-6 animated-gradient-border">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
              <div className="flex items-center space-x-2 pb-4 border-b border-white/10">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="flex-grow text-center text-sm text-white/50">prompt.tsx</div>
              </div>
              
              <div className="py-6">
                <div className="code-block">
                  <div className="text-white/60">{"// Your prompt"}</div>
                  <div className="text-genrix-purple font-bold pt-2">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>
                  
                  <div className="mt-8 pl-4 border-l-2 border-genrix-purple/30">
                    <div className="text-white/60">{"// Genrix response"}</div>
                    <div className="text-white pt-2">
                      Generating Next.js blog application with:
                    </div>
                    <ul className="mt-2 space-y-1 text-white/80">
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                        Authentication system
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                        Blog post creation and management
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                        Comment functionality
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                        Responsive design
                      </li>
                    </ul>
                    
                    <div className="mt-4 text-genrix-accent">
                      Building application... <span className="animate-pulse">■</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
