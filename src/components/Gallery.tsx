import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex bg-white pb-20">

      <div className="container mx-auto">

          <h1 className="text-5xl font-bold text-blue-primary my-10">
            Picture Gallery
          </h1>

        <div className="grid grid-cols-2 h-96">

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image1.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image2.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

        </div>

        <div className="grid grid-cols-4 h-96">

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image3.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image4.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image11.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image6.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

        </div>

        <div className="grid grid-cols-2 h-96">

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image7.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image8.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 h-128">

          <div className="relative p-3">

            <Image
              src="/assets/images/gallery/image13.jpeg"
              fill={true}
              objectFit="cover"
              alt="gallery"
              className="pt-3 px-1.5"
            />
          </div>

        </div>


      </div>
    </div>
  );
};

export default Gallery;
