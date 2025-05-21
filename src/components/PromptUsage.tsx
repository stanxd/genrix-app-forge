
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface PromptUsageProps {
  used: number;
  total: number;
  isPremium?: boolean;
}

const PromptUsage: React.FC<PromptUsageProps> = ({ used, total, isPremium = false }) => {
  const percentUsed = Math.min((used / total) * 100, 100);
  
  return (
    <div className="w-full bg-black/20 rounded-md p-2">
      <div className="flex justify-between items-center text-xs mb-1">
        <span className="text-white/80 font-medium flex items-center">
          <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-genrix-purple' : 'bg-white/70'} mr-1.5`}></span>
          {isPremium ? 'Premium' : 'Free'} Plan
        </span>
        <span className="text-white/60">
          <span className="font-medium text-white">{used}</span> / {total} prompts
        </span>
      </div>
      <Progress 
        value={percentUsed} 
        className={`h-1.5 bg-white/10 ${isPremium ? "[&>div]:bg-genrix-purple" : "[&>div]:bg-white/50"}`} 
      />
    </div>
  );
};

export default PromptUsage;
