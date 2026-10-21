import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useStore();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-violet-accent flex-shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-navy-card/95 border border-cyan/50 shadow-glow-cyan backdrop-blur-md text-white animate-fade-in transition-all max-w-md">
      {icons[toast.type] || icons.success}
      <span className="text-sm font-medium text-gray-100">{toast.message}</span>
    </div>
  );
};
