import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary: 'rounded-full bg-neutral-950 py-2.5 px-4 text-white transition-colors duration-300 hover:bg-[#5ebc67]',
  secondary: 'rounded-full bg-white py-2.5 px-4 text-neutral-950 transition-colors duration-300 hover:bg-[#5ebc67] hover:text-white',
  filled: 'rounded-full bg-neutral-900 py-2.5 px-4 text-white transition-colors duration-300 hover:bg-[#5ebc67]',
  outline:
    'rounded-full py-2.5 px-4 ring-1 ring-neutral-950/10 transition-colors duration-300 hover:bg-[#5ebc67] hover:text-white hover:ring-[#5ebc67]',
  text: 'text-neutral-950 transition-colors duration-300 hover:text-[#5ebc67]',
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}) {
  let Component = props.href ? Link : 'button'

  className = clsx(
    'inline-flex items-center gap-2.5 justify-center text-sm font-semibold',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowIcon className={clsx('mt-0.5 h-5 w-5', variant === 'text' && 'fill-neutral-950')} />
  )

  return (
    <Component className={className} {...props}>
      {children}
      {arrow && arrowIcon}
    </Component>
  )
}