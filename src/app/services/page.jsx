import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { PricingSection } from '@/components/PricingSection'
import imageLaptop from '@/images/laptop.jpg'
import clsx from 'clsx'

export const metadata = {
  title: 'Services & Pricing | Quick Launch',
  description: 'Explore our brand development services and pricing packages designed to help your business stand out in the market.',
}

export default function Services() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Brand development services that drive results
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We offer strategic brand development services that help businesses build memorable brands
            and achieve their growth objectives.
          </p>
        </FadeIn>
      </Container>

      <ServiceDescription />
      <ProcessSteps />
      <PricingSection />
      <ContactSection />
    </>
  )
}

function ServiceDescription() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Brand development services tailored to your business needs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We offer comprehensive brand development services that help businesses establish a strong 
          market presence and connect with their target audience effectively.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="lg:w-1/2 lg:pr-12">
            <FadeIn className="relative z-10">
              <StylizedImage
                src={imageLaptop}
                alt="Brand strategy session"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-start"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2">
            <ListItem title="Brand Strategy">
              We develop comprehensive brand strategies that align with your business goals,
              analyze your market position, and establish your unique value proposition.
            </ListItem>
            <ListItem title="Visual Identity">
              Our design team creates distinctive logos, color palettes, typography, and visual
              systems that capture your brand's essence and stand out in the market.
            </ListItem>
            <ListItem title="Brand Guidelines">
              We create detailed guidelines to ensure your brand is implemented consistently
              across all touchpoints, from marketing materials to product packaging.
            </ListItem>
            <ListItem title="Brand Activation">
              Our launch strategies help introduce your brand to the market effectively,
              generating awareness and engagement from day one.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function ProcessSteps() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Our Process"
        title="How we bring your brand to life"
      >
        <p>
          Our proven four-step process ensures we create brands that are strategic, memorable,
          and effective in helping businesses achieve their goals.
        </p>
      </SectionIntro>
      <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            step: '01',
            title: 'Discover',
            description: 'We begin with research to understand your business, audience, market, and competition.'
          },
          {
            step: '02',
            title: 'Define',
            description: 'We develop your brand strategy, positioning, and value proposition.'
          },
          {
            step: '03',
            title: 'Design',
            description: 'We create the visual identity and assets that bring your brand to life.'
          },
          {
            step: '04',
            title: 'Deliver',
            description: 'We implement your brand across all touchpoints and provide guidelines for ongoing use.'
          }
        ].map((step, index) => (
          <FadeIn key={index} className="flex">
            <div className="rounded-3xl p-8 ring-1 ring-neutral-950/10 transition-all duration-300 hover:bg-[#5ebc67]/10 hover:ring-[#5ebc67]/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5ebc67]/10 text-sm font-semibold text-[#5ebc67]">
                {step.step}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">{step.title}</h3>
              <p className="mt-2 text-base text-neutral-600">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}
