import type { Metadata } from 'next';
import ProductsClient from './products-client';

export const metadata: Metadata = {
  title: 'Digital Assets Store | yazidcodes.id',
  description: 'Boilerplate tangguh, template UI modern, dan e-book koding premium untuk mempercepat workflow koding Anda. Klik produk untuk membaca spesifikasi detail & memulai order.',
};

export default function Page() {
  return <ProductsClient />;
}
