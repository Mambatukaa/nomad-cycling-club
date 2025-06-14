'use client';
import Image from "next/image";
import { Container } from "./Container";
import dogImage from "@/images/team/dog-image.jpg";
import jackImage from "@/images/team/jack-image-1.jpg";
import bicycleImage from "@/images/other/bicycle-image-1.jpg";

export function Hero() {
  return (

    <section id="about">
      <Container>
        <div className="relative isolate -z-10 bg-white" >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    We are a team of Mongolian bike riders
                  </h1>
                  <p className="mt-8 text-lg text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Nomad Cycling Club is a community founded by Mongolian riders and based in Washington State. We welcome cyclists of all backgrounds and skill levels from beginners to experienced riders who share a passion for cycling, adventure, and connection.<br /><br />

                    Our club offers a variety of rides and events throughout the state, ranging from casual group rides to challenging routes, so everyone can find their place. Whether you are riding to explore, train, or connect with others, Nomad is where culture and cycling come together.<br /><br />

                    At Nomad, we ride with pride, purpose, and the spirit of the open road.
                  </p>
                </div>
                <div className="mt-16 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <Image
                        className="aspect-2/3 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        alt=""
                        src={jackImage}
                        width={396}
                        height={528}
                        unoptimized
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">

                      <Image
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        alt=""
                        src={dogImage}
                        width={396}
                        height={528}
                        unoptimized
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900 /10 ring-inset" />

                    </div>
                    <div className="relative">

                      <Image
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        alt=""
                        src={bicycleImage}
                        width={396}
                        height={528}
                        unoptimized
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>



    </section >

  )
}
