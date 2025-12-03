import { ReactNode } from 'react';

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export default function Button({ children, className }: PropTypes) {
  return (
    <button
      className={`${className} bg-secondary px-6 py-4 uppercase font-semibold hover:bg-primary transition-all duration-300 ease`}
    >
      {children}
    </button>
  );
}
