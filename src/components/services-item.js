import Image from 'next/image';
import Link from 'next/link';

export default function ServicesItem({ heading, paragraph, photoUrl }) {
  return (
    <div className="mr-5 flex w-fit flex-col transition-[opacity] duration-500 md:mr-4 md:flex-col-reverse md:group-hover:opacity-0">
      <h5 className="text-3xl md:mt-8 md:text-4xl">{heading}</h5>
      <Link href="/projects">
        <button className="my-5 h-10 border px-10 py-1 font-roboto text-xl md:hidden">
          View projects
        </button>
      </Link>
      <div className="relative h-80 w-80 md:h-[31rem] md:w-96">
        <Image
          src={photoUrl}
          alt="One of the services on offer by Eminence Construction."
          fill
          className="object-cover"
          sizes="(max-width: 767px) 20rem, 24rem"
        />
      </div>
      <p className="mt-5 w-80 leading-tight md:hidden">{paragraph}</p>
    </div>
  );
}
