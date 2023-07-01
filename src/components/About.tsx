import Image from "next/image";

import Background from "../../public/assets/images/background.jpg";

const About: React.FC = () => {
  return (
    <div id="about" className="relative flex h-screen">

      <div className="max-md:hidden">
        <Image
          src={Background}
          alt="background image"
          fill={true}
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black opacity-40 "></div>
      </div>

      <div className="relative mx-auto md:grid grid-cols-3 self-center md:container max-md:px-5">

        <div className="col-end-4">
          <h1 className="text-5xl font-bold text-yellow leading-tight">
            We are a team of Mongolian bike riders
          </h1>

          <p className="mt-4 text-2xl text-white font-light leading-snug">
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud. We offer a range of rides and events that cater to
            different interest and abilities, so everyone can find their place
            in our community.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
