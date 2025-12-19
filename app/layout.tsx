import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarah Chen Photography',
  description: 'Award-winning architectural photography that captures the essence and beauty of exceptional design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
