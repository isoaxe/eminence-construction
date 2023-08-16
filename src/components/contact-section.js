import ContactDetails from './contact-details';
import ContactForm from './contact-form';

export default function ContactSection({ contactRef, layout }) {
  return (
    <div className="relative w-full border-t border-white border-opacity-20 bg-primary">
      <div
        id="contact"
        ref={contactRef}
        className="m-auto my-24 max-w-[85rem] px-9 md:mb-40 md:mt-48"
      >
        <h2 className="my-6 text-4xl font-normal md:text-[5.375rem] md:leading-tight">
          {layout.contactHeading}
        </h2>
        <div className="flex flex-col md:mt-24 md:flex-row md:justify-between">
          <div className="mb-24 md:mb-0">
            <ContactForm />
          </div>
          <ContactDetails layout={layout} />
        </div>
      </div>
    </div>
  );
}
