import AdvantageCard from "./UI/Cards/AdvantageCard";
import DocumentIcon from "@/components/assets/icons/page.png";
import CarIcon from "@/components/assets/icons/delivery-car.png";
import CardIcon from "@/components/assets/icons/credit-card.png";
import CheckIcon from "@/components/assets/icons/check-mark.png";
import MainTitle from "./UI/MainTitle";

const adventageItems = [
  {
    Icon: DocumentIcon,
    text: "Товар сертифицирован",
    color: "bg-transparent-document",
  },
  {
    Icon: CarIcon,
    text: "Удобная и быстрая доставка",
    color: "bg-transparent-car",
  },
  {
    Icon: CardIcon,
    text: "Любая форма оплаты",
    color: "bg-transparent-card",
  },
  {
    Icon: CheckIcon,
    text: "Гарантия на весь товар",
    color: "bg-transparent-check",
  },
];

const AdvantageSection = () => {
  return (
    <MainTitle
      title={"Наши преимущества"}
      descritpion={"Выбирайте надежных поставщиков"}
      link={"/"}
    >
      {" "}
      <div className="w-full flex justify-between">
        {adventageItems.map((item) => (
          <AdvantageCard
            Icon={item.Icon}
            text={item.text}
            color={item.color}
            key={item.color}
          />
        ))}
      </div>
    </MainTitle>
  );
};

export default AdvantageSection;
