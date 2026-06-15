import React from 'react';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'yellow' | 'teal' | 'red' | 'purple' | 'white';
  size?: 'sm' | 'md' | 'lg';
  rotate?: string;
  className?: string;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rotate = 'rotate-0',
  className = '',
  ...props
}) => {
  const getBgColor = () => {
    switch (variant) {
      case 'yellow':
        return 'bg-brutalist-yellow text-brutalist-black';
      case 'teal':
        return 'bg-brutalist-teal text-brutalist-black';
      case 'red':
        return 'bg-brutalist-red text-brutalist-black';
      case 'purple':
        return 'bg-brutalist-purple text-brutalist-white';
      case 'white':
        return 'bg-brutalist-white text-brutalist-black';
      default:
        return 'bg-brutalist-black text-brutalist-white';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-4 text-sm';
      case 'lg':
        return 'py-4 px-8 text-xl';
      default:
        return 'py-3 px-6 text-base';
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center font-mono font-black uppercase tracking-wider
        border-4 border-brutalist-black 
        shadow-brutalist-md hover:shadow-brutalist-sm
        hover:translate-x-[2px] hover:translate-y-[2px]
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
        transition-all duration-100 ease-out cursor-pointer select-none
        ${getBgColor()} 
        ${getSizeClass()} 
        ${rotate} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
