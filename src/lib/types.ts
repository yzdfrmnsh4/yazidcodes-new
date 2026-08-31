export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  alt: string;
  features: string[];
  timeline?: string;
  client?: string;
  siteUrl?: string;
  detailedOverview?: string[];
  detailImages?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'web' | 'brush' | 'rocket_launch' | 'academic';
  color: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  iconName: 'dashboard' | 'code' | 'auto_awesome';
  color: 'primary' | 'secondary' | 'tertiary';
  price: string;
  previewUrl: string;
  features: string[];
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  desc: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
  color: string;
  buttonText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
