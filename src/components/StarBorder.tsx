import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  innerClassName?: string;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  innerClassName = '',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-xl btn-tactile-base transition-all duration-180 ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px`,
        ...(rest as any).style
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          '--star-speed': speed
        } as React.CSSProperties}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
          '--star-speed': speed
        } as React.CSSProperties}
      ></div>
      <div className={`relative z-1 text-center text-[16px] rounded-[11px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.22),0_3px_0_rgba(0,0,0,0.24),0_6px_12px_rgba(0,0,0,0.14)] ${innerClassName || 'bg-gradient-to-b from-gray-900 via-[#0c0c0e] to-black border border-white/10 text-white py-[16px] px-[26px]'}`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
