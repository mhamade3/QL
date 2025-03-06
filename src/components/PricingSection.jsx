import { Container } from '@/components/Container'
import clsx from 'clsx'

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '2,499',
      description: 'Perfect for startups and small businesses just beginning their brand journey.',
      features: [
        'Brand strategy workshop',
        'Logo design (3 concepts)',
        'Color palette & typography',
        'Basic brand guidelines',
        'Business card & letterhead',
        'Email signature design',
        '2 rounds of revisions'
      ],
    },
    {
      name: 'Professional',
      price: '4,999',
      description: 'Comprehensive branding for businesses ready to make a stronger market impact.',
      features: [
        'Everything in Starter',
        'Extended brand workshop',
        'Logo design (5 concepts)',
        'Complete visual identity system',
        'Comprehensive brand guidelines',
        'Social media templates',
        'Website design consultation',
        'Marketing collateral design',
        '3 rounds of revisions'
      ],
    },
    {
      name: 'Enterprise',
      price: '9,999',
      description: 'Enterprise-level branding for established businesses seeking to redefine their market position.',
      features: [
        'Everything in Professional',
        'In-depth market research',
        'Competitor analysis',
        'Customer persona development',
        'Brand voice & messaging',
        'Photography art direction',
        'Environmental branding',
        'Packaging design',
        'Unlimited revisions'
      ],
    },
  ]

  return (
    <div className="py-24 sm:py-32 bg-black">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing, for everyone.
          </h2>
          <p className="mt-6 text-base text-neutral-300">
            Choose the package that best fits your business needs and goals.
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={clsx(
                "rounded-3xl overflow-hidden", 
                index === 1 ? "transform scale-105 shadow-xl z-10" : ""
              )}
            >
              <div 
                className={clsx(
                  "p-8 h-full",
                  index === 1 
                    ? 'bg-[#5ebc67] text-white' 
                    : 'bg-black ring-1 ring-neutral-800 text-white'
                )}
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className={clsx(
                  "mt-2 text-base h-16",
                  index === 1 ? "text-white" : "text-neutral-400"
                )}>{plan.description}</p>
                
                <div className="mt-6 mb-8 text-center">
                  <span className={clsx(
                    "text-4xl font-bold tracking-tight font-mono",
                    index === 1 ? "text-white" : "text-white"
                  )}>${plan.price}</span>
                </div>
                
                <button
                  className={clsx(
                    "w-full py-3 px-4 rounded-full font-medium transition-colors duration-200",
                    index === 1
                      ? 'bg-white text-[#5ebc67] hover:bg-neutral-100'
                      : 'bg-neutral-800 hover:bg-[#5ebc67] hover:text-white'
                  )}
                >
                  Get started
                </button>
                
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <svg 
                        className={clsx(
                          "h-5 w-5 flex-shrink-0 mt-0.5",
                          index === 1 ? "text-white" : "text-[#5ebc67]"
                        )} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={clsx(
                        "ml-3 text-base",
                        index === 1 ? "text-white" : "text-neutral-400"
                      )}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view */}
        <div className="lg:hidden space-y-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className="rounded-3xl overflow-hidden"
            >
              <div
                className={clsx(
                  'p-6',
                  index === 1 
                    ? 'bg-[#5ebc67] text-white' 
                    : 'bg-black ring-1 ring-neutral-800 text-white'
                )}
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className={clsx(
                  "mt-2 text-base",
                  index === 1 ? "text-white" : "text-neutral-400"
                )}>{plan.description}</p>
                
                <div className="mt-8 mb-6 text-center">
                  <span className={clsx(
                    "text-4xl font-bold tracking-tight font-mono",
                    index === 1 ? "text-white" : "text-white"
                  )}>${plan.price}</span>
                </div>
                
                <button
                  className={clsx(
                    "w-full py-3 px-4 rounded-full font-medium transition-colors duration-200",
                    index === 1
                      ? 'bg-white text-[#5ebc67] hover:bg-neutral-100'
                      : 'bg-neutral-800 hover:bg-[#5ebc67] hover:text-white'
                  )}
                >
                  Get started
                </button>
                
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <svg 
                        className={clsx(
                          "h-5 w-5 flex-shrink-0 mt-0.5",
                          index === 1 ? "text-white" : "text-[#5ebc67]"
                        )} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={clsx(
                        "ml-3 text-base",
                        index === 1 ? "text-white" : "text-neutral-400"
                      )}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}