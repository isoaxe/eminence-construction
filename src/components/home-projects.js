import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from './arrows';
import HomeProjectsItem from './home-projects-item';
import Button from './button';

export default function HomeProjects({ projects }) {
  const [projectItems, setProjectItems] = useState(null);
  const [startIdx, setStartIdx] = useState(0); // index of first item in current set

  const placeholder = (
    <li className="hidden h-fit rounded-lg border opacity-20 md:mr-4 md:flex md:h-[31rem] md:w-[calc(25%-1rem)]"></li>
  );

  function addPlaceholders() {
    const isFullSet = projectItems.length % 6 === 0; // is items set multiple of 6?
    if (isFullSet) return; // prevent placeholders being added more than once

    // Add empty placeholder cards to project items so total is multiple of six.
    const numItemsShort = 6 - (projectItems.length % 6);
    const placeholders = new Array(numItemsShort).fill(placeholder);
    setProjectItems((existingItems) => [...existingItems, ...placeholders]);
  }

  function handleLeftClick() {
    const numItems = projectItems.length;
    if (startIdx < 6) setStartIdx(numItems + startIdx - 6);
    else setStartIdx(startIdx - 6);
  }

  function handleRightClick() {
    const numItems = projectItems.length;
    if (startIdx < numItems - 6) setStartIdx(startIdx + 6);
    else setStartIdx(0);
  }

  useEffect(() => {
    // Ideally always use a number of photos divisible by 6 so no placeholders are shown.
    const generateProjectItems = projects.map((item) => (
      <li className="md:w-1/4" key={item.id}>
        <HomeProjectsItem
          name={item.name}
          paragraph={item.paragraph}
          photoUrl={item.photoUrl}
        />
      </li>
    ));
    setProjectItems(generateProjectItems);
  }, [projects]);

  useEffect(() => {
    if (projectItems) addPlaceholders();
  });

  return (
    <div className="w-full max-w-410 pl-9 md:pr-5">
      <div className="relative md:h-[65rem] md:overflow-hidden">
        <div className="absolute z-10 hidden h-1/2 w-1/4 bg-primary md:flex md:items-center md:justify-center">
          <ArrowLeft onClick={handleLeftClick} />
        </div>
        <ul className="flex overflow-auto scroll-smooth md:w-full md:flex-wrap">
          {placeholder}
          {projectItems?.slice(startIdx)}
        </ul>
        <div className="absolute bottom-0 right-1 hidden h-1/2 w-1/4 bg-primary md:flex md:items-center md:justify-center">
          <ArrowRight onClick={handleRightClick} />
        </div>
      </div>
      <div className="mb-24 mt-10 flex justify-start md:mt-20 md:justify-center">
        <Button text="View projects" link="/projects" />
      </div>
    </div>
  );
}
