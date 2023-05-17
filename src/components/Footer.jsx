import React, { useState } from "react";
import { CheckIcon, TelIcon } from "./Icons";

export default function Footer() {
  const [checked, setChecked] = useState(true);
  return (
    <React.Fragment>
      <footer className="gap-12 paddingX pt-shorter pb-normal hidden md:flex flex-col text-center justify-center items-center bg-gray">
        <h1 className="text-primary font-bold md:h2">
          Узнайте о выгодных предложениях и получите
          <br />
          личную консультацию
        </h1>
        <div className="flex lg:gap-0 gap-12 justify-between lg:flex-nowrap flex-wrap w-full">
          <div className="flex lg:w-fit w-full justify-center lg:gap-12 gap-6 lg:justify-between lg:flex-nowrap flex-wrap items-center">
            <div className="flex flex-col gap-6 text-primary justify-center items-center text-center font-bold">
              <h5>
                По любым возникающим Вами
                <br />
                вопросов звоните нам напрямую
              </h5>
              <div className="flex gap-4 items-center">
                <a
                  href="tel:+79183774810"
                  target="_blank"
                  className="rounded-full btn shadowregular bg-white p-2 hover:shadow-[0px_4px_20px_#0B91C5] animate hover:bg-blue"
                >
                  <TelIcon />
                </a>
                <h4>+7 (918) 377-48-10</h4>
              </div>
            </div>
            <div className="border-[1px] border-dashed border-blue h-full" />
            <p className="font-bold text-xl text-primary">
              Или заполните
              <br />
              форму
            </p>
          </div>
          <div className="lg:w-fit w-full">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex gap-2 text-blue items-center">
                <div className="w-2 aspect-square rounded-full bg-blue" />
                <p>Сейчас мы работаем</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input placeholder="Ваше имя" />
                  <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
                </div>
                <div className="relative">
                  <input placeholder="Ваш номер телефона" />
                  <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
                </div>
                <div className="relative">
                  <input placeholder="Ваш email" />
                  <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
                </div>
                <div className="h-full flex items-center">
                  <button className="w-full !h-[80%] mb-2 hover:mb-0">
                    Отправить заявку
                  </button>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  onClick={() => setChecked(!checked)}
                  className="relative w-6 aspect-square rounded-[5px] cursor-pointer bg-white shadowregular"
                >
                  <CheckIcon checked={checked} />
                </div>
                <p className="pSmaller text-primary disabled-text">
                  Я принимаю условия{" "}
                  <span className="cursor-pointer hover:underline text-blue">
                    обработки персональных данных
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* MOBILE */}
      <footer className="flex md:hidden flex-col gap-6 py-longer">
        <div className="text-primary font-bold flex gap-6 flex-col paddingX text-center justify-center items-center">
          <h2>
            Узнайте о выгодных
            <br /> предложениях и<br /> получите
            <br />
            консультацию
          </h2>
          <div className="flex gap-2 text-blue items-center">
            <div className="w-2 aspect-square rounded-full bg-blue" />
            <p className="font-medium text-lg">Сейчас мы работаем</p>
          </div>
          <h4>
            По любым возникающим Вами
            <br />
            вопросов звоните нам напрямую
          </h4>
          <div className="flex gap-4 items-center">
            <a
              href="tel:+79183774810"
              target="_blank"
              className="rounded-full btn shadowregular bg-white p-2 hover:shadow-[0px_4px_20px_#0B91C5] animate hover:bg-blue"
            >
              <TelIcon />
            </a>
            <h4>+7 (918) 377-48-10</h4>
          </div>
        </div>
        <div className="border-[1px] border-dashed border-blue h-full" />
        <div className="flex flex-col justify-center items-center w-full gap-6 paddingX">
          <p className="font-bold text-xl text-primary">Или заполните форму</p>
          <div className="grid grid-cols-1 gap-6 w-full">
            <div className="relative">
              <input placeholder="Ваше имя" className="w-full" />
              <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
            </div>
            <div className="relative">
              <input placeholder="Ваш номер телефона" className="w-full" />
              <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
            </div>
            <div className="relative">
              <input placeholder="Ваш email" className="w-full" />
              <div className="centered absolute left-0 w-4 rounded-full aspect-square from-transparent to-[#f1f4f6] bg-gradient-to-r" />
            </div>
            <div className="h-full flex items-center">
              <button className="w-full">Отправить заявку</button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              onClick={() => setChecked(!checked)}
              className="relative w-6 aspect-square rounded-[5px] cursor-pointer bg-white shadowregular"
            >
              <CheckIcon checked={checked} />
            </div>
            <div className="flex flex-col pSmaller text-center text-primary">
              <p>
                Я принимаю условия <span className="text-blue">обработки</span>
              </p>
              <p className="text-blue">персональных данных</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
