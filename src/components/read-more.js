import Link from 'next/link';
import Image from 'next/image';

export default function ReadMore({ photo, text }) {
  return (
    <Link href="/projects">
      <div className="group flex flex-col md:flex-row md:items-center md:opacity-20 hover:md:opacity-100">
        <div className="relative h-60 md:h-40 md:w-60">
          <Image
            src={photo}
            alt="A villa with a pool on a cloudless day."
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 15rem"
          />
        </div>
        <div className="mt-6 md:ml-12">
          <p className="mb-6 w-full text-xl md:w-80">{text}</p>
          <h5 className="-mb-5 font-normal">Read more</h5>
          <div className="md:duration-700 md:group-hover:ml-6 md:group-hover:transition-all md:group-hover:duration-700">
            {arrowRight}
          </div>
        </div>
      </div>
    </Link>
  );
}

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="24 0 24 24"
    strokeWidth={0.5}
    stroke="currentColor"
    className="h-12 w-32"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M57.25 8.25L61 12m0 0l-3.75 3.75M61 12H3"
    />
  </svg>
);
