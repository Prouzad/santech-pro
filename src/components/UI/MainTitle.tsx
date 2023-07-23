import Link from "next/link";
import { ReactNode } from "react";
import SegmentedControl from "./SegmentControl";

const items = ["Хит продаж 🔥", "Скидки"];

const MainTitle = ({
  children,
  title,
  descritpion,
  link,
}: {
  children: ReactNode;
  title: string | string[];
  descritpion: string;
  link: string;
}) => {
  return (
    <div className="mb-[104px]">
      <div className="w-full flex flex-col justify-center items-center py-8 ">
        <div
          className={`flex justify-center ${
            title !== "segment" && "text-header-40-bold"
          } mb-6`}
        >
          {title !== "segment" ? title : <SegmentedControl items={items} />}
        </div>
        <div className="flex justify-center ">
          <Link
            href={link}
            className="text-body-16-regular text-secondary-label"
          >
            {descritpion}
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainTitle;
