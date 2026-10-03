import React from 'react';

interface OpayIconProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const OpayIcon: React.FC<OpayIconProps> = ({
  className = '',
  size = 28,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 ${className}`}>
      {/* Official-style OPay Icon Badge: Vibrant Emerald Green Circle with white rounded 'O' emblem */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        {/* Background rounded squircle / circle */}
        <rect width="48" height="48" rx="24" fill="#14B866" />
        
        {/* OPay Characteristic Geometric 'O' with inner circular opening and subtle bottom accent */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z"
          fill="#FFFFFF"
        />
        {/* Inner dynamic dot/accent in center */}
        <circle cx="24" cy="24" r="3.2" fill="#14B866" />
        <circle cx="24" cy="24" r="1.6" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {showText && (
        <span className="font-bold tracking-tight text-white flex items-baseline">
          <span className="text-[#14B866] font-extrabold text-lg leading-none">O</span>
          <span className="text-white text-base font-semibold leading-none">Pay</span>
        </span>
      )}
    </div>
  );
};
