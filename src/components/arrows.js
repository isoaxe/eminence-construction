export function ArrowLeft({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-44 pl-8 transition-[padding] duration-700 hover:cursor-pointer hover:pl-0 hover:text-secondary hover:duration-700"
    >
      {arrowLeft}
    </div>
  );
}

export function ArrowRight({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-44 transition-[padding] duration-700 hover:cursor-pointer hover:pl-8 hover:text-secondary hover:duration-700"
    >
      {arrowRight}
    </div>
  );
}

const arrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="24 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="h-12 w-36"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.75 -1.75L3 12m0 0l16.75 16.75M61 12H3"
    />
  </svg>
);

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="24 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="h-12 w-36"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M57.25 -1.75L71 12m0 0l-23.75 23.75M71 12H3"
    />
  </svg>
);
