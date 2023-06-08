import Image from "next/image";

type LeaderCardProps = {
  leader: any;
};

const LeaderCard: React.FC<LeaderCardProps> = ({ leader }) => {
  return (
    <div className="mt-16">
      <div className="relative max-w-sm rounded-lg bg-white p-8 text-black">

        <Image
          className="absolute h-20 w-20 -top-10 rounded-full object-cover"
          src="/assets/images/profile.JPG"
          width={80}
          height={80}
          alt="logo"
        />

        <p className="text-lg mt-5">
          Our club is dedicated to providing a welcoming and supportive
          environment for all cyclists, regardless of their skill level or
          backgroud.
        </p>

        <hr className="my-3 h-0.5 rounded bg-black" />

        <div>
          <p className="font-bold">Lydia Westervelt</p>

          <p>Software engineer</p>

          <div className="flex mt-2">
            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1 rounded-full bg-gray-200 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 rounded-full bg-social-facebook"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1 rounded-full bg-gray-200 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 rounded-full bg-social-facebook"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;