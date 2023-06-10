import LocoScrollWrapper from '@/components/shared/LocoScrollWrapper'
import PageLayout from '@/components/layout/PageLayout'

import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Benefits from '@/components/sections/Benefits'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import Results from '@/components/sections/Results'
import Lections from '@/components/sections/Lections'
import Faq from '@/components/sections/Faq'
import TermsOfService from '@/components/sections/TermsOfService'

export default function Home() {
  return (
    <LocoScrollWrapper>
      <PageLayout>
        <Hero />

        <Intro />

        <Benefits />

        <WhatWillYouLearn />

        <Results />

        <Lections />

        <Faq />

        <TermsOfService />
      </PageLayout>
    </LocoScrollWrapper>
  )
}
