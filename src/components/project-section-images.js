import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProjectSectionImages({ photoUrls }) {
  const [thumbnails, setThumbnails] = useState(null);
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    // For larger screens.
    const thumbImgs = photoUrls.map((photoUrl, index) => (
      <li
        key={index}
        onClick={() => setActiveId(index)}
        className="group hidden h-36 w-[5.5rem] items-center justify-center px-2 py-6 transition-all duration-300 hover:cursor-pointer hover:px-0 hover:py-3 md:flex xl:h-48 xl:w-28"
      >
        <div className="relative h-28 w-[4.5rem] transition-all duration-300 group-hover:h-32 group-hover:w-20 xl:h-36 xl:w-24 xl:group-hover:h-[10.5rem] xl:group-hover:w-28">
          <Image
            src={photoUrl}
            alt="Inside the lake house."
            fill
            className="z-0 object-cover"
            sizes="(max-width: 767px) 20rem, 37rem"
          />
          {index !== activeId ? (
            <div className="absolute z-10 h-full w-full bg-primary opacity-70"></div>
          ) : null}
        </div>
      </li>
    ));
    setThumbnails(thumbImgs);
  }, [photoUrls, activeId]);

  return (
    <>
      {/* For larger screens. */}
      <div className="hidden md:block">
        <div className="relative h-[35rem] w-[28rem] max-w-xl xl:h-[46rem] xl:w-[37rem]">
          <Image
            src={photoUrls[activeId]}
            alt="Inside the lake house."
            fill
            className="z-0 object-cover"
            sizes="(max-width: 767px) 20rem, (max-width: 1279px) 28rem, 37rem"
          />
          <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>
        <ul className="flex h-48 flex-row">{thumbnails}</ul>
      </div>
      {/* For smaller screens. */}
      <div className="overflow-auto md:hidden">
        <ul className="mb-10 flex w-fit">
          {photoUrls.map((photoUrl, index) => (
            <li key={index} className="relative mr-5 h-80 w-80">
              <Image
                src={photoUrl}
                alt="Inside the lake house."
                fill
                className="object-cover"
                sizes="20rem"
              />
              <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-primary"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
