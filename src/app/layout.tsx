import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const title = 'Arthur Otaviano | Front-End Developer'
const description =
  'Front-End Developer with 10+ years of experience building modern websites and web applications, currently with React, Next.js, and TypeScript. Focused on performance, accessibility, SEO, responsive design, and user experience.'
const url =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
      <body className='bg-white dark:bg-mauve-950 font-sans text-mauve-500 dark:text-mauve-400 text-[15px] md:text-base selection:bg-mauve-200 dark:selection:bg-mauve-800 selection:text-mauve-950 dark:selection:text-mauve-400'>
        <ThemeProvider>
          <div className='flex flex-col gap-12 mx-auto w-full max-w-xl pt-6 md:pt-12 pb-12 px-4 md:px-6'>
            <Header />
            <ThemeToggle />
            <main className='flex flex-col gap-12'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
