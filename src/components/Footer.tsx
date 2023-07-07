import Image from "next/image";

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

        <div className="container flex justify-between items-center">

          <div className="flex">
            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-full border border-white fill-white  p-1.5 hover:bg-white hover:fill-blue-dark"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="https://nomadcyclingclub.sharepoint.com/"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="h-8 w-8 rounded-full border border-white fill-white p-1.5 hover:bg-white hover:fill-blue-dark"
              >
                <path d="M 29.03125 0 C 28.957031 -0.00390625 28.886719 0.015625 28.8125 0.03125 L 0.8125 5.3125 C 0.339844 5.402344 0 5.832031 0 6.3125 L 0 43.59375 C 0 44.074219 0.339844 44.503906 0.8125 44.59375 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.300781 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.453125 0.078125 29.25 0.0078125 29.03125 0 Z M 32 8.09375 L 32 19.90625 C 34.304688 19.535156 36.121094 17.882813 36.75 15.6875 C 38.671875 16.488281 40.277344 17.847656 41.40625 19.59375 C 39.394531 20.5625 38 22.621094 38 25 C 38 27.363281 39.386719 29.398438 41.375 30.375 C 40.242188 32.097656 38.632813 33.425781 36.71875 34.21875 C 36.0625 32.070313 34.273438 30.460938 32 30.09375 L 32 41.90625 C 34.789063 41.457031 36.851563 39.148438 36.96875 36.25 C 39.664063 35.269531 41.890625 33.433594 43.34375 30.96875 C 43.554688 30.992188 43.78125 31 44 31 C 47.308594 31 50 28.308594 50 25 C 50 21.691406 47.308594 19 44 19 C 43.804688 19 43.597656 19.011719 43.40625 19.03125 C 41.953125 16.519531 39.703125 14.648438 36.96875 13.65625 C 36.808594 10.800781 34.757813 8.539063 32 8.09375 Z M 14.59375 15.40625 C 15.59375 15.40625 16.394531 15.492188 17.09375 15.59375 C 17.792969 15.695313 18.492188 15.894531 19.09375 16.09375 L 19.09375 20 C 18.792969 19.800781 18.492188 19.605469 18.09375 19.40625 C 17.695313 19.207031 17.398438 19.101563 17 19 C 16.601563 18.898438 16.207031 18.8125 15.90625 18.8125 C 15.507813 18.710938 15.210938 18.6875 14.8125 18.6875 C 14.3125 18.6875 13.898438 18.710938 13.5 18.8125 C 13.101563 18.914063 12.800781 18.988281 12.5 19.1875 C 12.199219 19.386719 12.007813 19.613281 11.90625 19.8125 C 11.804688 20.011719 11.6875 20.292969 11.6875 20.59375 C 11.6875 20.894531 11.804688 21.207031 11.90625 21.40625 C 12.105469 21.605469 12.292969 21.894531 12.59375 22.09375 C 12.894531 22.292969 13.289063 22.488281 13.6875 22.6875 C 14.085938 22.886719 14.59375 23.113281 15.09375 23.3125 C 15.792969 23.613281 16.492188 23.914063 17.09375 24.3125 C 17.695313 24.613281 18.195313 25 18.59375 25.5 C 18.992188 25.898438 19.292969 26.398438 19.59375 27 C 19.792969 27.601563 19.90625 28.207031 19.90625 28.90625 C 19.804688 30.007813 19.613281 30.800781 19.3125 31.5 C 18.914063 32.199219 18.386719 32.789063 17.6875 33.1875 C 16.988281 33.585938 16.304688 33.894531 15.40625 34.09375 C 14.507813 34.292969 13.59375 34.40625 12.59375 34.40625 C 11.59375 34.40625 10.585938 34.292969 9.6875 34.09375 C 8.789063 33.992188 8.007813 33.707031 7.40625 33.40625 L 7.40625 29.3125 C 8.105469 29.914063 8.914063 30.386719 9.8125 30.6875 C 10.710938 30.988281 11.507813 31.1875 12.40625 31.1875 C 12.90625 31.1875 13.414063 31.195313 13.8125 31.09375 C 14.210938 30.992188 14.511719 30.886719 14.8125 30.6875 C 15.113281 30.488281 15.304688 30.292969 15.40625 30.09375 C 15.507813 29.894531 15.59375 29.605469 15.59375 29.40625 C 15.59375 29.007813 15.511719 28.707031 15.3125 28.40625 C 15.113281 28.105469 14.800781 27.894531 14.5 27.59375 C 14.101563 27.394531 13.6875 27.105469 13.1875 26.90625 C 12.6875 26.707031 12.195313 26.488281 11.59375 26.1875 C 10.195313 25.585938 9.105469 24.898438 8.40625 24 C 7.707031 23.101563 7.3125 22.105469 7.3125 20.90625 C 7.3125 19.90625 7.507813 19.105469 7.90625 18.40625 C 8.304688 17.707031 8.800781 17.1875 9.5 16.6875 C 10.199219 16.289063 10.914063 15.886719 11.8125 15.6875 C 12.710938 15.488281 13.59375 15.40625 14.59375 15.40625 Z" />
              </svg>
            </a>
          </div>

          <p className="text-sm">
            Copyright 2023, Nomad Cycling Club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
