import { Josefin_Sans, Roboto, Red_Hat_Display } from 'next/font/google';
import '@/styles/globals.css';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  weight: ['300', '400'],
  subsets: ['latin'],
});

// This is the closest Google font to Helvetica Neue.
const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '500'],
  subsets: ['latin'],
});

// Used for company name in the logo.
const redHat = Red_Hat_Display({
  variable: '--font-red-hat',
  weight: '500',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${josefinSans.variable} ${roboto.variable} ${redHat.variable} font-josefin`}
    >
      <Component {...pageProps} />
    </main>
  );
}
