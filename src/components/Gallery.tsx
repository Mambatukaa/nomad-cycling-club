"use client";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import GalleryCard from "./common/GalleryCard";
import Section from "./common/Section";

const Gallery = () => {
  const [open, setOpen] = React.useState(false);

  const [slides, setSlides] = React.useState([
    { src: "/assets/images/gallery/covers/image1.jpeg" },
    { src: "/assets/images/gallery/covers/image2.jpeg" },
    { src: "/assets/images/gallery/covers/image3.jpeg" },
  ]);

  return (
    <div id="albums" className="flex bg-gray-100 scroll-mt-16">
      <Section
        title="Photo Albums"
        description={`
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
        
        `}
      >
        <div className="mb-1 grid lg:grid-cols-2 gap-1">
          <GalleryCard onClick={() => setOpen(true)} title="2021 Competition" imgCode={1} />
          <GalleryCard onClick={() => setOpen(true)} title="2022 Competition" imgCode={2} />
        </div>

        <div className="mb-1 grid lg:grid-cols-3 gap-1">
          <GalleryCard onClick={() => setOpen(true)} title="2021 Competition" imgCode={3} />
          <GalleryCard onClick={() => setOpen(true)} title="2022 Competition" imgCode={4} />
          <GalleryCard onClick={() => setOpen(true)} title="2022 Competition" imgCode={5} />
        </div>

        <div className="mb-1 grid lg:grid-cols-2 gap-1">
          <GalleryCard onClick={() => setOpen(true)} title="2021 Competition" imgCode={7} />
          <GalleryCard onClick={() => setOpen(true)} title="2021 Competition" imgCode={8} />
        </div>
      </Section>

      <Lightbox
        open={open}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        plugins={[Thumbnails, Zoom, Counter]}
        close={() => setOpen(false)}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
