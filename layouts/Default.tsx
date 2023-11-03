import '@/app/globals.css'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Next Grafbase App',
  description: 'Showcase and discover outstanding developer projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
