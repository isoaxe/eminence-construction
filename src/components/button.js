import Link from 'next/link';

export default function Button({ text, link = '', id }) {
  return (
    <Link href={{ pathname: link, query: { id } }}>
      <button className="h-10 border border-secondary bg-secondary px-10 py-1 font-roboto text-lg text-primary md:border-white md:bg-transparent md:text-white md:hover:border-secondary md:hover:bg-secondary md:hover:text-primary">
        {text}
      </button>
    </Link>
  );
}
