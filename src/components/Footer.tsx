import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full justify-center bg-blue-dark">
      <div className="container py-7">
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

        <hr className="h-1 w-full rounded border-0 bg-orange-primary md:my-4" />

        <div className="container flex justify-between">
          <div
            className="flex
          "
          >
            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-2.5 rounded-full bg-gray-200 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rounded-full p-0.5 bg-social-facebook"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-2.5 rounded-full bg-gray-200 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rounded-full p-0.5 bg-social-twitter"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>

          <p className="text-sm">Copyright 2023, Nomad Cycling Club.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
