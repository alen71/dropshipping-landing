import Hero from '@/components/sections/Hero'

import PageLayout from '@/components/layout/PageLayout'
import LocoScrollWrapper from '@/components/shared/LocoScrollWrapper'
import Intro from '@/components/sections/Intro'
import Benefits from '@/components/sections/Benefits'

export default function Home() {
  return (
    <LocoScrollWrapper>
      <PageLayout>
        <Hero />

        <Intro />

        <Benefits />
      </PageLayout>
    </LocoScrollWrapper>
  )
}
