import { Inter } from 'next/font/google'

// Configure font with a base path for production
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  // Add this to handle asset prefix in production
  variable: '--font-inter',
  adjustFontFallback: false, // important for GitHub Pages
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}