import { Container } from "./Container"

export function Values() {
  const values = [
    {
      name: 'Community & Belonging',
      description:
        'We ride together and support one another no matter your background, experience level, or bike. Everyone has a place in our community.',
    },
    {
      name: 'Cultural Pride',
      description:
        'We honor and share our Mongolian heritage through meaningful traditions, events, and the nomadic spirit that defines who we are.',
    },
    {
      name: 'Inclusivity',
      description:
        'We welcome all riders beginners, veterans, and everyone in between. Our doors (and routes) are open to all who ride with heart.',
    },
    {
      name: 'Wellness & Growth',
      description:
        'Cycling is a path to both physical and mental strength. We encourage healthy habits and personal progress through shared challenges.',
    },
    {
      name: 'Adventure & Exploration',
      description:
        'Inspired by Mongolia’s nomadic legacy, we seek the unknown exploring new routes, pushing limits, and embracing the journey.',
    },
    {
      name: 'Respect & Responsibility',
      description:
        'We treat our team, our trails, and our communities with care. Every rider is accountable to each other and the environment we ride in.',
    },
  ]

  return (
    <section
      id="values"
      aria-label="Team values"
      className="pt-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our values
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our values guide every ride we take and every relationship we build. They reflect our heritage, our vision, and the kind of community we want to grow.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
