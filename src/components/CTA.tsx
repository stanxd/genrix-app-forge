
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-24 relative">
      {/* Background blobs */}
      <div className="blob blob-purple w-[500px] h-[500px] top-[10%] left-[10%]"></div>
      <div className="blob blob-blue w-[400px] h-[400px] bottom-[10%] right-[15%]"></div>
      
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-genrix-purple/20 to-genrix-blue/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 lg:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">transform</span> your development workflow?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Join thousands of developers who are building Next.js applications faster than ever before with Genrix.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-genrix-purple hover:bg-genrix-purple/90 text-white px-8">
                Get Started Free
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-white/50">
              No credit card required • Free tier with up to 5 projects • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
