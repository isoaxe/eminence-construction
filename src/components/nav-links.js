import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks({ contactRef }) {
  const scrollToContact = () => contactRef.current?.scrollIntoView();

  const { pathname } = useRouter();

  return (
    <div className="flex h-40 w-80 flex-col justify-between md:h-fit md:flex-row lg:ml-20">
      <h6 className={pathname === '/projects' ? 'font-medium' : ''}>
        <Link href="/projects">Projects</Link>
      </h6>
      <h6 className={pathname === '/about' ? 'font-medium' : ''}>
        <Link href="/about">About us</Link>
      </h6>
      <h6 className="hover:cursor-pointer" onClick={scrollToContact}>
        Contact
      </h6>
    </div>
  );
}
