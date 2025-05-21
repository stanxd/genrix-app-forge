
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
    <div className="flex flex-col items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            variant="outline"
            size="lg"
            className={`h-14 w-14 rounded-lg border-white/20 hover:bg-white/10 flex flex-col justify-center items-center ${
              planType === 'Paid' ? 'bg-genrix-purple/20' : 'bg-white/5'
            }`}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="text-sm">{label}</div>
          <Badge
            variant={planType === 'Free' ? 'secondary' : 'default'}
            className={`text-xs ${planType === 'Free' ? 'bg-white/20' : 'bg-genrix-purple'}`}
          >
            {planType} plan
          </Badge>
        </TooltipContent>
      </Tooltip>
      <div className="text-xs mt-2 text-white/60">{label}</div>
    </div>
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
    <div className="flex justify-center gap-5 p-4 border-b border-white/10">
      <ActionButton
        icon={<Chrome size={24} className="text-white" />}
        label="Browser Preview"
        planType="Free"
        onClick={() => handleAction('Browser Preview', false)}
      />
      <ActionButton
        icon={<Database size={24} className="text-white" />}
        label="Supabase"
        planType="Paid"
        onClick={() => handleAction('Supabase Connect', true)}
      />
      <ActionButton
        icon={<Github size={24} className="text-white" />}
        label="Github"
        planType="Paid"
        onClick={() => handleAction('Github Push', true)}
      />
      <ActionButton
        icon={<Download size={24} className="text-white" />}
        label="Download"
        planType="Paid"
        onClick={() => handleAction('Download Project', true)}
      />
    </div>
  );
};

export default PreviewActions;
