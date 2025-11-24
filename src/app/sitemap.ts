import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vrikshakriti.shop';

  const pages = [
    '',
    '/about',
    '/gallery',
    '/materials-and-finishes',
    '/faq',
    '/l-shaped-kitchen',
    '/u-shaped-kitchen',
    '/straight-kitchen',
    '/parallel-kitchen',
    '/island-kitchen',
    '/semi-modular-kitchen',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
