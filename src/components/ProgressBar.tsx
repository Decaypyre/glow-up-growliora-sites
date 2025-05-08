
import React from 'react';

interface ProgressBarProps {
  progress: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-growliora-gray/20 rounded-full h-2.5">
        <div 
          className="bg-orange-gradient h-2.5 rounded-full animate-progress transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
