import React, { useEffect, useState } from "react";
import {
  clinicIcon,
  gasolineIcon,
  kindergartenIcon,
  locationIcon,
  storeIcon,
} from "./Icons";
import IconMouse from "./IconMouse";
import Eclipses from "./Eclipses";

const data = [
  {
    icon: storeIcon(),
    label: "Магазины",
    src: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=38.943903%2C44.998971&mode=search&sll=38.927387%2C44.990846&sspn=0.025234%2C0.012638&text=%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B&z=13.92",
  },
  {
    icon: locationIcon(),
    label: "ЖК “Яблоновский”",
    src: "https://yandex.ru/map-widget/v1/?ll=38.926543%2C44.990044&mode=search&oid=54806867593&ol=biz&sctx=ZAAAAAgBEAAaKAoSCYLix5i7dkNAEZ%2FHKM%2B8fkZAEhIJyCO4kbJFcj8RYHMOnglNYj8iBgABAgMEBSgKOABAt60HSAFqAnJ1nQHNzEw9oAEAqAEAvQEePH%2FnwgEGid35lcwB6gEA8gEA%2BAEAggIh0JbQmiDigJzQr9Cx0LvQvtC90L7QstGB0LrQuNC54oCdigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=38.926543%2C44.990044&sspn=0.012020%2C0.006020&text=%D0%96%D0%9A%20%E2%80%9C%D0%AF%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%E2%80%9D&z=17.07",
  },
  {
    icon: kindergartenIcon(),
    label: "Детский сад",
    src: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=38.943903%2C44.998971&mode=search&sll=38.943903%2C44.998971&sspn=0.106692%2C0.053427&text=%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D0%B0%D0%B4&z=12.9",
  },
  ,
  {
    icon: gasolineIcon(),
    label: "АЗС",
    src: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=38.971841%2C44.996252&mode=search&sctx=ZAAAAAgBEAAaKAoSCVPMQdDReENAEYJTH0jef0ZAEhIJT62%2BuipQyz8Rur963Ldauz8iBgABAgMEBSgKOABA64cGSAFqAnJ1nQHNzEw9oAEAqAEAvQGOnhJFwgGHAdyI8OADjIGVpQWt%2B%2FuYzgTJxeX2A%2BfP7cgG26bwuQWA2aC5BqLIxsmFBI3ow6EF1pKwygbSifOv%2BQXml5OlBIqnwtIGsLDlg6UB27GJ%2Be8FtZvnke8C66ez4k3jltm0kwWXyrKMBPTSvam%2FAfzRxv0Di42unbUE39OK8wOr1aGeBIqshP6xBOoBAPIBAPgBAIICBtCQ0JfQoYoCCTE4NDEwNTI3NJICAJoCDGRlc2t0b3AtbWFwc6oCMjM5NDE4MTQ3NCwxODM4NDg5NDE2OSw2MDAzNTU5LDIwNjk5MzAzNjAsOTE1MTMzODAx&sll=38.971841%2C44.996252&sspn=0.460581%2C0.230649&text=%D0%90%D0%97%D0%A1&z=11.81",
  },
  {
    icon: clinicIcon(),
    label: "Поликлинника",
    src: "https://yandex.ru/map-widget/v1/?ll=38.938525%2C44.989463&mode=search&sctx=ZAAAAAgBEAAaKAoSCSoeF9UieENAEd9uSQ7YfUZAEhIJKETAIVSpqT8RE0TdByC1mT8iBgABAgMEBSgKOABAI0gBagJydZ0BzcxMPaABAKgBAL0BU8eaeMIBBrnErLGsA%2BoBAPIBAPgBAIICFtC%2F0L7Qu9C40LrQu9C40L3QuNC60LCKAhMxODQxMDYwMTQkMTg0MTA1OTg2kgIAmgIMZGVza3RvcC1tYXBzqgJINDU0MzM2NTMwNywyMjQ1MTg3MTQ5NjMsMjIzOTUxMTM3NjgsOTQ2MTM3OTE4MDksMTkxNzU4MDYwNDU3LDU1MDc5NjA3NjI3&sll=38.938525%2C44.989463&sspn=0.035935%2C0.017998&text=%D0%BF%D0%BE%D0%BB%D0%B8%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0&z=15.49",
  },
];

