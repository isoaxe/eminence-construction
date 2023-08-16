import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export function LeftButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="mr-4 flex h-10 w-10 items-center justify-center border hover:cursor-pointer hover:border-secondary hover:bg-secondary hover:text-primary"
    >
      <IoIosArrowBack size={36} />
    </div>
  );
}

export function RightButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center border hover:cursor-pointer hover:border-secondary hover:bg-secondary hover:text-primary"
    >
      <IoIosArrowForward size={36} />
    </div>
  );
}

export function UpButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center border hover:cursor-pointer hover:border-secondary hover:bg-secondary hover:text-primary"
    >
      <IoIosArrowUp size={36} />
    </div>
  );
}

export function DownButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center border hover:cursor-pointer hover:border-secondary hover:bg-secondary hover:text-primary"
    >
      <IoIosArrowDown size={36} />
    </div>
  );
}
