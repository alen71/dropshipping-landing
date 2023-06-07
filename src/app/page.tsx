import Hero from '@/components/sections/Hero'

import PageLayout from '@/components/layout/PageLayout'
import LocoScrollWrapper from '@/components/shared/LocoScrollWrapper'

export default function Home() {
  return (
    <LocoScrollWrapper>
      <PageLayout>
        <Hero />
      </PageLayout>
    </LocoScrollWrapper>
  )
}
