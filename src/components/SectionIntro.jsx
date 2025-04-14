import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        {eyebrow && (
          <p className="font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </p>
        )}
        <h2
          className={clsx(
            'mt-2 font-display tracking-tight [text-wrap:balance]',
            smaller
              ? 'text-3xl font-medium'
              : 'text-4xl font-medium sm:text-5xl',
            invert ? 'text-white' : 'text-neutral-950',
          )}
        >
          {title}
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
