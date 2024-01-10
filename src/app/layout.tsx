import type { Metadata } from 'next'
import '@/app/style.css'
import StoreProvider from '@/components/storeProvider'

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'A pokedex made with React and NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <div className="pokedex-layout">
            <div className='pokedex-wrapper flex-column'>
              {children}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
