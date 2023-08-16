export default function ProjectSectionText({ text }) {
  const { heading, paragraph, bulletList } = text;
  const bullets = [];
  if (bulletList) {
    delete bulletList.id;
    Object.values(bulletList)?.forEach((bullet) =>
      bullet ? bullets.push(bullet) : null
    );
  }

  const listItem = (bulletText, idx) => (
    <li key={idx} className="flex flex-row items-center pb-2">
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></span>
      <p>{bulletText}</p>
    </li>
  );

  return (
    <div className="md:ml-6 lg:ml-14 2xl:mr-24">
      <div className="max-w-md md:mb-0">
        <h3 className="mb-5 text-4xl md:mb-10 md:text-5xl">{heading}</h3>
        <p className="mb-5 md:mb-10 md:text-xl/relaxed">{paragraph}</p>
        <ul>{bullets?.map((str, idx) => listItem(str, idx))}</ul>
      </div>
    </div>
  );
}
