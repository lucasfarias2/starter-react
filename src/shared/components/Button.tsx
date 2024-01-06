import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({
  text,
  className,
  size = 'md',
  variant = 'primary',
  icon: Icon,
  iconClassName,
  ...rest
}: IProps) {
  let mainClassName = 'bg-zinc-800 text-white hover:opacity-75';
  let sizeClassName = 'h-10 px-4';
  let defaultIconClassName = 'text-xl';

  if (variant === 'secondary') {
    mainClassName = 'bg-gray-100 text-zinc-800 hover:opacity-60';
  }

  if (variant === 'tertiary') {
    mainClassName = 'bg-white text-zinc-800 hover:bg-zinc-100 border';
  }

  if (variant === 'dark') {
    mainClassName = 'text-zinc-100 bg-black hover:opacity-75';
  }

  if (variant === 'darkGhost') {
    mainClassName = 'text-zinc-100 hover:opacity-75';
  }

  if (variant === 'darkSecondary') {
    mainClassName = 'text-zinc-400 hover:border-zinc-800 border border-transparent hover:text-zinc-300';
  }

  if (size === 'sm') {
    sizeClassName = 'h-8 text-xs px-4';
    defaultIconClassName = 'text-lg';
  }

  if (size === 'xs') {
    sizeClassName = 'h-6 text-[11px] px-2 transition duration-300 ease-in-out';
    defaultIconClassName = 'text-base';
  }

  return (
    <button
      className={twMerge(
        mainClassName,
        'flex items-center justify-center rounded-2xl text-sm font-medium ',
        sizeClassName,
        className
      )}
      {...rest}
    >
      {Icon && <Icon className={twMerge(defaultIconClassName, 'mr-2', iconClassName)} />}
      {text}
    </button>
  );
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'darkGhost' | 'darkSecondary';
  size?: 'xs' | 'sm' | 'md';
  icon?: React.ComponentType<IComponent>;
  iconClassName?: string;
  text: string;
}
