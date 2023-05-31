import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
      </main>

      <Footer />
    </>
  )
}
