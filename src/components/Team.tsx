import { Container } from "./Container";
import Image from "next/image";
import teamImageMount from "@/images/team/team-mount-1.jpg";
import teamImageMountII from "@/images/team/team-mount-2.jpg";
import jackMount from "@/images/team/jack-mount-1.jpg";
import ulziiNature from "@/images/team/ulzii-image-1.jpg";

export function Team() {
  return (
    <section
      id="team"
      aria-label="Our people"
      className="pt-20"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Our Team
              </h2>
              <p className="mt-6 text-xl/8 text-gray-600">
                We are a team of passionate cyclists and organizers united by a shared love for riding, culture, and community. Each of us brings a unique perspective from route planning to cultural outreach but we all ride together with the same spirit: connected, inclusive, and proud.
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Founded by Mongolian cyclists in Washington State, Nomad Cycling Club is powered by volunteers who believe in building a strong and supportive space for everyone whether you’re on your first ride or your hundredth.
              </p>
            </div>

            {/* Team image layout */}
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">

                <Image
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover"
                  alt="Riding in nature"
                  src={teamImageMount}
                  height={842}
                  width={1152}
                  unoptimized
                />
              </div>

              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">

                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">

                  <Image
                    className="aspect-2/3 w-[15rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    alt="Ulzii riding in nature"
                    src={ulziiNature}
                    height={800}
                    width={1100}
                    unoptimized
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    className="aspect-8/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    alt="Riding in nature II"
                    src={teamImageMountII}
                    height={800}
                    width={1100}
                    unoptimized
                  />

                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    className="aspect-7/5 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    alt="Jack in nature"
                    src={jackMount}
                    height={800}
                    width={1100}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
