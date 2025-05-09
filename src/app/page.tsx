import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import navensaLogo from 'images/navensaLogo.png'
import ROICalculatorMini from '@/components/ROICalculatorMini'

// const clients = [
//   ['Phobia', logoPhobiaLight],
//   ['Phobia', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

// function CaseStudies({
//   caseStudies,
// }: {
//   caseStudies: Array<MDXEntry<CaseStudy>>
// }) {
//   return (
//     <>
//       <SectionIntro
//         title="Harnessing technology for a brighter future"
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           We believe technology is the answer to the world’s greatest
//           challenges. It’s also the cause, so we find ourselves in bit of a
//           catch 22 situation.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="h-16 w-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
//                   <time
//                     dateTime={caseStudy.date.split('-')[0]}
//                     className="font-semibold"
//                   >
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//     </>
//   )
// }

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="Complete Digital Systems Built for Growth"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Navensa, we don’t just build websites — we create fully integrated systems that drive leads, automate follow-ups, and help your business scale with ease.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website Design & Development">
              Beautiful, responsive websites optimised for speed, SEO, and lead generation — tailored to your brand and goals.
            </ListItem>
            <ListItem title="Digital Advertising (Google & Facebook Ads)">
              Highly targeted ads campaigns crafted to bring in quality leads and real return on investment — no guesswork.
            </ListItem>
            <ListItem title="Automation Systems & CRM Integration">
              Intelligent systems to automate lead capture, email follow-ups, customer onboarding, and more — saving you hours every week.
            </ListItem>
            <ListItem title="Performance Tracking & Growth Optimisation">
              Transparent reporting with actionable insights — so you always know where you stand and where to grow next.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Most Music School Websites Cost You Money. Ours Pays for Itself — Usually With 2–3 New Students.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We build student-getting websites for music schools. Want to see if yours could pay for itself?
          </p>  
          <div className='mt-8'>
            <Link
              href="/roi-calculator"
              className="inline-block rounded-lg bg-neutral-950  px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              Calculate ROI
            </Link>                      
            <p className="text-md italic text-neutral-600 mt-4">
              See if 2–3 new students would cover your monthly cost.
            </p>   
          </div>         
        </FadeIn>
      </Container>

      {/* <Clients />

      <CaseStudies caseStudies={caseStudies} /> */}

      <Container className="relative isolate overflow-hidden rounded-3xl bg-neutral-100 px-6 py-24 sm:py-32 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            One School. One Area. More Students.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            We only work with <strong>one music school per area</strong> — and we’ll never build a second site nearby. Once your area is taken, it’s locked.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            We do this to <strong>protect your results</strong> — so every enquiry in your area comes to you.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            Right now, we’re offering a <strong>3-month free trial</strong> to our first 3 schools — in exchange for honest feedback and a simple case study. After that, the area is closed. Once an area is taken, it’s reserved.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/availability"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-800"
            >
              Check Availability
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Now accepting 3 schools for a <strong>3-month free trial</strong> — limited availability.
          </p>
        </FadeIn>
      </Container>

      <ROICalculatorMini />

      <Services />

      <ContactSection />
    </>
  )
}
