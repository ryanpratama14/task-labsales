import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import { NavbarData } from "../constants/constants";

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const active = selected !== null;
  return (
    <nav className="absolute hidden lg:flex flex-col top-0 w-full pt-3 pb-36 from-white from-20% via-white via-20% to-90% bg-gradient-to-b">
      <div className="flex items-center paddingX justify-between">
        <img src={logo} className="w-56 select-none" />
        <ul className="flex gap-6 xl:gap-12">
          {NavbarData?.map((e, i) => {
            return (
              <li
                onClick={() => {
                  setSelected(e?.value);
                  if (selected === e?.value) {
                    setSelected(null);
                  }
                }}
                key={i}
                className={`font-semibold animate text-lg cursor-pointer ${
                  selected === e?.value ? "text-blue" : "text-primary"
                }`}
              >
                {e?.label}
              </li>
            );
          })}
        </ul>
        <div className="flex font-semibold flex-col justify-center items-center text-center text-primary">
          <a className="text-xl">+7 (918) 377-48-10</a>
          <a
            href="tel:+79183774810"
            target="_blank"
            className="font-raleway w-fit text-lg relative"
          >
            Заказать звонок
            <div className="absolute bottom-0 w-[110%] h-[1.5px] bg-primary" />
          </a>
        </div>
      </div>
      <div
        className={`animate ${
          active
            ? "scale-100 border-t-[1px] border-b-[1px] border-blue hidden lg:flex items-center py-6 translate-y-0"
            : "scale-0 -translate-y-12"
        }`}
      >
        <ul className="paddingX flex xl:justify-start justify-between xl:gap-16 w-full">
          {NavbarData[selected]?.children?.map((e, i) => {
            return (
              <li
                key={i}
                className={`font-semibold text-lg cursor-pointer ${
                  e?.value === 1 ? "text-blue" : "text-primary"
                }`}
              >
                {e?.label}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
