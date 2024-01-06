import { LuLayoutGrid, LuUserCircle2 } from 'react-icons/lu';
import Button from '@/shared/components/Button';
import Navbar from '@/shared/components/Navbar';
import NavbarLink from '@/shared/components/NavbarLink';
import useCurrentUser from '@/shared/hooks/useCurrentUser';

export default function HomeNavbar() {
  const user = useCurrentUser();

  return (
    <>
      <div className="relative h-1 bg-white bg-gradient-to-r from-cyan-500 via-rose-500 via-30% to-orange-400" />
      <Navbar
        guestLinks={
          <>
            <NavbarLink to="/" text="Home" activeClassName="text-zinc-800" />
            <NavbarLink to="/test" activeClassName="text-zinc-800" text="Test" />
          </>
        }
        logoImgSrc="/static/logo.png"
        logoImgAlt="Packlify Logo"
        logoLink="/"
        controlLinks={
          user ? (
            <>
              <a href="/dashboard">
                <Button variant="primary" text="Dashboard" className="mr-2" icon={LuLayoutGrid} />
              </a>
              <a href="/profile">
                <Button variant="tertiary" text={user.email} icon={LuUserCircle2} />
              </a>
            </>
          ) : (
            <>
              <a href="/signup">
                <Button variant="primary" text="Create account" className="mr-2" />
              </a>
              <a href="/login">
                <Button variant="tertiary" text="Login" />
              </a>
            </>
          )
        }
        navbarClassName="bg-white h-20 px-8"
      />
    </>
  );
}
