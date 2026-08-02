export const handleOpenInquiry = (planName: string = 'General') => {
  const text = `Halo Yazidcodes, saya ingin tanya rencana web atau berkonsultasi mengenai rencana proyek kami${planName !== 'General' ? ` (Paket: ${planName})` : ''}.`;
  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/628123456789?text=${encodedText}`, '_blank', 'noopener,noreferrer');
};

export const handleWhatsAppInquiryProject = (projectTitle: string) => {
  const text = `Halo Yazidcodes, saya sangat tertarik dengan proyek "${projectTitle}" dan ingin berkonsultasi mengenai pembuatan website serupa.`;
  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/628123456789?text=${encodedText}`, '_blank', 'noopener,noreferrer');
};

export const getProductMeta = (id: string) => {
  switch (id) {
    case 'dashboard-template':
      return { category: 'Web UI Template', size: '12.4 MB', format: 'Figma & Next.js Source Code', license: 'Personal & Commercial Use' };
    case 'backend-boilerplate':
      return { category: 'Backend Framework', size: '4.8 MB', format: 'ZIP / Git Repository', license: 'Unlimited Projects Use' };
    case 'vibe-coding-guide':
      return { category: 'E-Book & Manual', size: '18.5 MB', format: 'PDF & Notion Workspace', license: 'Lifetime Access' };
    case 'nextjs-saas-boilerplate':
      return { category: 'Fullstack SaaS Boilerplate', size: '28.1 MB', format: 'GitHub Repository Invite', license: 'Standard Commercial License' };
    case 'minimalist-portfolio':
      return { category: 'Landing Web Template', size: '8.2 MB', format: 'HTML & React App Source', license: 'Personal Portfolio Use' };
    case 'figma-design-system':
      return { category: 'Figma Library UI', size: '45.7 MB', format: '.FIG File Format', license: 'Design Team Lifetime' };
    default:
      return { category: 'Digital Resource', size: '15.0 MB', format: 'Instant Download ZIP', license: 'Standard Personal Use' };
  }
};

export const getNumericPrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^\d]/g, '')) * 1000 || 0;
};

export const getProductFinalPrice = (priceStr: string, discount: boolean) => {
  const base = getNumericPrice(priceStr);
  return discount ? base * 0.7 : base;
};
