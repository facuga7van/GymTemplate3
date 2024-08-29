import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gimnasio Powerlifting',
  description: 'Lorem ipsum dolor.',
  // openGraph: {
  //   images: '/opengraph-image.png'
  // },
  twitter: {
    card: 'summary_large_image',
    title: 'Gimnasio Powerlifting',
    description: 'Lorem ipsum dolor.'
    // images: ['https://i.imgur.com/MPMcyPP.png']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full spectrum-background">
              <div className="flex w-full h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
