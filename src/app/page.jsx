import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { TypeWriter } from '@/components/TypeWriter'
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
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-16 bg-neutral-950 py-12 sm:mt-24 sm:py-16 lg:mt-32">
      <Container>
        <FadeIn>
          <h2 className="text-center font-display text-base font-semibold tracking-wider text-white mb-12">
            We've helped brands of all sizes launch and grow
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clients.map(([client, logo]) => (
                <FadeIn key={client}>
                  <div className="mx-12 w-[150px] inline-block opacity-70 hover:opacity-100 transition-opacity">
                    <Image src={logo} alt={client} unoptimized />
                  </div>
                </FadeIn>
              ))}
              {clients.map(([client, logo]) => (
                <FadeIn key={`${client}-2`}>
                  <div className="mx-12 w-[150px] inline-block opacity-70 hover:opacity-100 transition-opacity">
                    <Image src={logo} alt={client} unoptimized />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Your Brand, Engineered for Growth"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our approach merges sharp strategy with standout visuals to launch brands that compete, connect, and grow.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Comprehensive digital solutions for modern businesses"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From web development to brand strategy, we offer end-to-end digital services to help your business thrive in today's competitive landscape.
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
            <ListItem title="Website Development">
              We create modern, responsive websites that provide excellent user experience and drive business growth.
            </ListItem>
            <ListItem title="App Development">
              Custom mobile and desktop applications built with cutting-edge technology to meet your specific business needs.
            </ListItem>
            <ListItem title="Digital Marketing">
              Strategic digital marketing solutions to increase your online presence and reach your target audience effectively.
            </ListItem>
            <ListItem title="Graphic Design">
              Professional graphic design services including logos, marketing materials, and visual content that captures your brand essence.
            </ListItem>
            <ListItem title="Product Design">
              End-to-end product design services from conceptualization to prototyping and final development.
            </ListItem>
            <ListItem title="Brand Development">
              Comprehensive brand development services for startups and existing businesses, including strategy, positioning, and growth planning.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Quick Launch is a brand development company helping businesses create impactful brand identities.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-16 sm:mt-24 md:mt-40">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            We Don't Just Build Brands.
            <br />
            We Launch Them.
          </h1>
          <div className="mt-6 flex items-center text-2xl sm:text-4xl">
            <span className="font-sans font-bold text-neutral-950">Advancing</span>
            <span className="ml-2">
              <TypeWriter 
                words={[
                  'Startups',
                  'Businesses',
                  'Entrepreneurs',
                  'Small Teams',
                  'Enterprises',
                  'Innovators'
                ]} 
              />
            </span>
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-none bg-white px-8 py-4 text-base font-medium text-neutral-950 border-2 border-neutral-950 transition hover:bg-[#5ebc67] hover:text-white hover:border-[#5ebc67]"
            >
              GET STARTED
            </Link>
          </div>
          <p className="mt-6 text-xl text-neutral-950">
            Strategic branding. Fast execution. Market-ready identities built to make your endeavors impossible to ignore.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Quick Launch delivered a brand identity that perfectly captured our vision and helped us stand out in a crowded market.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}