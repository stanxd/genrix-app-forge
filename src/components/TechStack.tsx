
import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      name: "Next.js",
      description: "React framework for production",
      icon: "N",
      color: "bg-black text-white"
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative",
      icon: "S",
      color: "bg-emerald-600 text-white"
    },
    {
      name: "TypeScript",
      description: "JavaScript with syntax for types",
      icon: "TS",
      color: "bg-blue-600 text-white"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: "T",
      color: "bg-cyan-500 text-white"
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js",
      icon: "P",
      color: "bg-indigo-600 text-white"
    },
    {
      name: "tRPC",
      description: "End-to-end type-safe APIs",
      icon: "tRPC",
      color: "bg-purple-600 text-white"
    }
  ];

  return (
    <div id="tech-stack" className="py-24 relative">
      {/* Background blobs */}
      <div className="blob blob-pink w-[300px] h-[300px] top-[30%] right-[10%] opacity-30"></div>
      <div className="blob blob-blue w-[400px] h-[400px] bottom-[20%] left-[5%] opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built with <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">Modern Technologies</span>
          </h2>
          <p className="text-lg text-white/70">
            Genrix generates applications using the latest technologies and best practices in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start space-x-4"
            >
              <div className={`${tech.color} rounded-lg w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-white/70">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Trusted by Innovative Teams</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
              <div key={index} className="text-white/40 font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
