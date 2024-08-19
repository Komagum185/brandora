import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Holistic Brand Solutions',
    description:' Understanding the vision of client and market dynamics.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Local Market Expertise',
    description:'Developing bespoke strategies that align with the objectives a client.',
    icon: LockClosedIcon,
  },
  {
    name: 'Innovative Approaches',
    description:'We employ the latest trends and technologies to create dynamic and impactful marketing campaigns.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalized Attention',
    description:'Each client receives dedicated attention and customized strategies to meet their unique needs.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Proven Track Record',
    description:'Our portfolio of successful projects and satisfied clients speaks volumes about our capabilities.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">WHAT DOES BRANDORA DO UNIQUELY (WHY US)?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We believe in a client-centric approach
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Brandora stands out due to it`&lsquo;`'s unique blend of creativity, strategic thinking, 
          and market expertise. Here is why you should choose us:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
