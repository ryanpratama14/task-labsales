import React, { useState } from "react";
import logo from "../assets/logo2.png";
import logo2 from "../assets/logodark.png";
import { Icon } from "@iconify/react";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([
    {
      label: "Жилые комплексы",
      children: [
        "ЖК Космос",
        "ЖК Яблоновский",
        "ЖК на Шоссейной",
        "ЖК Солнечная",
      ],
      opened: false,
    },
    {
      label: "О компании",
      children: ["Коротко о компании", "Наша команда"],
      opened: false,
    },
    {
      label: "Как купить",
      children: [
        "Ипотека",
        "Военная ипотека",
        "Материнский капитал",
        "Наличный рассчет",
        "Рассрочка",
      ],
      opened: false,
    },
  ]);

  return (
    <nav
      className={`overflow-x-hidden z-50 overflow-y-scroll duration-200 absolute paddingX animate lg:hidden top-0 w-full py-6 ${
        open && "bg-[#212D55]"
      }`}
    >
      <div className={`animate flex h-fit justify-between z-30 items-center`}>
        <img src={open ? logo2 : logo} className="w-[50%] md:w-[30%]" />
        <div
          className={`transition-all duration-300 flex gap-3 ${
            open ? "-translate-x-12 invisible" : "scale-100 translate-x-0"
          }`}
        >
          <h4 className="text-primary font-medium">Меню</h4>
          <div
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="w-10 round h-[0.2rem] round bg-primary" />
            <div className="w-10 round h-[0.2rem] round bg-primary" />
            <div className="w-10 round h-[0.2rem] round bg-primary" />
          </div>
        </div>
        {open && (
          <div
            onClick={() => setOpen(!open)}
            className={`cursor-pointer p-1 bg-white text-blue rounded-full flex items-center justify-center`}
          >
            <Icon
              icon="ph:x-light"
              width={40}
              className={`${!open ? "rotate-45" : "rotate-0"}`}
            />
          </div>
        )}
      </div>
      {open && (
        <div
          className={`text-white pb-8 text-lg flex flex-col w-full justify-end text-right`}
        >
          {data?.map((e, i) => {
            return (
              <div key={i} className="flex w-full items-end flex-col gap-6">
                <div
                  onClick={() => {
                    const newData = [...data];
                    newData[i].opened = !newData[i].opened;
                    setData(newData);
                  }}
                  className="cursor-pointer font-semibold flex gap-2 items-center"
                >
                  <label className="cursor-pointer">{e?.label}</label>
                  <Icon
                    icon="material-symbols:arrow-back-ios-new"
                    rotate={e?.opened ? 1 : 3}
                  />
                </div>
                <ul
                  className={`disabled-text flex flex-col gap-2 items-end ${
                    e?.opened ? "opacity-100 mb-6 " : "opacity-0 w-0 h-0"
                  }`}
                >
                  {e?.children?.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className={`animate flex gap-2 items-center ${
                          e?.opened
                            ? "opacity-100 translate-x-0"
                            : "translate-x-12 opacity-0 w-0 h-0"
                        }`}
                      >
                        <p className="font-normal">{el}</p>
                        <Icon
                          icon="material-symbols:arrow-back-ios-new"
                          rotate={3}
                        />
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="disabled-text flex flex-col gap-6 mr-7">
            <label>Контакты</label>
            <div className="flex flex-col gap-2 font-semibold">
              <p className="text-xl">+7 (918) 377-48-10</p>
              <a href="tel:+79183774810" target="_blank" className="underline">
                Заказать звонок
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ${open ? "scale-100" : "scale-0"}
