import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/navbar'
import Header from '../components/layout/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <div className="min-h-full">
          <Navbar />
          <Header />
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </SessionProvider>
    </>
  )
}
