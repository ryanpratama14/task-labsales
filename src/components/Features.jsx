import React from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import { FeaturesData, FeaturesData2 } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination } from "swiper";
import Eclipses from "./Eclipses";

export default function Features() {
  return (
    <section className="pb-normal relative">
      <div className="absolute -top-8 right-2 flex justify-between w-32 md:hidden z-20">
        <Eclipses />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between -mt-[4rem] md:-mt-24 lg:-mt-56 z-[1] overflow-hidden lg:pt-12">
          <img src={cloud3} className="lg:hidden w-full h-32" />
          <img src={cloud1} className="lg:block hidden lg:scale-[1.3]" />
          <img src={cloud2} className="lg:block hidden lg:scale-[1.3]" />
        </div>
        <div className="paddingX flex flex-col justify-center items-center gap-6 z-10">
          <h1 className="text-primary md:h2 lg:hidden inline-block font-bold">
            О комплексе
          </h1>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 w-full">
            {FeaturesData?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="py-8 px-4 bg-gray round shadowboxfeatures"
                >
                  <div className="flex gap-6 lg:gap-4">
                    <div className="px-4 py-2 bg-white relative round shadowboxfeatureschildren">
                      <div className="centered left-0 w-2 h-3 absolute rounded-full bg-[#e6eaee]" />
                      <img src={e?.icon} className="w-8 xl:w-12" />
                    </div>
                    <div className="flex flex-col justify-between text-primary">
                      <h5 className="p lg:h5">{e?.label}</h5>
                      <h5 className="pSmaller font-semibold lg:h5">
                        {e?.desc}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Swiper
            slidesPerView={1}
            mousewheel={{
              forceToAxis: true,
            }}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            loop={true}
            keyboard={true}
            className="w-full md:hidden p-6 h-96"
            modules={[Keyboard, Pagination, Mousewheel]}
          >
            {FeaturesData2?.map((e, i) => {
              return (
                <SwiperSlide key={i} className="flex flex-col gap-6">
                  <div className="py-8 px-4 bg-gray round shadowboxfeatures">
                    <div className="flex gap-6">
                      <div className="px-5 py-3 bg-white relative round shadowboxfeatureschildren">
                        <div className="centered left-0 w-2 h-3 absolute rounded-full bg-[#e6eaee]" />
                        <img src={e?.icon} className="w-12" />
                      </div>
                      <div className="flex flex-col justify-between text-primary">
                        <h3>{e?.label}</h3>
                        <h3 className="font-semibold">{e?.desc}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="py-8 px-4 bg-gray round shadowboxfeatures">
                    <div className="flex gap-6">
                      <div className="px-5 py-3 bg-white relative round shadowboxfeatureschildren">
                        <div className="centered left-0 w-2 h-3 absolute rounded-full bg-[#e6eaee]" />
                        <img src={e?.icon2} className="w-12" />
                      </div>
                      <div className="flex flex-col justify-between text-primary">
                        <h3>{e?.label2}</h3>
                        <h3 className="font-semibold">{e?.desc2}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
