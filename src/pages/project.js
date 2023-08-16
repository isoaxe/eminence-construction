import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import qs from 'qs';
import Layout from '@/components/layout';
import { ArrowLeft } from '@/components/arrows';
import ProjectSectionImages from '@/components/project-section-images';
import ProjectSectionText from '@/components/project-section-text';
import { REMOTE_API_URL, ROOT_URL } from '@/util/constants';
import { removeMeta } from '@/util/helpers';
import { makeKebab } from '@/util/helpers';

export default function Project({ layout, projects }) {
  const router = useRouter();
  const projectId = router.query.id;
  const project = projects.find((item) => makeKebab(item.name) === projectId);

  const section = (sectionData, index) => (
    <li
      key={index}
      className="mb-20 md:mb-48 md:flex md:flex-row md:items-center md:justify-between"
    >
      <ProjectSectionImages photoUrls={sectionData.photoUrls} />
      <ProjectSectionText text={sectionData} />
    </li>
  );

  return (
    <Layout layout={layout}>
      <Head>
        <title>{`${project?.name ?? 'Project'} | Eminence`}</title>
        <meta
          name="description"
          content="The project page gives a more in-depth look at a selected project."
        />
      </Head>
      <div className="relative flex flex-col items-center">
        <div className="absolute ml-4 h-full w-1 self-start bg-white opacity-40 lg:self-center"></div>
        <span className="fixed top-[50vh] ml-2.5 h-4 w-4 self-start rounded-full bg-white lg:ml-4 lg:h-8 lg:w-8 lg:self-center"></span>
        <div className="z-10 flex w-full max-w-410 flex-col bg-primary px-9 pt-20 md:flex-row md:pt-32">
          <div className="-ml-8 md:ml-0">
            <ArrowLeft onClick={() => router.push('/projects')} />
          </div>
          <h2 className="mb-10 mt-10 text-4xl font-normal md:mt-28 md:text-6xl lg:text-[5.375rem]">
            {project?.name}
          </h2>
          <p className="max-w-2xl text-xl md:mb-24 md:ml-6 md:mt-28 md:text-3xl/relaxed 2xl:ml-56">
            {project?.paragraph}
          </p>
        </div>
        <div className="flex w-full max-w-410 flex-col pl-9 md:pr-9">
          <div className="absolute z-10 -ml-9 h-48 w-full bg-gradient-to-t from-transparent to-primary"></div>
          <ul className="mt-48">
            {project?.ProjectSection?.map((sectionData, index) =>
              section(sectionData, index)
            )}
          </ul>
        </div>
        <div className="relative h-[38rem] w-full md:h-[45rem] xl:h-[65rem]">
          <Image
            src={project?.coverUrl}
            alt="A villa with a pool on a cloudless day."
            fill
            className="z-10 object-cover"
            sizes="100vw"
          />
          <div className="absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-b from-transparent to-primary"></div>
        </div>
        <div className="z-10 h-12 w-full bg-secondary md:h-24"></div>
        <div className="z-10 m-auto max-w-410 bg-primary px-9 xl:pl-24">
          <h2 className="mt-24 max-w-7xl text-4xl/tight font-normal md:mt-48 md:text-6xl/tight xl:text-[5.375rem]/tight">
            {project?.reviewHeading}
          </h2>
          <p className="mt-8 max-w-5xl text-2xl/tight md:mt-10 md:text-4xl/normal">
            „{project?.reviewParagraph}”
          </p>
          <p className="mb-28 mt-14 flex flex-row md:mb-52 md:mt-10 md:text-xl">
            - {project?.reviewerName}
          </p>
        </div>
      </div>
    </Layout>
  );
}

const query = qs.stringify(
  {
    populate: {
      ProjectSection: {
        populate: '*',
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);

export async function getStaticProps() {
  const token = process.env.NEXT_PUBLIC_STRAPI_REMOTE_TOKEN;
  const options = { headers: { authorization: `Bearer ${token}` } };

  const layoutUrl = REMOTE_API_URL + 'layout?populate=*';
  const layoutRes = await fetch(layoutUrl, options);
  const layoutJson = await layoutRes.json();
  const layout = layoutJson?.data?.attributes;
  removeMeta(layout);

  const projectsUrl = REMOTE_API_URL + 'projects?' + query;
  const projectsRes = await fetch(projectsUrl, options);
  const projectsJson = await projectsRes.json();
  const projectData = projectsJson?.data;
  const projects = projectData.map((item) => {
    const project = removeMeta(item.attributes);
    project.id = item.id;
    project.ProjectSection.forEach((section) => {
      const photoUrls = [];
      section.photos.data.forEach((photoData) => {
        const photoUrl = ROOT_URL + photoData?.attributes?.url;
        photoUrls.push(photoUrl);
      });
      section.photoUrls = photoUrls;
      delete section.photos;
    });
    return project;
  });

  // Not possible to get cover photo URL in same query as others above.
  const coverUrl =
    REMOTE_API_URL + 'projects?fields[0]=cover&populate[0]=cover';
  const coverRes = await fetch(coverUrl, options);
  const coverJson = await coverRes.json();
  const coverUrls = [];
  coverJson?.data.forEach((coverData) => {
    const coverUrl =
      ROOT_URL + coverData?.attributes?.cover?.data?.attributes?.url;
    coverUrls.push(coverUrl);
  });

  projects.map((project, index) => (project.coverUrl = coverUrls[index]));

  return { props: { layout, projects } };
}
