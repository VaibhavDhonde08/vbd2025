import React from 'react';
import { Truck, Users, Sprout, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'Direct from Farmers',
    description: 'We source directly from farms in Maharashtra, ensuring farmers get fair prices and you get the best produce.',
    icon: Users,
  },
  {
    name: '100% Fresh & Organic',
    description: 'Harvested in the morning, delivered by evening. No cold storage, no preservatives.',
    icon: Sprout,
  },
  {
    name: 'Fast Delivery',
    description: 'Efficient delivery network covering Pune, Mumbai, and surrounding regions.',
    icon: Truck,
  },
  {
    name: 'Quality Guaranteed',
    description: 'Every vegetable is hand-picked and quality checked before it reaches your kitchen.',
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <div className="bg-green-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Why Choose MahaFresh?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Better for Farmers, Better for You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are bridging the gap between rural Maharashtra and urban kitchens. Experience the true taste of fresh vegetables.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
