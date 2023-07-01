"use client";
import LeaderCard from "./common/LeaderCard";
import { LEADERS } from "../contants";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Leaders = () => {
  return (
    <div id="leaders" className="flex bg-gray-200 py-24">
      <div className="container mx-auto">
        <div className="max-md:px-5">
          <h1 className="text-5xl font-bold text-blue-primary">
            Nomads Leadership
          </h1>
          <p className="mt-4 text-lg text-black md:w-[485px]">
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
          </p>
        </div>

        <div className="my-14 max-md:px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {LEADERS.map((leader, index) => (
              <SwiperSlide key={leader.id} virtualIndex={index}>
                <LeaderCard key={leader.id} leader={leader} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