const dataMobile = [
  {
    icon: storeIcon(),
    label: "Магазины",
    src: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=38.943903%2C44.998971&mode=search&sll=38.927387%2C44.990846&sspn=0.025234%2C0.012638&text=%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B&z=13.92",
  },
  {
    icon: locationIcon(),
    label: "ЖК “Яблоновский”",
    src: "https://yandex.ru/map-widget/v1/?ll=38.926543%2C44.990044&mode=search&oid=54806867593&ol=biz&sctx=ZAAAAAgBEAAaKAoSCYLix5i7dkNAEZ%2FHKM%2B8fkZAEhIJyCO4kbJFcj8RYHMOnglNYj8iBgABAgMEBSgKOABAt60HSAFqAnJ1nQHNzEw9oAEAqAEAvQEePH%2FnwgEGid35lcwB6gEA8gEA%2BAEAggIh0JbQmiDigJzQr9Cx0LvQvtC90L7QstGB0LrQuNC54oCdigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=38.926543%2C44.990044&sspn=0.012020%2C0.006020&text=%D0%96%D0%9A%20%E2%80%9C%D0%AF%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%E2%80%9D&z=17.07",
  },
];

export default function Infrastructure() {
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleCursor = (e) => {
      setX(e?.clientX - 20);
      setY(e?.clientY - 20);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return (
    <section className="relative">
      <div className="absolute top-10 right-4 flex justify-between w-32 md:hidden z-20">
        <Eclipses />
      </div>
      {isHovered && <IconMouse x={x} y={y} />}
      <div className="flex flex-col gap-12 max-sm:pt-24 text-center">
        <h1 className="text-primary font-bold paddingX md:h2">
          Наша инфраструктура
        </h1>
        <div className="relative w-hull min-h-[85vh] md:min-h-[80vh]">
          <iframe
            src={data[selected]?.src}
            className="w-full h-full absolute"
          />
          <div
            style={{ cursor: isHovered ? "none" : "default" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute hidden md:flex flex-col gap-4 md:right-12 xl:right-36 centered2 z-20"
          >
            {data?.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  className="px-4 py-3 xl:p-4 round cursor-pointer bg-gray shadow"
                  style={{ cursor: isHovered ? "none" : "default" }}
                >
                  <div className="relative px-4 py-3 2xl:p-4 bg-white round shadowmaps">
                    <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent from-40% to-40% to-[#E0E4E9] bg-gradient-to-r" />
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full w-12 aspect-square flex items-center justify-center shadowregular hover:shadow-[0px_2px_10px_#0B91C5] animate hover:bg-blue ${
                          selected === i ? "btnMaps bg-blue" : "btn"
                        }`}
                      >
                        {e?.icon}
                      </div>
                      <div
                        className={`animate md:h4 lg:h5 2xl:h5 xl:p font-semibold ${
                          selected === i ? "text-blue" : "text-primary"
                        }`}
                      >
                        {e?.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden flex flex-col gap-4 absolute top-14 w-full paddingX">
            {dataMobile?.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(i);
                  }}
                  className="px-4 py-3 round cursor-pointer bg-gray shadow"
                >
                  <div className="relative px-4 py-3 bg-white round shadowmaps">
                    <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent from-30% to-30% to-[#e3e7eb] bg-gradient-to-r" />
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full w-12 aspect-square flex items-center justify-center shadowregular hover:shadow-[0px_2px_10px_#0B91C5] animate hover:bg-blue ${
                          selected === i ? "btnMaps bg-blue" : "btn"
                        }`}
                      >
                        {e?.icon}
                      </div>
                      <h5
                        className={`h3 md:p animate lg:h5 font-semibold ${
                          selected === i ? "text-blue" : "text-primary"
                        }`}
                      >
                        {e?.label}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
