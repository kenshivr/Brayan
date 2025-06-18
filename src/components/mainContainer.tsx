import cn from '../services/clsx';
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
        'h-max w-screen bg-darkBrown',
        className
      )}
    >
      {children}
    </div>
  );
};