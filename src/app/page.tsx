import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Profesional & Modern | YazidCodes',
  description: 'YazidCodes menyediakan jasa pembuatan website profesional dan modern untuk bisnis, UMKM, startup, dan personal brand. Website cepat, responsive, dan dirancang sesuai kebutuhan Anda.',
};

export default function Page() {
  return <HomeClient />;
}
