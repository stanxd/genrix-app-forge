
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-white/10 p-4 bg-black/20">
      <div className="flex items-center gap-2">
        <Input
          className="flex-grow bg-white/5 border-white/20 focus:border-genrix-purple/50 text-white"
          placeholder="Ask a follow-up question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          className={`bg-genrix-purple hover:bg-genrix-purple/90 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
