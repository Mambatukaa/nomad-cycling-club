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
    <div id="gallery" className="flex h-[calc(100vh-64px)] bg-white pb-20">
      <div className="container mx-auto">
        <h1 className="my-10 text-5xl font-bold text-blue-primary">
          Picture Gallery
        </h1>

        <div className="grid h-96 grid-cols-2">
          <div className="relative p-1" onClick={() => setOpen(true)}>
            <GalleryCard title="2021 Competition" />
          </div>

          <div className="relative p-1">
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
