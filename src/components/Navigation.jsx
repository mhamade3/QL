import Link from 'next/link'

export function Navigation({ className }) {
  return (
    <nav className={className}>
      <ul role="list" className="flex items-center gap-x-12 text-lg">
        <li>
          <Link href="/services" className="text-neutral-950 hover:text-neutral-700">
            What We Do
          </Link>
        </li>
        <li>
          <Link href="/work" className="text-neutral-950 hover:text-neutral-700">
            Work
          </Link>
        </li>
        <li>
          <Link href="/process" className="text-neutral-950 hover:text-neutral-700">
            Method
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-neutral-950 hover:text-neutral-700">
            Learn
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-neutral-950 hover:text-neutral-700">
            About
          </Link>
        </li>
        <li>
          <Link href="/clients" className="text-neutral-950 hover:text-neutral-700">
            Clients
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-neutral-950 border-b-2 border-neutral-950 hover:text-neutral-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
} 