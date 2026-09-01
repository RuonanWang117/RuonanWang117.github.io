import type { Metadata } from 'next';

import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ruonanwang117.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '王若楠 · Ruonan Wang',
  description:
    'Ruonan Wang is a Ph.D. student at Renmin University of China researching LLM agents, agent memory, continual learning and applied AI.',
  openGraph: {
    title: '王若楠 · Ruonan Wang',
    description: 'LLM Agents · Agent Memory · Applied AI',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '王若楠 · Ruonan Wang',
    description: 'LLM Agents · Agent Memory · Applied AI',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
