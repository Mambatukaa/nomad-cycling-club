import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="relative flex h-screen">
      <div>

        <Image
          src={"/assets/images/background.jpg"}
          alt="background image"
          fill={true}
          style={{ objectPosition: 'left', objectFit:'cover'}}
          quality={100}
        />

        <div className="absolute inset-0 bg-gradient-to-l from-black opacity-40 max-lg:opacity-60 max-lg:bg-black"></div>
      </div>

      <div className="relative mx-auto grid-cols-3 self-center md:container max-lg:px-5 lg:grid">
        <div className="col-end-4">
          <h1 className="text-5xl font-bold leading-tight text-yellow">
            We are a team of Mongolian bike riders
          </h1>

          <p className="mt-4 text-2xl font-light leading-snug text-white">
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
