import { IBrandItems } from "@/types/types";
import Image from "next/image";

interface ICountry {
  Germany: string;
  China: string;
  Russia: string;
  Italy: string;
}

type CountryDataType = "Germany" | "China" | "Italy" | "Russia";

const countrys: ICountry = {
  Germany: "🇩🇪",
  China: "🇨🇳",
  Russia: "🇷🇺",
  Italy: "🇮🇹",
};

const BrandCard = ({ item }: { item: IBrandItems }) => {
  const country = item.country as CountryDataType;
  return (
    <div className="w-[264px] h-[260px] p-3 flex flex-col justify-between mb-10">
      <div className="w-[240px] h-[168px] rounded-lg overflow-hidden">
        <Image src={item.image} alt={item.brandName} />
      </div>
      <div className="text-body-14-medium">{item.brandName}</div>
      <div className="text-body-14-regular flex items-center">
        {countrys[country] + " " + country}
      </div>
    </div>
  );
};

export default BrandCard;
