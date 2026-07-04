import React from 'react';

interface LogoSvgProps {
  className?: string;
}

export default function LogoSvg({ className = "w-14 h-17" }: LogoSvgProps) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      className={`${className} shrink-0`} 
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      {/* Background */}
      <rect x="0" y="0" width="100" height="120" fill="#ffffff" />
      
      {/* Red Border Frame with slight inner margin */}
      <rect x="4" y="4" width="92" height="112" fill="none" stroke="#d31212" strokeWidth="4" />
      
      {/* Monogram letters */}
      <g>
        {/* Letter P in the background */}
        <text
          x="56"
          y="92"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="84"
          fontWeight="bold"
          fill="#d31212"
          textAnchor="middle"
          textRendering="geometricPrecision"
        >
          P
        </text>
        
        {/* White outline/halo for S to interlace cleanly */}
        <text
          x="42"
          y="95"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="80"
          fontWeight="bold"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          textAnchor="middle"
          textRendering="geometricPrecision"
        >
          S
        </text>
        
        {/* Letter S in the foreground */}
        <text
          x="42"
          y="95"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="80"
          fontWeight="bold"
          fill="#d31212"
          textAnchor="middle"
          textRendering="geometricPrecision"
        >
          S
        </text>
      </g>
    </svg>
  );
}
