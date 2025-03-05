import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        className={clsx(
          'h-8 w-8 rounded-lg',
          invert ? 'fill-white' : 'fill-neutral-950',
        )}
      />
      <text
        x="16"
        y="21" 
        textAnchor="middle"
        className={invert ? 'fill-neutral-950' : 'fill-white'}
        fontSize="14"
        fontWeight="bold"
      >
        QL
      </text>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 180 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="42"
        y="22"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        fontSize="16"
        fontWeight="600"
      >
        Quick Launch
      </text>
    </svg>
  )
}