import React from 'react';

interface SchoolLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SchoolLogo: React.FC<SchoolLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 lg:w-12 lg:h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <img 
        src="/image.png" 
        alt="Sunshine High School Logo" 
        className="w-full h-full object-contain rounded-full shadow-lg"
      />
    </div>
  );
};

export default SchoolLogo;