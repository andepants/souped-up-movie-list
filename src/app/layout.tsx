import './globals.css'
import Link from 'next/link'
import Head from 'next/head';

export const metadata = {
  title: 'Movie List',
  description: 'A list of movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/generator">
            Movie Generator
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Movie List</h1>
        {children}
      </body>
    </html>
  )
}
