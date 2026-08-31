import { MetadataRoute } from 'next';
import { PORTFOLIO, PRODUCTS } from '../lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yazidcodes.id';

  const portfolioEntries: MetadataRoute.Sitemap = PORTFOLIO.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...portfolioEntries,
    ...productEntries,
  ];
}
