import Image from 'next/image';
import Button from './button';
import { makeKebab } from '@/util/helpers';

export default function HomeProjectsItem({ name, paragraph, photoUrl }) {
  const id = makeKebab(name);

  return (
    <div className="pr-5 md:w-full md:pb-10 md:pr-4">
      <div className="relative h-80 w-80 md:h-[31rem] md:w-full">
        <Image
          src={photoUrl}
          alt="Projects undertaken by Eminence Construction."
          fill
          className="object-cover"
          sizes="(max-width: 767px) 20rem, (max-width: 1535px) 25vw, 24rem"
        />
        <div className="group absolute bottom-0 hidden h-full w-full p-2 opacity-80 md:flex md:flex-col md:justify-between md:text-center md:hover:bg-primary xl:px-10 xl:py-6">
          <h6 className="hidden self-center overflow-y-auto text-2xl md:max-h-32 md:group-hover:flex lg:max-h-24">
            {name}
          </h6>
          <p className="hidden overflow-y-auto text-xl md:max-h-80 md:group-hover:flex lg:max-h-72 xl:max-h-64">
            {paragraph}
          </p>
          <div className="hidden self-center lg:group-hover:flex">
            <Button text="View portfolio" link="/project" id={id} />
          </div>
        </div>
      </div>
      <h6 className="mt-5 text-lg md:hidden">{name}</h6>
      <p className="mt-5 md:hidden">{paragraph}</p>
    </div>
  );
}
