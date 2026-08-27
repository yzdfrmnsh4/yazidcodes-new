import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../lib/data';
import ProductDetailClient from './product-detail-client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | yazidcodes.site',
    };
  }

  return {
    title: `${product.title} - Digital Assets | yazidcodes.site`,
    description: product.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
