import * as React from "react";
import GalleryCard from "./common/GalleryCard";
import Section from "./common/Section";

const Gallery = () => {
  return (
    <div id="albums" className="flex scroll-mt-16 bg-gray-100">
      <Section
        title="Photo Albums"
        description={`
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
        
        `}
      >
        <div className="mb-1 grid gap-1 lg:grid-cols-2">
          <GalleryCard title="2021 Competition" imgCode={1} />
          <GalleryCard title="2022 Competition" imgCode={2} />
        </div>

        <div className="mb-1 grid gap-1 lg:grid-cols-3">
          <GalleryCard title="2021 Competition" imgCode={3} />
          <GalleryCard title="2022 Competition" imgCode={4} />
          <GalleryCard title="2022 Competition" imgCode={5} />
        </div>

        <div className="mb-1 grid gap-1 lg:grid-cols-2">
          <GalleryCard title="2021 Competition" imgCode={7} />
          <GalleryCard title="2021 Competition" imgCode={8} />
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
