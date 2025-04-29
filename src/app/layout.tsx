import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.navensa.com'), // (Change this if you have a different domain later)
  title: {
    default: 'Navensa — Complete Digital Systems for Small Business Growth',
    template: '%s | Navensa',
  },
  description:
    'Navensa helps small businesses grow faster with complete digital solutions — websites, ads, and automation systems built for ROI.',
  keywords: [
    'website design',
    'digital marketing',
    'automation systems',
    'lead generation websites',
    'small business growth',
    'Navensa',
  ],
  openGraph: {
    title: 'Navensa — Complete Digital Systems for Small Business Growth',
    description:
      'Discover Navensa’s complete digital systems — high-performing websites, targeted ads, and automations to scale your small business with ease.',
    url: 'https://www.navensa.com',
    siteName: 'Navensa',
    images: [
      {
        url: '/images/opengraph-image.jpg', // (we'll add this image next)
        width: 1200,
        height: 630,
        alt: 'Navensa - Complete Digital Systems for Growth',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navensa — Complete Digital Systems for Small Business Growth',
    description:
      'Websites, Ads, and Automations designed to deliver real results for small businesses — fast, easy, and stress-free.',
    images: ['/images/opengraph-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
