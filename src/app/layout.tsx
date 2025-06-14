import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Nomad Cycling Club',
    default: 'Nomad Cycling Club - Mongolian Cycling Community in Washington State',
  },
  description:
    'Nomad Cycling Club is a Mongolian-founded cycling community based in Washington State. We bring together riders of all backgrounds to explore, connect, and celebrate the spirit of adventure through cycling.',
  keywords: [
    'cycling club',
    'Mongolian cycling',
    'Nomad Cycling Club',
    'Washington cycling community',
    'Seattle bike rides',
    'Mongolian community USA',
    'group rides Washington',
    'bike club',
    'inclusive cycling',
    'cultural cycling events',
  ],
  openGraph: {
    title: 'Nomad Cycling Club',
    description:
      'A Mongolian-founded cycling club based in Washington State, welcoming riders of all backgrounds and levels to ride, connect, and grow together.',
    url: 'https://www.nomadcyclingclub.com',
    siteName: 'Nomad Cycling Club',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
