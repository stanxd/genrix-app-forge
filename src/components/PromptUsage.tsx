
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PromptUsageProps {
  used: number;
  total: number;
  isPremium?: boolean;
}

const PromptUsage: React.FC<PromptUsageProps> = ({ used, total, isPremium = false }) => {
  const percentUsed = Math.min((used / total) * 100, 100);
  
  return (
    <Card className="bg-black/20 border-white/10 backdrop-blur-sm text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Prompt Usage</CardTitle>
        <CardDescription className="text-xs text-white/60">
          {isPremium ? 'Premium Plan' : 'Free Plan'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>{used} used</span>
            <span>{total} total</span>
          </div>
          <Progress 
            value={percentUsed} 
            className={`h-2 bg-white/10 ${isPremium ? "[&>div]:bg-genrix-purple" : "[&>div]:bg-white/50"}`} 
          />
          <div className="text-xs text-white/60 pt-1">
            {isPremium 
              ? 'You have premium access (100 prompts / 30 days)' 
              : 'Upgrade to premium for more prompts ($20/month)'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptUsage;
