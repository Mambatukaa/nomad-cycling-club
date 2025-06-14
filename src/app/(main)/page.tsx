'use client'

import { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { Team } from '@/components/Team'
import { Values } from '@/components/Values'
import Image from 'next/image'
import groupImage from '@/images/team/group-image.jpg'

export default function Example() {

  return (
    <div className="bg-white">
      <main className="isolate">

        <Hero />
        <Mission />

        {/* Image section */}
        <div className="sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            className="aspect-5/2 w-full object-cover xl:rounded-3xl"
            alt=""
            src={groupImage}
            width={396}
            height={528}
            unoptimized
          />
        </div>

        <Values />
        <Team />

      </main>

    </div>
  )
}
