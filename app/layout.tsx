import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narinder Maurya - Portfolio',
  description: 'Narinder Maurya Portfolio Page/ Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={manrope.className}> <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider></body>
    </html>
  )
}
