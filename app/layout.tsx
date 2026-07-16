import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/navbar'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SIF115 — Seguridad Informática',
    template: '%s | SIF115',
  },
  description:
    'Plataforma educativa para la materia Seguridad Informática (SIF115-2016). Criptografía, redes, protocolos seguros, auditoría y respuesta a incidentes.',
  keywords: [
    'Seguridad Informática',
    'Criptografía',
    'Redes',
    'SIF115',
    'Ciberseguridad',
    'AES',
    'RSA',
    'TCP/IP',
  ],
  authors: [{ name: 'SIF115 — 2016' }],
  generator: 'Next.js',
  openGraph: {
    title: 'SIF115 — Seguridad Informática',
    description:
      'Plataforma educativa: Criptografía, Redes, Protocolos Seguros y más.',
    type: 'website',
    locale: 'es_ES',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080c10',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className="bg-background"
      style={
        {
          '--font-sans': _spaceGrotesk.style.fontFamily,
          '--font-mono': _jetbrainsMono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
