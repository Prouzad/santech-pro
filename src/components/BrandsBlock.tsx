import { brandsData } from "../../Mockdata";
import BrandCard from "./UI/Cards/BrandCard";
import MainTitle from "./UI/MainTitle";

const BrandsBlock = () => {
  return (
    <MainTitle title={"Бренды"} descritpion={"Мировые бренды"} link={"/"}>
      <div className="">
        <div className="flex flex-wrap justify-between">
          {brandsData.map((item) => (
            <BrandCard item={item} />
          ))}
        </div>
      </div>
    </MainTitle>
  );
};

export default BrandsBlock;
