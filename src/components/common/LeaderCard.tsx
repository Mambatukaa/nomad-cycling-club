import { ILeader } from "@/types";
import React, { FC, ReactElement } from "react";

import Instagram from "../../../public/assets/logos/instagram.svg";
import Facebook from "../../../public/assets/logos/facebook.svg";
import Linkedin from "../../../public/assets/logos/linkedin.svg";

import Image from "next/image";

type LeaderCardProps = {
  leader: ILeader;
};

const LeaderCard: FC<LeaderCardProps> = ({ leader }): ReactElement => {
  const { fullName, summary, role, avatar } = leader;

  return (
    <div className="mt-16 h-128">
      <div className="relative h-[26rem] max-w-md rounded-xl bg-white p-8 text-black shadow-lg">
        <Image
          className="absolute -top-12 h-24 w-24 rounded-full object-cover"
          src={avatar}
          width={80}
          height={80}
          alt="logo"
          quality={100}
        />

        <p className="mt-10 h-36 text-lg">{summary}</p>

        <hr className="mb-8 mt-14 h-0.5 rounded bg-gray-200" />

        <div>
          <p className="font-bold">{fullName}</p>

          <p className="text-gray-500">{role}</p>

          <div className="mt-2 flex">
            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <Facebook className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark  p-1.5 hover:bg-blue-primary hover:fill-white" />
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <Linkedin className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark p-0.5 hover:bg-blue-primary hover:fill-white" />
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <Instagram className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark  p-1 hover:bg-blue-primary hover:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
