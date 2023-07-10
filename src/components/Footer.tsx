import Email from "../../public/assets/logos/email.svg";
import SharePoint from "../../public/assets/logos/sharepoint.svg";
import Facebook from "../../public/assets/logos/facebook.svg";

const Footer: React.FC = () => {
  return (
    <div id="contact" className="flex w-full justify-center bg-blue-dark">
      <div className="container py-14 max-lg:px-5">
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <h1 className="text-3xl font-bold">Our mission & Goals</h1>

            <p className="mt-4 text-xl font-light leading-snug md:w-[700px]">
              Our club is dedicated to providing a welcoming and supportive
              environment for all cyclists, regardless of their skill level or
              background.
            </p>
          </div>
        </div>

        <hr className="my-5 h-1 w-full rounded border-0 bg-orange-primary" />

        <div className="container flex items-center justify-between">
          <div className="flex">
            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <Facebook className="h-8 w-8 rounded-full border border-white fill-white p-1.5 hover:bg-white hover:fill-blue-dark" />
            </a>

            <a
              href="https://nomadcyclingclub.sharepoint.com/"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <SharePoint className="h-8 w-8 rounded-full border border-white fill-white p-1.5 hover:bg-white hover:fill-blue-dark" />
            </a>

            <a
              href="mailto:support@nomadcyclingclub.com"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <Email className="h-8 w-8 rounded-full border border-white fill-white p-1.5 hover:bg-white hover:fill-blue-dark" />
            </a>
          </div>

          <p className="text-sm">Copyright 2023, Nomad Cycling Club.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
