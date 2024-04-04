import { SOCIAL_ACCOUNTS } from '../constants';
import SocialIcon from './common/SocialIcon';

const Footer: React.FC = () => {
  return (
    <div
      id="contact"
      className="flex w-full scroll-mt-16 justify-center bg-blue-dark"
    >
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
            {SOCIAL_ACCOUNTS.map((account) => {
              return (
                <SocialIcon
                  key={account.name}
                  name={account.name}
                  url={account.url}
                  customStyle="fill-white p-1.5 hover:bg-white hover:fill-blue-dark h-8 w-8"
                />
              );
            })}
          </div>

          <p className="text-sm">Copyright 2024, Nomad Cycling Club.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
