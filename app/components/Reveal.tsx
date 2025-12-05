import { ReactNode, useEffect, useRef } from 'react';

type PropTypes = {
  children: ReactNode;
};

export default function Reveal({ children }: PropTypes) {
  const ref = useRef<null | Element>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
