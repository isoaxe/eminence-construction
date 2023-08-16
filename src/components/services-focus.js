import { useState } from 'react';
import Image from 'next/image';
import Button from './button';
import { ArrowLeft, ArrowRight } from './arrows';

/* This more detailed view pops up on larger screens when a services item is hovered. */
export default function ServicesFocus({ services }) {
  const [id, setId] = useState(0);

  const numServices = services.length;

  function handleLeftClick() {
    id === 0 ? setId(numServices - 1) : setId(id - 1);
  }

  function handleRightClick() {
    id === numServices - 1 ? setId(0) : setId(id + 1);
  }

  return (
    <div className="flex h-full w-full max-w-410 items-center justify-center">
      <ArrowLeft onClick={handleLeftClick} />
      <div className="relative mr-4 h-[31rem] w-[31rem] xl:mr-28">
        <Image
          src={services[id].photoUrl}
          alt="One of the services on offer by Eminence Construction."
          fill
          className="object-cover"
          sizes="(max-width: 767px) 0vw, 31rem"
        />
      </div>
      <div className="flex w-96 min-w-[13rem] flex-col">
        <h5 className="mb-8 text-4xl">{services[id].heading}</h5>
        <p className="mb-8 text-xl">{services[id].paragraph}</p>
        <Button text="View portfolio" link="/projects" />
      </div>
      <ArrowRight onClick={handleRightClick} />
    </div>
  );
}
