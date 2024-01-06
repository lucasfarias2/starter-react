import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { DarkModeContext } from '@/shared/context/DarkModeContext';

export default function Layout({ children, navbar, footer }: ILayoutProps) {
  const darkMode = useContext(DarkModeContext);

  return (
    <>
      {navbar && <nav>{navbar}</nav>}
      <main className={twMerge(darkMode && 'dark')}>{children}</main>
      {footer && <footer>{footer}</footer>}
    </>
  );
}

interface ILayoutProps extends IComponent {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
}
