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
            Comprehensive digital solutions for your business
          </h1>
          <p className="mt-6 text-xl font-display text-neutral-600">
            From website development to brand strategy, we offer end-to-end digital services to help your business thrive in today's competitive market.
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
        title="Full-spectrum digital services tailored to your needs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="font-display">
          We offer a complete range of digital services to help businesses establish, grow, and succeed in the digital landscape - from web development to brand strategy and everything in between.
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
            <ListItem title="Website Development">
              <span className="font-display text-neutral-600">We create modern, responsive websites that provide excellent user experience and drive business growth.</span>
            </ListItem>
            <ListItem title="App Development">
              <span className="font-display text-neutral-600">Custom mobile and desktop applications built with cutting-edge technology to meet your specific business needs.</span>
            </ListItem>
            <ListItem title="Digital Marketing">
              <span className="font-display text-neutral-600">Strategic digital marketing solutions to increase your online presence and reach your target audience effectively.</span>
            </ListItem>
            <ListItem title="Graphic Design">
              <span className="font-display text-neutral-600">Professional graphic design services including logos, marketing materials, and visual content that captures your brand essence.</span>
            </ListItem>
            <ListItem title="Product Design">
              <span className="font-display text-neutral-600">End-to-end product design services from conceptualization to prototyping and final development.</span>
            </ListItem>
            <ListItem title="Brand Development">
              <span className="font-display text-neutral-600">Comprehensive brand development services for startups and existing businesses, including strategy, positioning, and growth planning.</span>
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
        <p className="font-display">
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
              <p className="mt-2 text-base font-display text-neutral-600">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}
