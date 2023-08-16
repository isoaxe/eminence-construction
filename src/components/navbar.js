import { useState } from 'react';
import Link from 'next/link';
import { Fade as Hamburger } from 'hamburger-react';
import Socials from './socials';
import Logo from './logo';
import MobileNavbar from './navbar-mobile';
import NavLinks from './nav-links';

export default function Navbar({ contactRef }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative z-30 m-auto flex max-w-410 flex-row justify-between px-9 pt-6 ${
          isOpen ? 'bg-primary' : ''
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between font-roboto md:items-end md:justify-start">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:flex">
            <NavLinks contactRef={contactRef} />
          </div>
          {/* Hide hamburger menu on large screens. */}
          <div className="md:hidden">
            <Hamburger
              size={38}
              distance="sm"
              toggled={isOpen}
              toggle={setOpen}
              label="Menu button for smaller screens"
            />
          </div>
        </div>
        {/* Hide socials on small screens. */}
        <div className="ml-8 hidden items-end md:flex">
          <Socials />
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <MobileNavbar contactRef={contactRef} />
      </div>
    </>
  );
}
