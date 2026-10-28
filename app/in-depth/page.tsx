import type { Metadata } from 'next';
import InDepthPortfolio from '@/components/in-depth/InDepthPortfolio';

export const metadata: Metadata = {
  title: 'Experience, Projects & Labs | Jaydyn Davis',
  description: 'Explore Jaydyn Davis\'s Battelle reverse engineering work, firmware debugger and C kernel module development, HUCTF result, security projects, technical skills, and lab archive.',
};

export default function InDepthPage() {
  return <InDepthPortfolio />;
}
