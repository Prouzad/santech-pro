import { data } from "../../Mockdata";
import ButtonPrimary from "./UI/Buttons/ButtonBrand copy";
import CardItem from "./UI/Cards/CardItem";
import MainTitle from "./UI/MainTitle";

const ItemsBlock = () => {
  return (
    <MainTitle title={"segment"} descritpion="Самые популярные товары" link="/">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-between mb-[52px]">
          {data.map((item) => {
            return (
              <CardItem
                key={item.id}
                name={item.name}
                code={item.code}
                id={item.id}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
        <ButtonPrimary>Смотреть все товары</ButtonPrimary>
      </div>
    </MainTitle>
  );
};

export default ItemsBlock;
