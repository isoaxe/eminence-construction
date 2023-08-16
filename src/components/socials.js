import { TfiTwitterAlt, TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { INSTAGRAM, TWITTER, FACEBOOK, LINKEDIN } from '@/util/constants';

export default function Socials() {
  return (
    <div className="flex h-52 flex-col justify-between md:h-fit md:w-56 md:flex-row md:items-center">
      <Link href={INSTAGRAM}>
        <FaInstagram size={30} />
      </Link>
      <Link href={TWITTER}>
        <TfiTwitterAlt size={28} />
      </Link>
      <Link href={FACEBOOK}>
        <TfiFacebook size={23} />
      </Link>
      <Link href={LINKEDIN}>
        <TfiLinkedin size={26} />
      </Link>
    </div>
  );
}
