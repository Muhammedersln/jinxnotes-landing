import React from 'react';

interface BrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'yellow' | 'red' | 'teal' | 'purple' | 'black' | 'bg';
  rotate?: string;
  shadowSize?: 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect?: boolean;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  variant = 'white',
  rotate = 'rotate-0',
  shadowSize = 'md',
  hoverEffect = false,
  className = '',
  ...props
}) => {
  const getBgColor = () => {
    switch (variant) {
      case 'yellow':
        return 'bg-brutalist-yellow';
      case 'red':
        return 'bg-brutalist-red';
      case 'teal':
        return 'bg-brutalist-teal';
      case 'purple':
        return 'bg-brutalist-purple text-brutalist-white';
      case 'black':
        return 'bg-brutalist-black text-brutalist-white';
      case 'bg':
        return 'bg-brutalist-bg';
      default:
        return 'bg-brutalist-white';
    }
  };

  const getShadowClass = () => {
    switch (shadowSize) {
      case 'sm':
        return 'shadow-brutalist-sm';
      case 'lg':
        return 'shadow-brutalist-lg';
      case 'xl':
        return 'shadow-brutalist-xl';
      default:
        return 'shadow-brutalist-md';
    }
  };

  const getHoverClass = () => {
    if (!hoverEffect) return '';
    return 'hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutalist-lg transition-all duration-100 ease-out';
  };

  return (
    <div
      className={`
        border-4 border-brutalist-black 
        ${getBgColor()} 
        ${getShadowClass()} 
        ${getHoverClass()} 
        ${rotate} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
