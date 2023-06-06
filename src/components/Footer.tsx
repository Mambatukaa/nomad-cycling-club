import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full justify-center bg-blue-dark">
      <div className="py-7 container">

        <div className="flex items-center justify-between">
          <div className="flex-col">
            <h1 className="text-3xl font-bold">Our mission & Goals</h1>
            <p className="w-[700px] text-xl">
              Our club is dedicated to providing a welcoming and supportive
              environment for all cyclists, regardless of their skill level or
              background.
            </p>
          </div>

          <Image
            src="/assets/images/logo.png"
            width={80}
            height={80}
            alt="logo"
          />
        </div>

        <hr className="my-3 h-1 w-full rounded border-0 md:my-5 bg-orange-primary" />

        <div className="container flex justify-between">
          <div>social</div>
          <p className="font-bold">Copyright 2023, Nomad Cycling Club.</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
