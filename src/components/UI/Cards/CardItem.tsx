import { IItems } from "@/types/types";
import Image from "next/image";
import ButtonItems from "../Buttons/ButtonItems";

const CardItem = ({ image, name, code, id, price }: IItems) => {
  return (
    <div className="w-[264px] h-[464px] p-3 rounded-2xl flex flex-col justify-between mb-[52px] card cursor-pointer">
      <div className="">
        <div className=" w-full h-[168px] bg-[white] relative rounded-lg overflow-hidden mb-4">
          <div className="w-full h-full bg-tertiary-label z-10 absolute"></div>
          <div className=" p-3">
            <Image src={image} alt={code} />
          </div>
        </div>
        <div className=" text-body-14-medium">{name}</div>
        <div className=" text-body-14-regular text-secondary-label">{`Код товара: ${code}`}</div>
      </div>
      <div className="">
        <div className="text-header-20-bold mb-2">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + "СУМ"}
        </div>
        <ButtonItems>В корзину</ButtonItems>
      </div>
    </div>
  );
};

export default CardItem;
