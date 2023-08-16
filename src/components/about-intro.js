import Image from 'next/image';

export default function AboutIntro({ about }) {
  return (
    <>
      <div className="flex w-full max-w-410 flex-col px-9 md:mt-48 md:flex-row md:items-center md:justify-between">
        <div className="relative h-[26rem] w-full max-w-2xl">
          <Image
            src={about?.introPhoto1Url}
            alt="A drone shot of a villa with a pool."
            fill
            className="z-0 object-cover"
            sizes="42rem"
          />
        </div>
        <p className="mt-8 w-full text-lg/tight md:ml-8 md:mt-0 md:max-w-lg md:text-xl/relaxed 2xl:mr-20">
          {about?.introParagraph1}
        </p>
      </div>
      <div className="mb-28 mt-20 flex w-full max-w-410 flex-col-reverse px-9 md:mb-48 md:mt-24 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:mr-8 md:max-w-lg 2xl:ml-20">
          <h4 className="mt-5 text-4xl/tight md:mt-0">
            {about?.introHeading2}
          </h4>
          <p className="mt-5 text-lg/tight md:mt-10 md:text-xl/relaxed">
            {about?.introParagraph2}
          </p>
        </div>
        <div className="relative h-[26rem] w-full max-w-2xl md:h-[33rem]">
          <Image
            src={about?.introPhoto2Url}
            alt="An open-plan living room and kitchen with island."
            fill
            className="z-0 object-cover"
            sizes="42rem"
          />
        </div>
      </div>
    </>
  );
}
