import { CiHeadphones } from 'react-icons/ci';

export default function ContactLogo() {
  function handleClick() {
    const contact = document.getElementById('contact');
    contact.scrollIntoView();
  }

  return (
    <div
      onClick={handleClick}
      className="group flex w-fit flex-row items-center hover:cursor-pointer"
    >
      <h6 className="mr-4 text-xl group-hover:text-secondary">Contact us</h6>
      <div className="border border-white p-1 group-hover:border-secondary group-hover:bg-secondary group-hover:text-primary">
        <CiHeadphones size={40} />
      </div>
    </div>
  );
}
