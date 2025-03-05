import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({ className, children }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'text-base text-neutral-600 space-y-10',
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({ title, children, className }) {
  return (
    <li className={clsx('group transition-all duration-300 hover:translate-x-2', className)}>
      <FadeIn>
        <Border
          position="left"
          className="pl-8 group-hover:border-[#5ebc67]"
        >
          <strong className="font-semibold text-neutral-950 transition-colors duration-300 group-hover:text-[#5ebc67]">{title}.</strong> {children}
        </Border>
      </FadeIn>
    </li>
  )
}