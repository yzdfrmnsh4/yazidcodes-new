import type { Metadata } from 'next';
import PortfolioClient from './portfolio-client';

export const metadata: Metadata = {
  title: 'Portofolio Karya Premium | yazidcodes.site',
  description: 'Jelajahi seluruh karya digital, sistem SaaS, dan e-commerce eksklusif yang kami bangun untuk klien global kami. Klik karya untuk review simulator responsif langsung.',
};

export default function Page() {
  return <PortfolioClient />;
}
