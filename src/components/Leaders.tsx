"use client";
import LeaderCard from "./common/LeaderCard";
import { LEADERS } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "./common/Section";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Leaders = () => {
  return (
    <div id="leaders" className="flex bg-gray-200">
      <Section
        title="Nomads Leadership"
        description={`
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
        
        `}
      >
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
      </Section>
    </div>
  );
};

export default Leaders;
