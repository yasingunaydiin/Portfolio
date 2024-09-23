import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';
export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/25 after:pointer-events-none p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

/* If issues happen with card, just remove <Card> and just copy and paste the card code in "Projects.tsx" */
