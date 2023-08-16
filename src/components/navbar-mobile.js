import ContactLogo from './contact-logo';
import NavLinks from './nav-links';
import Socials from './socials';

export default function MobileNavbar({ contactRef }) {
  return (
    <div className="absolute top-[81px] z-30 flex h-[calc(100vh-81px)] w-full flex-col justify-between bg-primary pl-9 pt-16">
      <NavLinks contactRef={contactRef} />
      <div className="mt-10">
        <Socials />
      </div>
      <div className="relative mb-6 mr-9 flex justify-end">
        <ContactLogo />
      </div>
    </div>
  );
}
