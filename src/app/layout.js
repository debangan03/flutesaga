import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Playfair_Display, Lora } from 'next/font/google';


const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Flute Saga - Bharat Raj',
  description: 'Professional portfolio of Bharat Raj, a renowned flute artist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased font-lora`}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}