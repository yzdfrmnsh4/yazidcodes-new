import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'yazidcodes.site | Jasa Pembuatan Website Profesional & Modern',
  description: 'Kami membangun identitas digital masa depan dengan estetika 3D liquid glass yang memukau dan performa teknologi terkini untuk meningkatkan skala bisnis global Anda.',
};

export default function Page() {
  return <HomeClient />;
}
