import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
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
        </main>
      </body>
    </html>
  )
}