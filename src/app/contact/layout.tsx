import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact JobHelper',
  description: 'Contact JobHelper - Get in touch with us for inquiries, support, or partnership opportunities.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}