import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

function ServicesOverview() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our expertise"
        title="Three pillars of your digital growth"
        invert
      >
        <p>
          We offer a targeted set of services proven to build online presence, attract leads, and automate your growth.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Website Design & Development" invert>
            Beautiful, responsive websites optimised for lead generation, performance, and SEO.
          </GridListItem>
          <GridListItem title="Digital Advertising" invert>
            ROI-driven campaigns on Google, Facebook, and Instagram to fuel quality traffic and growth.
          </GridListItem>
          <GridListItem title="Automation Systems" invert>
            Smart CRM and automation solutions to nurture leads, save time, and streamline operations.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const tiers = [
  {
    name: 'Starter System',
    id: 'tier-starter',
    href: '/contact',
    priceMonthly: 'From €300/mo',
    description: 'For businesses getting started with a professional website and essential monthly support. One-time website setup from €1,500.',
    features: [
      'Custom website (up to 6 pages)',
      'Basic CRM setup',
      'SEO-optimised build',
      'Google Business Profile setup',
      'Contact forms + lead capture',
      '1 hour of monthly support included',
    ],
  },
  {
    name: 'Growth System',
    id: 'tier-growth',
    href: '/contact',
    priceMonthly: 'From €600/mo',
    description: 'For businesses scaling with full advertising, CRM automation, and ongoing lead generation. Website setup from €2,500.',
    features: [
      'Website + full lead funnel',
      'Advanced CRM & automations',
      'Google & Facebook Ads setup',
      'Conversion tracking & monthly reports',
      'ROI calculators & lead scoring',
      '2–4 hours of monthly updates/support',
    ],
  },
  {
    name: 'Pro System',
    id: 'tier-pro',
    href: '/contact',
    priceMonthly: 'From €1,000/mo',
    description: 'Bespoke solutions for ambitious businesses requiring full system management. Custom platform setup from €4,000.',
    features: [
      'Custom-built platform (unlimited pages)',
      'Full CRM & marketing automation suite',
      'Google, Facebook & LinkedIn Ads management',
      'Advanced analytics & reporting dashboard',
      'Dedicated success manager',
      'Full retainer: strategy, support, reporting',
    ],
  },
]

function PricingSection() {
  return (
    <div className="isolate overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base/7 font-semibold text-neutral-950">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-6xl">
            Smart systems. Real growth.
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-neutral-600 sm:text-xl/8">
            Every Navensa system is designed to generate leads, automate growth, and deliver measurable ROI.
          </p>
          {/* Keep the background svg */}
        </div>
      </div>
      <div className="flow-root bg-neutral-50 pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-x-12">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base/7 font-semibold text-neutral-950">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                    </div>
                    <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-neutral-950 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book a Discovery Call
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-sm text-gray-600">
              *All Navensa systems are built with ongoing monthly optimisation and support to ensure your business continues growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Navensa offers complete digital growth systems: websites, advertising, and automation solutions built for small business success.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Our services" title="Digital growth solutions, built for real results">
        <p>
          At Navensa, we deliver complete systems designed to help small businesses grow smarter. 
          Our approach combines tailored website design, results-driven advertising, and intelligent automation — giving you a powerful advantage in today’s digital market.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Every solution is crafted to maximise your return on investment, streamline your operations, and position your brand for sustainable success.
          </p>
          <p>
            We partner with businesses who value efficiency, impact, and long-term growth.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="25+" label="Projects launched and optimised" />
          <StatListItem value="2–3x" label="Typical client return on investment" />
          <StatListItem value="£100k+" label="Value generated across projects" />
        </StatList>
      </Container>

      <ServicesOverview />

      <PricingSection />

      <ContactSection />
    </>
  )
}