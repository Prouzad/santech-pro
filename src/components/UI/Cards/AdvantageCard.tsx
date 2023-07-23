import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

const AdvantageCard = ({
  Icon,
  text,
  color,
}: {
  Icon: StaticImageData;
  text: string;
  color: string;
}) => {
  return (
    <div className="w-[240px] h-[180px] flex justify-center items-center p-8 border border-stroke-background border-solid rounded-xl">
      <div className="w-[176px] h-[124px] flex flex-col justify-between">
        <div
          className={`w-12 h-12 ${color} flex justify-center items-center rounded-lg`}
        >
          <Image src={Icon} alt={text} width={20} height={20} />
        </div>
        <div className="h-[52px] w-[80%]">{text}</div>
      </div>
    </div>
  );
};

export default AdvantageCard;
