import Image from "next/image";
import { ReactElement, FC } from "react";

interface IProps {
  title: string;
  description?: string;
}

const GalleryCard: FC<IProps> = ({ title, description }): ReactElement => {
  return (
    <div className="pt-3">
      <div className="group relative aspect-video cursor-pointer overflow-hidden">
        <div className="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/90 to-transparent opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <div>
            <div className="translate-y-4 transform space-y-3 p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="font-bold ">{title}</div>

              <div className="text-sm opacity-90 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio dolores error iure, perferendis sequi totam. Ad
                aliquam aperiam atque deleniti dolor dolorem enim esse et in,
                inventore itaque, pariatur reprehenderit.
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/gallery/image1.jpeg"
          fill={true}
          objectFit="cover"
          alt="gallery"
          className="aspect-square w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default GalleryCard;
