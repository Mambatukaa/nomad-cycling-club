import Image from "next/image";
import { ReactElement, FC } from "react";

interface IProps {
  title: string;
  description?: string;
  imgCode: number;
  onClick: () => void;
}

const GalleryCard: FC<IProps> = ({
  title,
  description,
  imgCode,
  onClick
}): ReactElement => {
  return (
    <div onClick={() => onClick()}>
      <div className="group relative aspect-video cursor-pointer overflow-hidden">
        <div className="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/90 to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <div>
            <div className="translate-y-4 transform space-y-3 p-4 transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 md:pb-10 md:text-xl">
              <div className="md:text-md font-bold">{title}</div>

              <div className="opacity-90 md:text-sm">
                {description ||
                  `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio dolores error iure, perferendis sequi totam.`}{" "}
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
    </div>
  );
};

export default GalleryCard;
