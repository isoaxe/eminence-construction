import { useEffect, useRef } from 'react';
import Button from '@/components/button';
import { LeftButton, RightButton } from './arrow-buttons';

export default function ServicesHeading() {
  const services = useRef(null);

  const clickLeft = () => (services.current.scrollLeft -= 400);
  const clickRight = () => (services.current.scrollLeft += 400);

  useEffect(() => {
    services.current = document.getElementById('services');
  }, []);

  return (
    <div className="mb-10 mt-20 flex w-full max-w-410 items-center px-9 md:mb-14 md:mt-80">
      <h2 className="text-4xl font-normal md:mr-10 md:whitespace-nowrap md:text-6xl md:leading-none lg:text-[5.375rem]">
        Our services
      </h2>
      <div className="hidden w-full justify-between md:flex">
        <Button text="View portfolio" link="/projects" />
        <div className="flex">
          <LeftButton onClick={clickLeft} />
          <RightButton onClick={clickRight} />
        </div>
      </div>
    </div>
  );
}
