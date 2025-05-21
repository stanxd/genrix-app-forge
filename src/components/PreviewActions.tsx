
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Chrome, Database, Github, Download } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  planType: 'Free' | 'Paid';
  onClick: () => void;
}

const ActionButton = ({ icon, label, planType, onClick }: ActionButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onClick}
          variant="ghost"
          size="sm"
          className={`relative p-2 rounded-md ${
            planType === 'Paid' ? 'text-genrix-purple hover:bg-genrix-purple/10' : 'text-white/80 hover:bg-white/10'
          }`}
        >
          {icon}
          {planType === 'Paid' && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-genrix-purple rounded-full animate-pulse"></span>
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="flex flex-col items-center">
        <div className="text-xs font-medium">{label}</div>
        <Badge
          variant={planType === 'Free' ? 'secondary' : 'default'}
          className={`text-[10px] mt-1 px-1.5 py-0 h-4 ${planType === 'Free' ? 'bg-white/20' : 'bg-genrix-purple'}`}
        >
          {planType} plan
        </Badge>
      </TooltipContent>
    </Tooltip>
  );
};

const PreviewActions = () => {
  const handleAction = (action: string, isPaid: boolean) => {
    if (isPaid) {
      toast.info('This feature requires a paid plan', {
        description: 'Upgrade to our paid plan ($20/month) to access this feature',
        action: {
          label: 'Upgrade',
          onClick: () => console.log('Navigate to upgrade page')
        }
      });
    } else {
      toast.success(`Opening ${action}`);
      // Implement actual functionality here
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 border-b border-white/10 bg-black/10">
      <ActionButton
        icon={<Chrome size={18} />}
        label="Browser Preview"
        planType="Free"
        onClick={() => handleAction('Browser Preview', false)}
      />
      <ActionButton
        icon={<Database size={18} />}
        label="Supabase"
        planType="Paid"
        onClick={() => handleAction('Supabase Connect', true)}
      />
      <ActionButton
        icon={<Github size={18} />}
        label="Github"
        planType="Paid"
        onClick={() => handleAction('Github Push', true)}
      />
      <ActionButton
        icon={<Download size={18} />}
        label="Download"
        planType="Paid"
        onClick={() => handleAction('Download Project', true)}
      />
    </div>
  );
};

export default PreviewActions;
