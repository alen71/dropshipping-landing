import Image from 'next/image'

import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'

import bgImage from '/public/images/background-img.png'
import MainSection from '@/components/shared/MainSection'

export default function Home() {
  return (
    <PageLayout>
      <Nav />

      <div className="fixed top-0 right-0 w-1/2 z-[-1]">
        <Image src={bgImage} alt="background-image" />
      </div>

      <main className="min-h-screen">
        <MainSection>
          <Hero />
        </MainSection>
      </main>

      <Footer />
    </PageLayout>
  )
}
