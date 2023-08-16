import { useState, useEffect } from 'react';
import { BsCheck } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import Link from 'next/link';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ppAgreed, setPpAgreed] = useState(false); // privacy policy checkbox
  const [inputValid, setInputValid] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  // Just check that all fields have been entered for now.
  useEffect(() => {
    setInputValid(name && email && message && ppAgreed);
  }, [name, email, message, ppAgreed]);

  // Clear fields and show message after successful submission.
  useEffect(() => {
    if (state.succeeded) {
      alert('Your message was sent to Eminence Construction.');
      setName('');
      setEmail('');
      setMessage('');
      setPpAgreed(false);
    }
  }, [state.succeeded]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-[34rem] flex-col items-start"
    >
      <div className="mb-12 w-full">
        <label
          className={`relative pl-4 duration-300 focus-within:top-0 focus-within:duration-300 md:hover:top-0 md:hover:duration-300 ${
            name ? 'top-0' : 'top-7'
          }`}
        >
          Enter your name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`relative h-8 w-full border border-white border-opacity-50 bg-transparent pl-4 font-medium text-secondary outline outline-0 duration-300 focus:bottom-0 focus:border-opacity-100 focus:duration-300 md:hover:bottom-0 md:hover:border-opacity-100 md:hover:duration-300 ${
              name ? 'bottom-0' : 'bottom-7'
            }`}
          />
        </label>
      </div>
      <div className="mb-12 w-full">
        <label
          className={`relative pl-4 duration-300 focus-within:top-0 focus-within:duration-300 md:hover:top-0 md:hover:duration-300 ${
            email ? 'top-0' : 'top-7'
          }`}
        >
          Enter your email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`relative h-8 w-full border border-white border-opacity-50 bg-transparent pl-4 font-medium text-secondary outline outline-0 duration-300 focus:bottom-0 focus:border-opacity-100 focus:duration-300 md:hover:bottom-0 md:hover:border-opacity-100 md:hover:duration-300 ${
              email ? 'bottom-0' : 'bottom-7'
            }`}
          />
        </label>
      </div>
      <div className="mb-10 w-full">
        <label
          className={`relative pl-4 duration-300 focus-within:top-0 focus-within:duration-300 md:hover:top-0 md:hover:duration-300 ${
            message ? 'top-0' : 'top-7'
          }`}
        >
          Message
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`relative h-24 w-full border border-white border-opacity-50 bg-transparent pl-4 pt-1 font-medium text-secondary outline outline-0 duration-300 focus:bottom-0 focus:border-opacity-100 focus:duration-300 md:hover:bottom-0 md:hover:border-opacity-100 md:hover:duration-300 ${
              message ? 'bottom-0' : 'bottom-7'
            }`}
          />
        </label>
      </div>
      <div className="mb-10 flex flex-row">
        <div
          onClick={() => setPpAgreed(!ppAgreed)}
          className={`mr-6 h-5 w-5 border border-white border-opacity-50 hover:cursor-pointer ${
            ppAgreed ? '' : 'hover:border-secondary hover:bg-secondary'
          }`}
        >
          <div
            className={`relative bottom-1.5 right-1.5 h-8 w-8 text-secondary ${
              ppAgreed ? 'visible' : 'invisible'
            }`}
          >
            <BsCheck size={30} />
          </div>
        </div>
        <p>
          I agree to Eminence Constructions{' '}
          <Link href="/" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
      <button
        type="submit"
        disabled={state.submitting || !inputValid}
        className="h-10 border border-secondary bg-secondary px-10 py-1 font-roboto text-lg text-primary md:border-white md:bg-transparent md:text-white md:hover:border-secondary md:hover:bg-secondary md:hover:text-primary"
      >
        Send
      </button>
    </form>
  );
}
