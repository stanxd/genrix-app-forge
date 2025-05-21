
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Code2, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={24} className="text-genrix-purple" />,
      title: "Describe Your App",
      description: "Simply describe what you want to build in natural language. Be as detailed as you want.",
      example: "I need a blog with user authentication, markdown support, and a comment system."
    },
    {
      icon: <Code2 size={24} className="text-genrix-purple" />,
      title: "AI Generates Code",
      description: "Our AI analyzes your description and generates a complete Next.js application with all necessary components.",
      example: "Generating routes, components, authentication, database models, and API endpoints..."
    },
    {
      icon: <Rocket size={24} className="text-genrix-purple" />,
      title: "Deploy & Customize",
      description: "Deploy your app instantly to production and further customize it as needed.",
      example: "Application deployed! You can now customize styles, add new features, or make adjustments."
    }
  ];

  return (
    <div id="how-it-works" className="py-24 bg-black/30 backdrop-blur-sm relative">
      {/* Background blobs */}
      <div className="blob blob-purple w-[400px] h-[400px] top-[20%] right-[5%] opacity-30"></div>
      <div className="blob blob-blue w-[300px] h-[300px] bottom-[10%] left-[5%] opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Genrix <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">Works</span>
          </h2>
          <p className="text-lg text-white/70">
            Transform your ideas into fully-functional Next.js applications in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-genrix-dark-purple border-2 border-genrix-purple flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-white/70 mb-4">{step.description}</p>
              <div className="bg-black/40 p-3 rounded-md text-sm text-white/60 font-mono">
                "{step.example}"
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-genrix-purple/50">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-genrix-purple hover:bg-genrix-purple/90 text-white px-8">
            Try It Now
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
