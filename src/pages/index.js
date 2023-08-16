import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import Button from '@/components/button';
import ReadMore from '@/components/read-more';
import ContactLogo from '@/components/contact-logo';
import ServicesGroup from '@/components/services-group';
import ServicesHeading from '@/components/services-heading';
import HomeProjects from '@/components/home-projects';
import { removeMeta } from '@/util/helpers';
import { REMOTE_API_URL, ROOT_URL } from '@/util/constants';

export default function Home({ homepage, layout, services, projects }) {
  return (
    <>
      <div className="absolute h-1/2 w-full md:right-0 md:h-screen md:w-1/2">
        <Image
          src={homepage.coverUrl}
          alt="A villa with a pool on a cloudless day."
          fill
          className="z-0 object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <div className="absolute z-10 h-full w-full bg-primary opacity-60"></div>
        <div className="absolute bottom-0 z-10 h-1/2 w-full border-b border-zinc-800 bg-gradient-to-b from-transparent to-primary md:border-none"></div>
      </div>
      <Layout layout={layout}>
        <Head>
          <title>Home | Eminence</title>
          <meta
            name="description"
            content="The homepage showcasing services, projects and a small about section"
          />
        </Head>
        <div className="relative z-20 flex h-fit flex-col items-center">
          <div className="flex w-full max-w-410 flex-col items-center justify-around px-9 md:h-[calc(100vh-7.625rem)]">
            <div className="md:h-1/5 md:w-40">
              {/* div just for flexbox spacing on desktop */}
            </div>
            <div className="flex h-[calc(50vh-3.5rem)] flex-col items-center justify-end md:h-[40%] md:justify-around">
              <h1 className="mb-10 max-w-sm text-center text-5xl/tight font-normal md:mb-0 md:max-w-[46rem] md:text-8xl/tight">
                {homepage.heading}
              </h1>
              <Button text="View portfolio" link="/projects" />
            </div>
            <div className="mt-24 w-full md:mt-0 md:flex md:flex-row md:justify-between">
              <ReadMore photo={homepage.coverUrl} text={homepage.readMore} />
              <div className="hidden md:flex md:items-end">
                <ContactLogo />
              </div>
            </div>
          </div>
          <ServicesHeading />
          <ServicesGroup services={services} />
          <div className="my-20 ml-0 self-start pl-9 md:hidden">
            <Button text="View portfolio" link="/projects" />
          </div>
          <div className="h-12 w-full bg-secondary md:h-24"></div>
          <div className="w-full bg-white px-9 text-center">
            <h2 className="mb-10 mt-36 text-4xl font-normal text-secondary md:mt-40 md:text-[5.375rem]">
              About us
            </h2>
            <p className="m-auto mb-10 text-[1.75rem] font-normal text-primary md:max-w-[71rem] md:text-[2.8125rem]">
              {homepage.about}
            </p>
            <div className="mb-36 md:mb-40">
              <Link href="/about">
                <button className="h-10 border border-secondary bg-secondary px-10 py-1 font-roboto text-lg text-primary md:border-primary md:bg-transparent md:text-primary md:hover:border-secondary md:hover:bg-secondary">
                  More about us
                </button>
              </Link>
            </div>
          </div>
          <div className="flex w-full max-w-410 flex-col">
            <h2 className="mt-24 self-end px-9 text-4xl font-normal leading-tight md:mx-0 md:mt-56 md:max-w-5xl md:text-[5.375rem]">
              {homepage.projectHeading}
            </h2>
            <p className="mb-24 mt-10 px-9 text-xl md:mx-0 md:my-40 md:max-w-5xl md:text-3xl md:leading-relaxed xl:ml-20">
              {homepage.projectText}
            </p>
          </div>
          <HomeProjects projects={projects} />
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

  const homeUrl = REMOTE_API_URL + 'homepage?populate=*';
  const homeRes = await fetch(homeUrl, options);
  const homeJson = await homeRes.json();
  const homepage = homeJson?.data?.attributes;
  removeMeta(homepage);
  const coverUrl = ROOT_URL + homepage?.cover?.data?.attributes?.url;
  homepage.coverUrl = coverUrl;
  delete homepage.cover; // just keep photo url and remove everything else

  const servicesUrl = REMOTE_API_URL + 'home-services?populate=*';
  const servicesRes = await fetch(servicesUrl, options);
  const servicesJson = await servicesRes.json();
  const serviceData = servicesJson?.data;
  const services = serviceData.map((item) => {
    const { heading, paragraph, photo } = item?.attributes;
    const service = { id: item.id, heading, paragraph };
    const photoUrl = ROOT_URL + photo?.data?.attributes?.url;
    service.photoUrl = photoUrl;
    return service;
  });

  const projectsUrl = REMOTE_API_URL + 'projects?populate[0]=cover';
  const projectsRes = await fetch(projectsUrl, options);
  const projectsJson = await projectsRes.json();
  const projectData = projectsJson?.data;
  const projects = projectData.map((item) => {
    const { id } = item;
    const { name, paragraph } = item.attributes;
    const project = { id, name, paragraph };
    project.photoUrl = ROOT_URL + item.attributes?.cover?.data?.attributes?.url;
    return project;
  });

  return { props: { layout, homepage, services, projects } };
}
