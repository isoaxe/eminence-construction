import { useState } from 'react';
import { LeftButton, RightButton } from './arrow-buttons';

export default function AboutReviews({ heading, reviews }) {
  const [id, setId] = useState(0);

  const numReviews = reviews.length;

  function handleLeftClick() {
    id === 0 ? setId(numReviews - 1) : setId(id - 1);
  }

  function handleRightClick() {
    id === numReviews - 1 ? setId(0) : setId(id + 1);
  }

  return (
    <div className="h-fit w-full bg-tertiary">
      <div className="m-auto max-w-410 px-9 xl:pl-24">
        <h2 className="mt-24 max-w-7xl text-4xl/tight font-normal md:mt-48 md:text-6xl/tight xl:text-[5.375rem]/tight">
          {heading}
        </h2>
        <p className="mt-8 max-w-5xl text-2xl/tight md:mt-10 md:text-4xl/normal">
          „{reviews[id].review}”
        </p>
        <p className="mb-12 mt-14 flex flex-row md:mb-24 md:mt-10 md:text-xl">
          - {reviews[id].reviewer}
        </p>
        <div className="mb-24 flex flex-row justify-end md:mb-20">
          <LeftButton onClick={handleLeftClick} />
          <RightButton onClick={handleRightClick} />
        </div>
      </div>
    </div>
  );
}
