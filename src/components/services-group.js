import ServicesItem from '@/components/services-item';
import ServicesFocus from './services-focus';

export default function ServicesGroup({ services }) {
  const serviceItems = services.map((item) => (
    <li key={item.id}>
      <ServicesItem
        heading={item.heading}
        paragraph={item.paragraph}
        photoUrl={item.photoUrl}
      />
    </li>
  ));

  return (
    <div className="group relative h-fit w-full md:mb-56">
      <div className="absolute z-10 hidden h-full w-full bg-primary opacity-0 duration-500 md:flex md:items-center md:justify-center md:group-hover:opacity-100 md:group-hover:transition-[opacity] md:group-hover:duration-500">
        <ServicesFocus services={services} />
      </div>
      <ul
        id="services"
        className="relative flex overflow-auto scroll-smooth pl-9 md:hover:overflow-hidden max:ml-[calc(50%-50.125rem)] max:w-[calc(50%+50.125rem)]"
      >
        {serviceItems}
      </ul>
    </div>
  );
}
