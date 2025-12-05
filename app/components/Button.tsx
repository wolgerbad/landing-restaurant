import { ReactNode } from 'react';

type PropTypes = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: PropTypes) {
  return (
    <button
      className={`${className} w-fit bg-secondary px-6 py-4 uppercase font-semibold hover:bg-primary transition-all duration-300 ease`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
