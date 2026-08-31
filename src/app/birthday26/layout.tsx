import type { Metadata } from 'next';
import { Poppins, Archivo_Narrow, Zilla_Slab } from 'next/font/google';

const display = Poppins({ weight: '900', subsets: ['latin'], variable: '--font-display' });
const chyron = Archivo_Narrow({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-chyron' });
const cuerpo = Zilla_Slab({ weight: ['400', '600'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-cuerpo' });

export const metadata: Metadata = {
  title: '31 Años',
  description: 'Invitación.',
  // A gated personal invitation has no business in search results.
  robots: { index: false, follow: false },
};

const BirthdayLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={`${display.variable} ${chyron.variable} ${cuerpo.variable}`}>{children}</div>
);

export default BirthdayLayout;
