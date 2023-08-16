import { TfiTwitterAlt, TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { INSTAGRAM, TWITTER, FACEBOOK, LINKEDIN } from '@/util/constants';

export default function ContactDetails({ layout }) {
  return (
    <div className="mt-6 font-roboto md:pl-6 md:text-3xl">
      <div className="mb-10 flex h-fit w-60 flex-row items-center justify-between">
        <Link href={INSTAGRAM}>
          <FaInstagram size={40} />
        </Link>
        <Link href={TWITTER}>
          <TfiTwitterAlt size={37} />
        </Link>
        <Link href={FACEBOOK}>
          <TfiFacebook size={31} />
        </Link>
        <Link href={LINKEDIN}>
          <TfiLinkedin size={35} />
        </Link>
      </div>
      <div className="w-fit">
        <p className="mb-5 md:mb-10">{layout.contactPhone}</p>
        <p className="mb-5 md:mb-10">{layout.contactEmail}</p>
        <p className="md:mb-2">{layout.contactAddress1}</p>
        <p className="md:mb-2">{layout.contactAddress2}</p>
        <p className="md:mb-2">{layout.contactAddress3}</p>
      </div>
    </div>
  );
}
