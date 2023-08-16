import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { makeKebab } from '@/util/helpers';
import Button from './button';
import { UpButton, DownButton } from './arrow-buttons';

export default function ProjectsSection({ name, photoUrls }) {
  const [projectPhotos, setProjectPhotos] = useState([]);
  const [startIdx, setStartIdx] = useState(0); // index of first item in current set
  const [projectId, setProjectId] = useState(''); // name prop in kebab-case

  const currentPage = 1 + startIdx / 6;
  const numPages = projectPhotos?.length / 6;

  const placeholder = (key) => (
    <li
      key={key}
      className="hidden h-fit rounded-lg border opacity-20 md:mr-4 md:flex md:h-[31rem] md:w-[calc(33.33%-1rem)]"
    ></li>
  );

  const addPlaceholders = useCallback(() => {
    const isFullSet = projectPhotos.length % 6 === 0; // is photos set multiple of 6?
    if (isFullSet) return; // prevent placeholders being added more than once.

    // Add empty placeholder cards to project items so total is multiple of six.
    const numItemsShort = 6 - (projectPhotos.length % 6);
    const empty = new Array(numItemsShort).fill(0);
    const placeholders = empty.map((_, i) => placeholder(100 + i));
    setProjectPhotos((existingItems) => [...existingItems, ...placeholders]);
  }, [projectPhotos.length]);

  function projectPhoto(photoUrl) {
    return (
      <div className="mb-5 mr-5 md:mb-4 md:mr-4">
        <div className="relative h-80 w-80 md:h-[31rem] md:w-full">
          <Image
            src={photoUrl}
            alt="A photo of one of the projects for display."
            fill
            className="object-cover"
            sizes="(max-width: 767px) 20rem, (max-width: 1535px) 32vw, 25rem"
          />
        </div>
      </div>
    );
  }

  function handleUpClick() {
    const numPhotos = projectPhotos.length;
    if (startIdx < 6) setStartIdx(numPhotos + startIdx - 6);
    else setStartIdx(startIdx - 6);
  }

  function handleDownClick() {
    const numPhotos = projectPhotos.length;
    if (startIdx < numPhotos - 6) setStartIdx(startIdx + 6);
    else setStartIdx(0);
  }

  useEffect(() => {
    // Ideally always use a number of photos divisible by 6 so no placeholders are shown.
    const generateProjectPhotos = photoUrls.map((photoUrl, index) => (
      <li className="md:w-1/3" key={index}>
        {projectPhoto(photoUrl)}
      </li>
    ));
    setProjectPhotos(generateProjectPhotos);
  }, [photoUrls]);

  useEffect(() => {
    if (projectPhotos) addPlaceholders();
  }, [projectPhotos, addPlaceholders]);

  useEffect(() => {
    const pid = makeKebab(name);
    setProjectId(pid);
  }, [name]);

  return (
    <div className="my-10 md:mb-24 md:mt-20">
      <div className="mb-10 flex flex-col md:flex-row">
        <h3 className="mb-5 text-[1.75rem] font-normal md:mb-0 md:mr-10 md:text-[2.8125rem]">
          {name}
        </h3>
        <div className="flex items-center">
          <Button text="View project" link="/project" id={projectId} />
        </div>
      </div>
      <div className="flex flex-row">
        <ul className="flex h-[43rem] w-full flex-col flex-wrap overflow-auto scroll-smooth md:h-[64rem] md:flex-row md:overflow-hidden">
          {projectPhotos?.slice(startIdx, startIdx + 6)}
        </ul>
        {numPages > 1 ? (
          <div className="hidden h-40 flex-col items-center justify-between self-center md:flex xl:ml-20">
            <UpButton onClick={handleUpClick} />
            <h6 className="text-xl">
              {currentPage}/{numPages}
            </h6>
            <DownButton onClick={handleDownClick} />
          </div>
        ) : (
          <div className="hidden h-40 w-10 md:flex xl:ml-20"></div>
        )}
      </div>
    </div>
  );
}
