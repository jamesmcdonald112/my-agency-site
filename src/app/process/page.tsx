import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every great system starts with clarity. In this phase, we take the time to understand what your business does, who your customers are, and where your current digital setup may be holding you back.
        </p>
        <p>
          We look at your website, ads, social presence and overall online visibility. If something’s costing you money without returning results — we find it. If something is missing that could be bringing in leads — we flag it.
          We only move forward with projects where we see clear, strong return on investment potential for you — because your growth is our success.
        </p>
        <p>
          Our goal is to make this process as simple and insightful as possible. After a quick discovery call and some light research, you’ll get a clear plan: what we recommend building, why it matters, and how it will help you grow.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Discovery call</TagListItem>
        <TagListItem>Website & ad review</TagListItem>
        <TagListItem>Customer journey insights</TagListItem>
        <TagListItem>Lead capture opportunities</TagListItem>
        <TagListItem>ROI-focused strategy</TagListItem>
        <TagListItem>Clear project proposal</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once we have a clear plan, Navensa gets to work building your growth system. We focus on the essentials: upgrading or rebuilding your website for speed, conversion, and clarity, setting up strategic advertising campaigns, and integrating simple, effective automation tools.        </p>
        <p>
          You won’t be overwhelmed with endless choices — we guide you through what matters most: capturing leads, nurturing prospects, and turning interest into revenue. Our team handles everything from design and copywriting to technical setup and CRM automation.
        </p>
        <p>
          Throughout the build, you’ll have clear communication, milestone updates, and the reassurance that every element is tied back to your ROI goals.
        </p>
      </div>

      <Blockquote
        author={{ name: 'James', role: 'Founder of Navensa' }}
        className="mt-12"
      >
        At Navensa, we believe that clarity, results, and genuine care for our clients' success are the true measures of quality digital systems.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once your system is fully built, Navensa moves into final validation. We conduct rigorous checks to ensure everything is working smoothly — from your website performance and lead capture flows to your ad tracking and CRM automations.
        </p>
        <p>
          When we’re happy everything is optimised for conversion and reliability, we coordinate your launch. Whether it’s a brand new site or campaign rollout, we ensure it goes live with minimal disruption and maximum impact.
        </p>
        <p>
          After launch, we continue to monitor, refine, and support. Our focus is not just on launching a system — it’s on helping it deliver returns month after month, with transparent reporting and ongoing growth strategies.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="System Validation">
          Full checks across website, lead flows, ads, and automations.
        </ListItem>
        <ListItem title="Launch Management">
          Seamless deployment with focus on stability and results.
        </ListItem>
        <ListItem title="Ongoing Optimisation">
          Post-launch support, tracking, and continuous improvement.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Our Commitment to Your Success"
      >
        <p>
          At Navensa, we blend proven strategies with forward-thinking innovation. Our unwavering focus is on delivering digital systems that drive real business growth — with transparency, precision, and partnership at the heart of everything we do.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every detail matters. We deliver solutions that are thoughtfully crafted, thoroughly tested, and designed for long-term impact.
          </GridListItem>
          <GridListItem title="Efficient">
            We work with precision and speed, ensuring that your project moves forward without unnecessary delays or complications.
          </GridListItem>
          <GridListItem title="Adaptable">
            We tailor every project to fit your business, adapting our approach as your needs and opportunities evolve.
          </GridListItem>
          <GridListItem title="Honest">
            We believe in open, straightforward communication — offering clear advice and realistic expectations at every stage.
          </GridListItem>
          <GridListItem title="Loyal">
            We invest in long-term client partnerships, dedicated to helping your business thrive not just today, but for years to come.
          </GridListItem>
          <GridListItem title="Innovative">
            We are proactive in exploring new ideas and technologies that deliver meaningful results — never innovation for its own sake.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Explore how Navensa delivers complete digital systems through a proven three-phase strategy: Discover, Build, and Deliver.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Navensa, we follow a proven strategy built on clarity, efficiency, and results. Our three-phase process ensures your project is researched, built, and delivered to meet the highest standards.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
