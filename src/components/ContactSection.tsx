import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Get a Free Quote or Website Audit
            </h2>
            <p className="mt-4 text-lg text-white/70">
              No pressure — just a clear roadmap, real pricing, and expert advice based on your goals. We’ll respond within 24 hours.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Start Growing Today
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10 text-white/50 text-sm">
              Based in Ireland. Working with ambitious businesses worldwide.
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

