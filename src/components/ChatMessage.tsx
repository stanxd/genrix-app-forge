
import React from 'react';

type MessageRole = 'user' | 'assistant';

interface ChatMessageProps {
  message: string;
  role: MessageRole;
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, role, timestamp }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`
        max-w-[80%] p-4 rounded-lg
        ${role === 'user' 
          ? 'bg-genrix-purple/30 text-white rounded-tr-none' 
          : 'bg-white/10 text-white rounded-tl-none'}
      `}>
        <div className="text-sm">{message}</div>
        {timestamp && (
          <div className="text-xs mt-1 text-white/50">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
