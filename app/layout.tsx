import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { InteractiveParticles } from '@/components/ui/interactive-particles'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Umer Iqbal — Full-Stack Web Developer (MERN & Next.js)',
  description:
    'Portfolio of Umer Iqbal, a full-stack web developer specializing in building modern, high-performance web applications with Next.js.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <InteractiveParticles />
          <div className="fixed inset-0 -z-10 h-full w-full">
            {/* Light mode background gradient */}
            <div className="absolute inset-0 h-full w-full bg-white dark:hidden opacity-50"></div>
            {/* Dark mode background */}
            <div className="hidden dark:block absolute inset-0 h-full w-full bg-black"></div>
          </div>
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-geist)]">
            <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
