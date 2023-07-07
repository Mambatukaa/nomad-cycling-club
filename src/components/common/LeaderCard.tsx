import { ILeader } from "@/types";
import React, { FC, ReactElement } from "react";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark  p-1.5 hover:bg-blue-primary hover:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark  p-0.5 hover:bg-blue-primary hover:fill-white"
              >
                <path d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/nomadcyclingclub"
              target="_blank"
              role="button"
              className="mr-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                className="h-7 w-7 rounded-full border border-blue-dark fill-blue-dark  p-1 hover:bg-blue-primary hover:fill-white"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
