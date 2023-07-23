import AdvantageSection from "../AdvantageBlock";
import Banner from "../Banner";
import BrandsBlock from "../BrandsBlock";
import ItemsBlock from "../ItemsBlock";

const Main = () => {
  return (
    <>
      <div className="h-[300px] mb-[64px]">
        <Banner />
      </div>
      <div className="w-[1104px]">
        <AdvantageSection />
        <ItemsBlock />
        <BrandsBlock />
      </div>
    </>
  );
};

export default Main;
