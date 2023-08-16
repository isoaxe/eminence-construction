import Image from 'next/image';
import logo from 'public/eminence-logo.png';

export default function Logo() {
  return (
    <div className="mr-6 flex flex-row items-center">
      <Image
        src={logo}
        alt="Eminence construction company logo."
        width={50}
        height={50}
      />
      <div className="ml-3 w-28">
        <h6 className="font-redhat font-medium leading-5">
          Eminence Construction
        </h6>
      </div>
    </div>
  );
}
