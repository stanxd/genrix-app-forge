
import React from 'react';
import { Zap, Code, Clock, Palette, Database, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-genrix-purple" />,
      title: "Instant Deployment",
      description: "Deploy your application to production with one click, complete with CI/CD pipelines"
    },
    {
      icon: <Code className="h-6 w-6 text-genrix-purple" />,
      title: "Clean Code Generation",
      description: "Generate production-ready Full-stack code with TypeScript support and best practices"
    },
    {
      icon: <Clock className="h-6 w-6 text-genrix-purple" />,
      title: "Time Saving",
      description: "Reduce development time by 90% by automating repetitive coding tasks"
    },
    {
      icon: <Palette className="h-6 w-6 text-genrix-purple" />,
      title: "Customizable UI",
      description: "Choose from pre-built UI components or describe your own custom designs"
    },
    {
      icon: <Database className="h-6 w-6 text-genrix-purple" />,
      title: "Database Integration",
      description: "Seamlessly connect to Supabase databases with automatic schema generation"
    },
    {
      icon: <LineChart className="h-6 w-6 text-genrix-purple" />,
      title: "Performance Analytics",
      description: "Monitor your application's performance with built-in analytics dashboards"
    }
  ];

  return (
    <div id="features" className="py-24 relative">
      {/* Background blobs */}
      <div className="blob blob-blue w-[400px] h-[400px] top-[10%] right-[15%] opacity-30"></div>
      <div className="blob blob-purple w-[300px] h-[300px] bottom-[20%] left-[10%] opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Every Feature You Need to Build
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent"> Modern Web Apps</span>
          </h2>
          <p className="text-lg text-white/70">
            Genrix comes packed with everything you need to build, deploy, and scale your Full-stack applications without writing a single line of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-genrix-purple/40 transition-all hover:shadow-lg hover:shadow-genrix-purple/10"
            >
              <div className="bg-white/10 rounded-lg inline-flex p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
