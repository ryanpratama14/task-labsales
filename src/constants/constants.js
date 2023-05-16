import key from "../assets/features/key.png";
import office from "../assets/features/office.png";
import brickwall from "../assets/features/brickwall.png";
import star from "../assets/features/star.png";
import buildings from "../assets/features/buildings.png";
import parking from "../assets/features/parking.png";
import slider from "../assets/features/slider.png";
import putty from "../assets/features/putty.png";

export const FeaturesData = [
  {
    label: "Срок сдачи",
    desc: "2015",
    icon: key,
  },
  {
    label: "Этажность",
    desc: "10",
    icon: office,
  },
  {
    label: "Тип дома",
    desc: "Кирпичный",
    icon: brickwall,
  },
  {
    label: "Класс дома",
    desc: "Эконом",
    icon: star,
  },
  {
    label: "Корпусов",
    desc: "2 корпуса",
    icon: buildings,
  },
  {
    label: "Парковка",
    desc: "Гостевая",
    icon: parking,
  },
  {
    label: "Территория",
    desc: "Дет. площадки",
    icon: slider,
  },
  {
    label: "Отделка",
    desc: "Чистовая",
    icon: putty,
  },
];

export const FeaturesData2 = [
  {
    label: "Срок сдачи",
    desc: "2015",
    icon: key,
    label2: "Этажность",
    desc2: "10",
    icon2: office,
  },

  {
    label: "Тип дома",
    desc: "Кирпичный",
    icon: brickwall,
    label2: "Класс дома",
    desc2: "Эконом",
    icon2: star,
  },

  {
    label: "Корпусов",
    desc: "2 корпуса",
    icon: buildings,
    label2: "Парковка",
    desc2: "Гостевая",
    icon2: parking,
  },

  {
    label: "Территория",
    desc: "Д. площадки",
    icon: slider,
    label2: "Отделка",
    desc2: "Чистовая",
    icon2: putty,
  },
];

export const NavbarData = [
  {
    value: 0,
    label: "Жилые комплексы",
    children: [
      {
        label: "Преимущества",
        value: 1,
      },
      {
        label: "Инфраструктура",
        value: 2,
      },
      {
        label: "Планировка",
        value: 3,
      },
      {
        label: "Отделка",
        value: 4,
      },
      {
        label: "Описание",
        value: 5,
      },
      {
        label: "Контакты",
        value: 6,
      },
      {
        label: "Документация",
        value: 7,
      },
    ],
  },
  {
    value: 1,
    label: "О компании",
    children: [
      {
        label: "О компании",
        value: 1,
      },
    ],
  },
  {
    value: 2,
    label: "Как купить",
    children: [
      {
        label: "Как купить?",
        value: 1,
      },
      {
        label: "Здесь купить",
        value: 2,
      },
    ],
  },
  {
    value: 3,
    label: "Контакты",
    children: [
      {
        label: "WhatsApp",
        value: 1,
      },
      {
        label: "VK",
        value: 2,
      },
    ],
  },
];

export const MainPageData = [
  {
    label: "Квартиры",
    desc: "от 63 801 ₽/м²",
  },
  {
    label: "Стоимость",
    desc: "от 4,44 млн ₽",
  },
  {
    label: "Класс",
    desc: "Эконом",
  },
  {
    label: "Срок сдачи",
    desc: "Сдан",
  },
];
