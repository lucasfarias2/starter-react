import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function NavbarLink({ text, className, activeClassName, end, external = false, to, ...rest }: IProps) {
  if (external) {
    return (
      <a href={to} className={twMerge('mx-2 text-sm', 'text-zinc-400 hover:text-zinc-300')} {...rest}>
        {text}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        twMerge('mx-2 text-sm', isActive ? activeClassName : 'text-zinc-400 hover:text-zinc-300', className)
      }
      {...rest}
    >
      {text}
    </NavLink>
  );
}

interface IProps extends IComponent {
  activeClassName: string;
  to: string;
  text: string;
  external?: boolean;
  end?: boolean;
}
