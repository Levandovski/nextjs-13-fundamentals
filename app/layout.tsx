import NavBar from "../components/Navbar"
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'My store with nextjs - HomePage',
  description: 'This is home page',
  keywords: 'store, onlne, ecommerce',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <div style={{ width: '100%', height: '50px', backgroundColor: '#000' }}></div>
      </body>
    </html>
  )
}
