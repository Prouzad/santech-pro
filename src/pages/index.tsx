import Footer from "@/components/section/Footer";
import HeaderSantech from "@/components/section/Header";
import Main from "@/components/section/Main";

export default function Home() {
  return (
    <div className="w-screen ">
      <div className="flex justify-center items-center flex-col">
        <div className="w-[1104px]">
          <HeaderSantech />
        </div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}
