import Image from 'next/image';

export default function AboutOwners({ about }) {
  return (
    <div className="mt-24 w-full max-w-410 p-9 md:mt-48">
      <h2 className="mb-16 text-4xl font-normal md:mb-20 md:ml-16 md:text-6xl lg:text-[5.375rem]">
        {about.ownersTitle}
      </h2>
      <div className="mb-24 flex flex-col items-end justify-between md:mb-52 md:flex-row xl:mr-10 2xl:mr-32">
        <div className="relative h-[40rem] w-full max-w-2xl md:h-[53rem]">
          <Image
            src={about.ownerPhoto1Url}
            alt="A black and white photo of a man in a suit with arms crossed."
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 65vw, 42rem"
          />
          <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>
        <div className="mt-10 md:ml-10 md:mt-0">
          <h3 className="mb-5 text-4xl md:mb-8 md:text-5xl">
            {about.ownerName1}
          </h3>
          <p className="min-w-[20rem] text-xl/relaxed md:max-w-lg">
            {about.ownerBio1}
          </p>
        </div>
      </div>
      <div className="mb-24 flex flex-col items-center justify-between md:mb-52 md:flex-row-reverse xl:ml-10 2xl:ml-32">
        <div className="relative h-[40rem] w-full max-w-2xl md:h-[53rem]">
          <Image
            src={about.ownerPhoto2Url}
            alt="A black and white photo of a woman in a business suit."
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 65vw, 42rem"
          />
          <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>
        <div className="mt-10 md:mr-10 md:mt-0">
          <h3 className="mb-5 text-4xl md:mb-8 md:text-5xl">
            {about.ownerName2}
          </h3>
          <p className="min-w-[20rem] text-xl/relaxed md:max-w-lg">
            {about.ownerBio2}
          </p>
        </div>
      </div>
      <div className="mb-24 flex flex-col items-start justify-between md:mb-52 md:flex-row xl:mr-10 2xl:mr-32">
        <div className="relative h-[40rem] w-full max-w-2xl md:h-[53rem]">
          <Image
            src={about.ownerPhoto3Url}
            alt="A black and white photo of a man in a suit with arms crossed."
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 65vw, 42rem"
          />
          <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>
        <div className="mt-10 md:ml-10 md:mt-0">
          <h3 className="mb-5 text-4xl md:mb-8 md:text-5xl">
            {about.ownerName3}
          </h3>
          <p className="min-w-[20rem] text-xl/relaxed md:max-w-lg">
            {about.ownerBio3}
          </p>
        </div>
      </div>
    </div>
  );
}
