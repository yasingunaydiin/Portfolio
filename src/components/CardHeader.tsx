import { twMerge } from 'tailwind-merge';

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <div className="items-center">
        <h3 className="text-3xl">{title}</h3>
      </div>
      <p className="text-sm text-black/80 mt-2">{description}</p>
    </div>
  );
};
