import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, Download } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import { Link } from 'react-router-dom';
import PreviewActions from '@/components/PreviewActions';
import PromptUsage from '@/components/PromptUsage';
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const Generator = () => {
  const [searchParams] = useSearchParams();
  const initialPrompt = searchParams.get('prompt') || '';
  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (initialPrompt) {
      // Add initial user prompt message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: initialPrompt,
        role: 'user',
        timestamp: new Date()
      };
      setMessages([userMessage]);
      
      // Simulate AI response
      handleAIResponse(initialPrompt);
    }
  }, [initialPrompt]);
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate AI response
    handleAIResponse(content);
  };
  
  const handleAIResponse = (userPrompt: string) => {
    setIsGenerating(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const responseContent = generateResponse(userPrompt);
      const aiResponse: Message = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsGenerating(false);
    }, 1500);
  };
  
  // Simple function to generate fake responses
  const generateResponse = (prompt: string) => {
    const responses = [
      `I've generated a Full-stack application based on your prompt: "${prompt}". The app includes React components, Tailwind CSS styling, and full backend functionality. You can see a preview on the right panel.`,
      `Your Full-stack app is ready! I've created components for "${prompt}" with modern design principles, responsive layouts, and integrated backend services. Check out the preview to see how it looks.`,
      `I've built the app structure for "${prompt}" using React, TypeScript and modern Full-stack patterns. The preview shows the current state of the application.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleCopyCode = () => {
    toast.success('Code copied to clipboard');
  };

  return (
    <div className="min-h-screen w-full bg-genrix-dark-purple flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 p-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-white hover:text-white/80">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/20 hover:bg-white/10"
              onClick={handleCopyCode}
            >
              <Copy size={14} className="mr-1" /> Copy Code
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/20 hover:bg-white/10"
              onClick={() => toast.info('This feature requires a paid plan')}
            >
              <Download size={14} className="mr-1" /> Download
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex-1 container mx-auto flex flex-col md:flex-row gap-4 p-4">
        {/* Chat panel */}
        <div className="flex-1 md:w-1/2 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col h-[calc(100vh-7rem)]">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Chat with Genrix</h2>
            <p className="text-sm text-white/60">Ask follow-up questions or request changes</p>
          </div>
          
          <div className="flex-1 overflow-auto p-4" ref={chatContainerRef}>
            {messages.map(message => (
              <ChatMessage 
                key={message.id}
                message={message.content}
                role={message.role}
                timestamp={message.timestamp}
              />
            ))}
            
            {isGenerating && (
              <div className="flex justify-start mb-4">
                <div className="bg-white/10 p-4 rounded-lg rounded-tl-none max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-genrix-purple rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-genrix-purple rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-genrix-purple rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-white/10 bg-black/10">
            <PromptUsage used={1} total={3} />
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} isLoading={isGenerating} />
        </div>
        
        {/* Preview panel */}
        <div className="flex-1 md:w-1/2 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 flex flex-col h-[calc(100vh-7rem)]">
          <PreviewActions />
          
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">App Preview</h2>
            <p className="text-sm text-white/60">Live preview of your generated application</p>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="w-full h-full bg-white rounded-b-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-genrix-dark-purple font-semibold mb-2">
                  Preview for: {initialPrompt}
                </div>
                <div className="text-gray-500 text-sm">
                  {isGenerating ? (
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 border-2 border-genrix-purple border-t-transparent rounded-full animate-spin mb-2"></div>
                      Generating preview...
                    </div>
                  ) : (
                    'Application preview would appear here'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
