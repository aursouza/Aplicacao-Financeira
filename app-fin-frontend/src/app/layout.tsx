import type { Metadata } from 'next'
import { inter, league, archivo } from '@/utils/fonts'
import './globals.css'
import ContentArea from '@/components/ContentArea'
import Bar from '@/components/Bar'

export const metadata: Metadata = {
  title: 'Aplicação-Financeira',
  description: 'Curso Formação Dev da Cod3r',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${league.variable} ${archivo.variable}`}
      >
        <ContentArea gap={0} className="h-screen bg-black">
          <Bar />
          {children}
        </ContentArea>
      </body>
    </html>
  )
}
