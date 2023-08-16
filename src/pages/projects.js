import Head from 'next/head';
import Layout from '@/components/layout';
import ProjectsSection from '@/components/projects-section';
import { REMOTE_API_URL, ROOT_URL } from '@/util/constants';
import { removeMeta } from '@/util/helpers';

export default function Projects({ layout, projectsPage, projects }) {
  return (
    <Layout layout={layout}>
      <Head>
        <title>Projects | Eminence</title>
        <meta
          name="description"
          content="The projects page showing a carousel for each project. Each carousel displays six images at a time."
        />
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[85rem] flex-col px-9">
          <h2 className="mt-28 max-w-3xl text-4xl font-normal md:mt-40 md:text-6xl lg:text-[5.375rem]/tight">
            {projectsPage.heading}
          </h2>
          <p className="mb-40 mt-10 max-w-5xl self-end text-2xl md:mb-32 md:mt-20 md:text-2xl/relaxed lg:text-3xl/relaxed">
            {projectsPage.paragraph}
          </p>
          <ul className="flex flex-col">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectsSection
                  name={project.name}
                  photoUrls={project.projectPhotoUrls}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
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

  const projectsPageUrl = REMOTE_API_URL + 'projects-page';
  const projectsPageRes = await fetch(projectsPageUrl, options);
  const projectsPageJson = await projectsPageRes.json();
  const projectsPage = projectsPageJson?.data?.attributes;
  removeMeta(projectsPage);

  const projectsUrl = REMOTE_API_URL + 'projects?populate=*';
  const projectsRes = await fetch(projectsUrl, options);
  const projectsJson = await projectsRes.json();
  const projectData = projectsJson?.data;
  const projects = [];
  projectData.forEach((item) => {
    const project = { id: item?.id, name: item?.attributes?.name };
    const projectPhotoUrls = [];
    item?.attributes?.projectsPagePhotos?.data?.forEach((photoData) => {
      const photoUrl = ROOT_URL + photoData.attributes?.url;
      projectPhotoUrls.push(photoUrl);
    });
    project.projectPhotoUrls = projectPhotoUrls;
    projects.push(project);
  });

  return { props: { layout, projectsPage, projects } };
}
