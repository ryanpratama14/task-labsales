import React, { useState } from "react";
import { Icon } from "@iconify/react";
import architecture from "../assets/description/architecture.png";
import security from "../assets/description/security.png";
import parking from "../assets/description/parking.png";
import territory from "../assets/description/territory.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Arrow from "./Arrow";

export default function Description() {
  const [data, setData] = useState([
    {
      id: 0,
      src: parking,
      label: "Парковка",
      active: false,
      desc: (
        <>
          Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт.
          Яблоновский. За пять минут пешком можно дойти до муниципальной
          поликлиники, школы и детского садика.
          <br />
          Этот жилой комплекс располагается в непосредственной близости от улицы
          Гагарина, где проходит абсолютное большинство маршрутов общественного
          транспорта, соответственно легко добраться во все части поселка и
          города Краснодар. Тут же располагается магазин «Магнит», «Магнит
          Косметик», МФЦ, овощной рынок, мебельные магазины, аптеки и другие
          предприятия сферы услуг.
        </>
      ),
    },
    {
      id: 1,
      src: architecture,
      label: "Архитектура",
      active: false,
      desc: (
        <>
          Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт.
          Яблоновский. За пять минут пешком можно дойти до муниципальной
          поликлиники, школы и детского садика.
          <br />
          Этот жилой комплекс располагается в непосредственной близости от улицы
          Гагарина, где проходит абсолютное большинство маршрутов общественного
          транспорта, соответственно легко добраться во все части поселка и
          города Краснодар. Тут же располагается магазин «Магнит», «Магнит
          Косметик», МФЦ, овощной рынок, мебельные магазины, аптеки и другие
          предприятия сферы услуг.
        </>
      ),
    },
    {
      id: 2,
      src: security,
      label: "Охрана",
      active: false,
      desc: (
        <>
          Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт.
          Яблоновский. За пять минут пешком можно дойти до муниципальной
          поликлиники, школы и детского садика.
          <br />
          Этот жилой комплекс располагается в непосредственной близости от улицы
          Гагарина, где проходит абсолютное большинство маршрутов общественного
          транспорта, соответственно легко добраться во все части поселка и
          города Краснодар. Тут же располагается магазин «Магнит», «Магнит
          Косметик», МФЦ, овощной рынок, мебельные магазины, аптеки и другие
          предприятия сферы услуг.
        </>
      ),
    },
    {
      id: 3,
      src: territory,
      label: "Территория",
      active: true,
      desc: (
        <>
          Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт.
          Яблоновский. За пять минут пешком можно дойти до муниципальной
          поликлиники, школы и детского садика.
          <br />
          Этот жилой комплекс располагается в непосредственной близости от улицы
          Гагарина, где проходит абсолютное большинство маршрутов общественного
          транспорта, соответственно легко добраться во все части поселка и
          города Краснодар. Тут же располагается магазин «Магнит», «Магнит
          Косметик», МФЦ, овощной рынок, мебельные магазины, аптеки и другие
          предприятия сферы услуг.
        </>
      ),
    },
  ]);

  const [selected, setSelected] = useState(3);
  const handleChange = (e) => {
    setSelected(e.id);
    const temp = data.map((item) => {
      return {
        ...item,
        active: item.id === e.id ? true : false,
      };
    });
    setData(temp);
  };

  return (
    <section className="flex flex-col gap-8 py-normal">
      <div className="paddingX flex flex-col gap-6 text-center justify-center items-center">
        <h2 className="text-primary font-bold">Описание Жилого Комплекса</h2>
        <div className="flex flex-wrap  text-center items-center text-primaryDarker font-medium">
          <div className="flex text-center items-center justify-center w-full lg:w-fit">
            <p className="text-2xl text-center">Нажмите</p>
            <span>
              <Icon icon="material-symbols:arrow-back-ios-new" width={18} />
            </span>
            <span>
              <Icon
                icon="material-symbols:arrow-back-ios-new"
                rotate={2}
                width={18}
              />
            </span>
          </div>
          <p className="text-2xl lg:w-fit w-full">
            чтобы подробно ознакомится с проектом{" "}
          </p>
        </div>
      </div>
      <div className="paddingX flex gap-x-8 gap-y-6 flex-wrap">
        {data?.map((e, i) => {
          return (
            <div
              onClick={() => handleChange(e)}
              key={e?.id}
              className="cursor-pointer p-4 w-full xl:w-[20%] bg-gray round shadowboxfeatures"
            >
              <div
                className={`px-4 py-4 lg:py-6 animate border-[1px] bg-white relative round shadowboxfeatureschildren
              ${
                selected === e?.id
                  ? "border-blue text-blue"
                  : "text-primary border-transparent"
              }
              `}
              >
                <div
                  className={`centered -left-[0.123rem] w-3 aspect-square absolute rounded-full bg-[#e6eaee]  ${
                    selected === e?.id && "shadow-[1px_0px_0px_0px_#31BEF4]"
                  }`}
                />
                <h4 className="font-semibold text-center lg:text-left">
                  {e?.label}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="paddingX hidden md:grid grid-cols-4 grid-rows-3 gap-8">
        {data?.map((e) => {
          return (
            e?.active && (
              <div className="row-span-3 col-span-3 relative">
                <img src={e?.src} className="absolute w-full h-full" />
                <div className="p-4 absolute left-6 bottom-12 flex flex-col gap-8 w-[70%] bg-[#ffff]/80 round">
                  <h4 className="text-primary font-bold">{e?.label}</h4>
                  <p className="text-primaryDarker font-normal">{e?.desc}</p>
                </div>
              </div>
            )
          );
        })}
        {data?.map((e) => {
          return (
            !e?.active && (
              <img
                onClick={() => {
                  handleChange(e);
                }}
                src={e?.src}
                className="w-full h-full col-span-1 round cursor-pointer"
              />
            )
          );
        })}
      </div>
      <div className="flex flex-col gap-6">
        <Swiper
          slidesPerView={1}
          mousewheel={{
            forceToAxis: true,
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          loop={true}
          keyboard={true}
          className="w-full"
          modules={[Navigation]}
        >
          {data?.map((e) => {
            return (
              <SwiperSlide className="relative h-[40rem] w-full">
                <img
                  src={e?.src}
                  className="object-cover absolute w-full h-full rounded-b-[10px]"
                />
                <div className="absolute px-6 bottom-12">
                  <div className="p-6 flex flex-col gap-8 w-full bg-[#ffff]/80 round">
                    <div className="flex justify-between items-center">
                      <h2 className="text-primary font-bold">{e?.label}</h2>
                      <Arrow />
                    </div>
                    <p className="text-primaryDarker font-normal">
                      Жилой комплекс "Яблоновский" расположен на ул. Кобцевой
                      Н.С. в пгт. Яблоновский. За пять минут пешком можно дойти
                      до муниципальной поликлиники, школы и детского садика.
                      Этот жилой комплекс располагается
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
