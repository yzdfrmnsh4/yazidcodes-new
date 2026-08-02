import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '../../../lib/data';
import PortfolioDetailClient from './portfolio-detail-client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PORTFOLIO.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | yazidcodes.site',
    };
  }

  return {
    title: `${project.title} - Portofolio Karya | yazidcodes.site`,
    description: project.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = PORTFOLIO.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
