import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Header() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
          Award-winning development studio based in Denmark.
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          We are a development studio working at the intersection of design and
          technology. It's a really busy intersection though — a lot of our staff
          have been involved in hit-and-runs.
        </p>
        <Button href="/contact" className="mt-10">
          Tell us about your project
        </Button>
      </FadeIn>
    </Container>
  )
} 