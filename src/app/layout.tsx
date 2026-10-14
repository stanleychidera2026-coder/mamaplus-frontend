import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MamaPlus — Your daily pregnancy companion on WhatsApp',
  description: 'Get free daily pregnancy support on WhatsApp. No app to download. Just add our number and start chatting.',
  authors: [{ name: 'MamaPlus' }],
  openGraph: {
    title: 'MamaPlus — Your daily pregnancy companion on WhatsApp',
    description: 'Get free daily pregnancy support on WhatsApp. No app to download. Just add our number and start chatting.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@MamaPlus',
    title: 'MamaPlus — Your daily pregnancy companion on WhatsApp',
    description: 'Get free daily pregnancy support on WhatsApp. No app to download. Just add our number and start chatting.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
