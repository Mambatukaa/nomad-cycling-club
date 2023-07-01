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

const Gallery = () => {
  const [open, setOpen] = React.useState(false);

  const [slides, setSlides] = React.useState([
    { src: "/assets/images/gallery/image1.jpeg" },
    { src: "/assets/images/gallery/image2.jpeg" },
    { src: "/assets/images/gallery/image3.jpeg" },
  ]);

  return (
    <div id="albums" className="flex bg-gray-100 py-24">
      <div className="container mx-auto">
        <div className="max-md:px-5">
          <h1 className="text-5xl font-bold text-blue-primary">Photo Albums</h1>
          <p className="mt-4 text-lg text-black md:w-[485px]">
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
          </p>
        </div>

        <div className="my-14 grid h-96 grid-cols-2">
          <div className="relative pr-1" onClick={() => setOpen(true)}>
            <GalleryCard title="2021 Competition" />
          </div>

          <div className="relative pl-1">
            <GalleryCard title="2022 Competition" />
          </div>
        </div>
      </div>

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
