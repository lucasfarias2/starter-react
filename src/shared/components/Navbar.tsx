import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { LuBookMarked, LuChevronLeft, LuHelpCircle, LuUserCircle2 } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import Button from '@/shared/components/Button';
import useCurrentUser from '@/shared/hooks/useCurrentUser';

export default function Navbar({
  showSubNavbar = false,
  navbarClassName,
  guestLinks,
  logoImgSrc,
  logoLink,
  logoImgAlt,
  controlLinks,
  logoClassName,
}: IProps) {
  const user = useCurrentUser();

  return (
    <>
      {showSubNavbar && (
        <div className="flex h-8 items-center justify-between bg-black px-4 text-[11px]">
          <div className="flex items-center">
            <a href="/">
              <Button variant="darkSecondary" text="Back to packlify.com" icon={LuChevronLeft} size="xs" />
            </a>
            <a href="/">
              <Button variant="darkSecondary" text="Shop in Pack" icon={FaCaretDown} size="xs" />
            </a>
          </div>
          <div className="flex items-center border-zinc-800">
            <a href="/help">
              <Button variant="darkSecondary" text="Help" icon={LuHelpCircle} size="xs" />
            </a>
            <a href="/docs">
              <Button variant="darkSecondary" text="Docs" icon={LuBookMarked} size="xs" />
            </a>
            <a href="/profile">
              <Button variant="dark" text={user?.email} className="" icon={LuUserCircle2} size="xs" />
            </a>
          </div>
        </div>
      )}
      <div
        className={twMerge('relative z-50 flex items-center justify-between border-b px-8 shadow-sm', navbarClassName)}
      >
        <div className="flex flex-wrap items-center">
          <a
            href={logoLink}
            className={twMerge('mr-4 transition duration-200 ease-in-out hover:scale-105', logoClassName)}
          >
            <img src={logoImgSrc} alt={logoImgAlt} className="h-8" />
          </a>
          <div className="pl-2 dark:border-zinc-700">{guestLinks}</div>
        </div>
        <div className="flex items-center">{controlLinks}</div>
      </div>
    </>
  );
}

interface IProps extends IComponent {
  navbarClassName?: string;
  guestLinks?: React.ReactNode;
  controlLinks: React.ReactNode;
  logoImgSrc: string;
  logoLink: string;
  logoImgAlt: string;
  showSubNavbar?: boolean;
  logoClassName?: string;
}
