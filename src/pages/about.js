import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout';
import ContactLogo from '@/components/contact-logo';
import AboutIntro from '@/components/about-intro';
import AboutReviews from '@/components/about-reviews';
import AboutOwners from '@/components/about-owners';
import { REMOTE_API_URL, ROOT_URL } from '@/util/constants';
import { removeMeta } from '@/util/helpers';

export default function About({ layout, about }) {
  const { reviewHeading, reviews } = about;

  return (
    <>
      <div className="absolute h-1/2 w-full md:right-0 md:h-screen md:w-1/2">
        <Image
          src={about?.mainCoverUrl}
          alt="An open-plan living room and kitchen island."
          fill
          className="z-0 object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <div className="absolute z-10 h-full w-full bg-primary opacity-60"></div>
        <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-primary"></div>
      </div>
      <Layout layout={layout}>
        <Head>
          <title>{`${about?.mainHeading ?? 'About'} | Eminence`}</title>
          <meta
            name="description"
            content="The about page gives information on Eminence Construction and it's owners. It also displays a carousel of customer reviews."
          />
        </Head>
        <div className="relative z-20 mt-[calc(50vh-2rem)] flex h-fit flex-col items-center md:mt-0">
          <div className="flex w-full max-w-410 flex-row items-center justify-between px-9 md:h-[calc(100vh-7.625rem)]">
            <div className="mb-36 flex flex-col md:mb-0 md:w-1/2 md:px-4 lg:px-14">
              <h2 className="mb-10 text-5xl font-normal md:mb-14 md:text-6xl lg:text-[5.375rem]">
                {about?.mainHeading}
              </h2>
              <p className="text-2xl md:text-2xl/relaxed lg:text-3xl/relaxed">
                {about?.mainParagraph}
              </p>
            </div>
            <div className="mb-20 hidden self-end md:flex">
              <ContactLogo />
            </div>
          </div>
          <AboutIntro about={about} />
          <AboutReviews heading={reviewHeading} reviews={reviews} />
          <div className="relative h-[75vh] w-full md:h-[85vh]">
            <Image
              src={about?.fullCoverUrl}
              alt="A bathroom with marble shower and free-standing tub."
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-primary"></div>
          </div>
          <AboutOwners about={about} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const token = process.env.NEXT_PUBLIC_STRAPI_REMOTE_TOKEN;
  const options = { headers: { authorization: `Bearer ${token}` } };

  const layoutUrl = REMOTE_API_URL + 'layout?populate=*';
  const layoutRes = await fetch(layoutUrl, options);
  const layoutJson = await layoutRes.json();
  const layout = layoutJson?.data?.attributes;
  removeMeta(layout);

  const aboutUrl = REMOTE_API_URL + 'about-page?populate=*';
  const aboutRes = await fetch(aboutUrl, options);
  const aboutJson = await aboutRes.json();
  const about = aboutJson?.data?.attributes;
  removeMeta(about);
  const photoNames = [
    'mainCover',
    'fullCover',
    'introPhoto1',
    'introPhoto2',
    'ownerPhoto1',
    'ownerPhoto2',
    'ownerPhoto3',
  ];
  photoNames.forEach((name) => {
    const photoUrl = ROOT_URL + about[name]?.data?.attributes?.url;
    about[`${name}Url`] = photoUrl;
    delete about[name];
  });

  return { props: { layout, about } };
}
