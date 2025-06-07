import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólio de Leon Fagundes',
  description: 'Portfólio pessoal de Leon Fagundes, desenvolvedor Full Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icon2.png" type="image/png" />
        {/* outros metadados */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}