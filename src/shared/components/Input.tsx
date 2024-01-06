import { twMerge } from 'tailwind-merge';

export default function Input({ className, disabled = false, ...rest }: IProps) {
  return (
    <input
      className={twMerge(
        'w-full rounded-2xl border bg-zinc-100 px-4 py-3 text-sm outline-zinc-800 placeholder:text-zinc-500',
        disabled ? '' : '',
        className
      )}
      disabled={disabled}
      {...rest}
    />
  );
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}
