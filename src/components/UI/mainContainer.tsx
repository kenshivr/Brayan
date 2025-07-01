import cn from '@src/services/clsx';
import { type ReactNode } from 'react';

export default function MainContainer({
  children,
  className = ''
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out',
        'h-screen w-screen bg-darkBrown overflow-y-auto',
        className
      )}
    >
      {children}
    </div>
  );
};