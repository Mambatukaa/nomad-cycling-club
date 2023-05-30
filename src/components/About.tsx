import Image from "next/image";

import Background from "../../public/assets/images/background.jpg";

const About: React.FC = () => {
  return (
    <div className="relative flex h-screen">
      <div>
        <Image
          src={Background}
          alt="background image"
          fill={true}
          objectFit="cover"
        />
      </div>

      <div className="relative mx-auto grid grid-cols-3 self-center md:container">
        <div className="col-end-4">
          <h1 className="text-5xl font-bold text-yellow">
            We are a team of Mongolian bike riders
          </h1>

          <p className="mt-4 text-2xl text-white">
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
