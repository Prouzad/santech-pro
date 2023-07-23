import LogoSantech from "@/components/assets/icons/logo.svg";
import SearchIcon from "@/components/assets/icons/search.svg";
import BasketIcon from "@/components/assets/icons/shopping_basket.svg";
import PhoneIcon from "@/components/assets/icons/phone.svg";
import LangIcon from "@/components/assets/icons/language-flag.svg";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    title: "Каталог",
    key: "catalog",
    link: "/",
  },
  {
    title: "Скидки",
    key: "discounts",
    link: "/",
  },
  {
    title: "Новинки",
    key: "new",
    link: "/",
  },
  {
    title: "Оплата и доставка",
    key: "PaymentAndDelivery",
    link: "/",
  },
  {
    title: "Наш адрес",
    key: "OurAdress",
    link: "/",
  },
  {
    title: "Контакты",
    key: "contacts",
    link: "/",
  },
];

const HeaderSantech = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full py-5 flex justify-center">
        <div className="w-full h-9 flex justify-between">
          <div className="w-[549px] flex justify-between items-center">
            <div className="flex items-center">
              <LogoSantech />
              <p className="text-[10px] font-normal w-[100px] ml-4">
                Сантехника оптом с доставкой
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-[30%] left-[12px]">
                <SearchIcon />
              </div>
              <input
                placeholder="Найти товар"
                className="w-[269px] px-[30px] py-[6px] bg-secondary-background text-body-14-regular rounded-md"
              />
            </div>
          </div>
          <div className="w-[386px] flex justify-between items-center">
            <div className="flex items-center w-[105px] justify-between cursor-pointer">
              <BasketIcon />
              <p className=" text-body-14-regular">Корзина</p>
              <div className="w-4 h-4 rounded-full bg-negative-label text-[white] text-center text-[12px]">
                9
              </div>
            </div>
            <div className=" h-9 py-[6px] px-3 bg-primary text-[white] flex items-center rounded-md">
              <PhoneIcon />
              <p className="text-[white] text-body-14-regular ml-1">
                +998 78 222-33-22
              </p>
            </div>
            <div className="h-6 w-6 cursor-pointer">
              <LangIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="h-9 flex">
        {navItems.map((item) => {
          return (
            <div
              key={item.key}
              className="px-3 text-body-14-regular flex text-primary"
            >
              {" "}
              {item.key === "catalog" ? (
                <button
                  onClick={() => setChange((change) => !change)}
                  className="flex"
                >
                  <div className={`container ${change && "change"} mr-2`}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                  {item.title}
                </button>
              ) : (
                <Link key={item.key} href={item.link}>
                  {item.title}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderSantech;
