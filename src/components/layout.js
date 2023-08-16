import { useRef } from 'react';
import ContactSection from './contact-section';
import Navbar from './navbar';

export default function Layout({ children, layout }) {
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-primary">
      <div className="m-auto">
        <div className="invisible relative z-30 m-auto h-0 max-w-410 bg-[#506D93] text-xl md:visible md:py-6">
          <p className="flex h-full items-center justify-center">
            {layout.header}
          </p>
        </div>
        <Navbar contactRef={contactRef} />
        {children}
        <ContactSection contactRef={contactRef} layout={layout} />
        <div className="m-auto max-w-410 bg-white text-sm text-primary">
          <p className="flex h-full items-center justify-center px-9 py-5 text-center">
            {layout.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
