import { Container } from "./Container"

export function Mission() {
  const stats = [
    { label: 'Members across Washington State', value: '50+' },
    { label: 'Group rides per year', value: '80+' },
    { label: 'Events celebrating culture & community', value: '10+' },
  ]

  return (
    <section
      id="mission"
      aria-label="Our mission"
      className="pt-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  At Nomad Cycling Club, our mission is to build an inclusive cycling community that brings together riders of all backgrounds while honoring our Mongolian roots.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  We aim to inspire wellness, cultural pride, and a spirit of exploration through group rides, events, and shared experiences. Whether you’re riding for fitness, connection, or adventure, you’ll find a supportive and welcoming home with Nomad.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
