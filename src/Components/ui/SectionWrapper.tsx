import React from 'react';
import './SectionWrapper.css';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  children,
  className = '',
  icon
}) => {
  return (
    <div className={`section-wrapper glass-effect animate-slide-up ${className}`}>
      <div className="section-header">
        {icon && <span className="section-icon">{icon}</span>}
        <h2 className="section-title">{title}</h2>
        <div className="section-decoration"></div>
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
