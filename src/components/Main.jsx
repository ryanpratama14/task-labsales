import React, { useState } from "react";
import bg from "../assets/bg.png";
import bgMobile from "../assets/bgMobile.png";
import Navbar from "./Navbar";
import { MainPageData } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination } from "swiper";
import NavbarMobile from "./NavbarMobile";

export default function Main() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="relative gap-12 flex-col min-h-screen flex justify-center items-center paddingX">
      <img
        src={bg}
        className="absolute  w-full h-full object-cover max-md:hidden"
      />
      <img
        src={bgMobile}
        className="absolute w-full h-full object-cover md:hidden"
      />
      <Navbar />
      <NavbarMobile />
      <div className="text-primary flex items-center text-center justify-center flex-col z-10 gap-10 pt-32 md:pt-longer">
        <h3 className="md:hidden font-medium text-primaryDarker">
          Главная / Жилые комплексы /<br />
          <span className="font-semibold">/ Яблоновский</span>
        </h3>
        <h1 className="font-raleway">
          Жилой Комплекс
          <span className="font-bold max-md:hidden"> «Яблоновский»</span>
          <br />
          <span className="font-bold md:hidden">«Яблоновский»</span>
        </h1>
        <div className="flex flex-col gap-4 text-center ">
          <h3 className="md:inline-block hidden">
            Краснодар, пгт. Яблоновский ул. Кобцевой
          </h3>
          <h3 className="md:hidden">
            Краснодар,
            <br />
            пгт. Яблоновский ул. Кобцевой
          </h3>
          <h3 className="font-bold">от 63 801 до 65 678 ₽/м²</h3>
        </div>
        <button>Узнать стоимость проекта</button>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 w-full z-[2]">
          {MainPageData?.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className="p-4 round bg-gray relative cursor-pointer shadowbox"
              >
                <div className="w-6 bg-gray left-4 centered aspect-square rounded-full absolute flex justify-center items-center">
                  <div
                    className={`absolute rounded-full w-[0.8rem] animate aspect-square ${
                      selected === i
                        ? "bg-blue shadow-[0px_0px_12px_1px_#C4C4C4]"
                        : "bg-white shadow-[2px_0px_12px_0px_#C4C4C4]"
                    }`}
                  />
                </div>
                <div className="p-4 lg:px-6 round bg-white shadowboxchildren">
                  <div key={i} className="flex flex-col gap-2 text-left">
                    <h5>{e?.label}</h5>
                    <h5 className="font-bold">{e?.desc}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Swiper For Mobile */}
      <Swiper
        slidesPerView="auto"
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={40}
        keyboard={true}
        className="w-full md:hidden"
        modules={[Keyboard, Mousewheel]}
        onSlideChange={(e) => {
          setSelected(e?.activeIndex);
        }}
      >
        {MainPageData?.map((e, i) => {
          return (
            <SwiperSlide
              key={i}
              onClick={() => setSelected(i)}
              className="p-4 round bg-gray relative cursor-pointer shadowbox w-[70%]"
            >
              <div className="w-6 bg-gray left-4 centered aspect-square rounded-full absolute flex justify-center items-center">
                <div
                  className={`absolute rounded-full w-[0.8rem] animate aspect-square ${
                    selected === i
                      ? "bg-blue shadow-[0px_0px_12px_1px_#C4C4C4]"
                      : "bg-white shadow-[2px_0px_12px_0px_#C4C4C4]"
                  }`}
                />
              </div>
              <div className="p-4 round bg-white shadowboxchildren text-primary">
                <div className="flex flex-col gap-2">
                  <h3 className="">{e?.label}</h3>
                  <h3 className="font-bold">{e?.desc}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
