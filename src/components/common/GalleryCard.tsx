'use client';
import Image from 'next/image';
import { ReactElement, FC, useState } from 'react';

// import lightbox styles
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';

interface IProps {
  title: string;
  description?: string;
  imgCode: number;
}

const GalleryCard: FC<IProps> = ({
  title,
  description,
  imgCode,
}): ReactElement => {
  const [open, setOpen] = useState(false);

  const [slides] = useState([
    { src: '/assets/images/gallery/covers/image1.jpeg' },
    { src: '/assets/images/gallery/covers/image2.jpeg' },
    { src: '/assets/images/gallery/covers/image3.jpeg' },
  ]);

  return (
    <div onClick={() => setOpen(true)}>
      <div className="group relative aspect-video cursor-pointer overflow-hidden">
        <div className="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/90 to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <div>
            <div className="translate-y-4 transform space-y-3 p-4 transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 md:pb-10 md:text-xl">
              <div className="md:text-md font-bold">{title}</div>

              <div className="opacity-90 md:text-sm">
                {description ||
                  `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio dolores error iure, perferendis sequi totam.`}{' '}
              </div>
            </div>
          </div>
        </div>

        <Image
          src={`/assets/images/gallery/covers/image${imgCode}.jpeg`}
          fill={true}
          objectFit="cover"
          alt="gallery"
          className="aspect-square w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
          quality={100}
        />
      </div>

      <Lightbox
        open={open}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        plugins={[Thumbnails, Zoom, Counter]}
        close={() => setOpen(false)}
        slides={slides}
      />
    </div>
  );
};

export default GalleryCard;
