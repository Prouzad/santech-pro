import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerImg from "@/components/assets/imges/bannerBlock.png"
import Image from "next/image";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url: BannerImg,
  },
  {
    label: "Image 2",
    alt: "image2",
    url: BannerImg,
  },
  {
    label: "Image 3",
    alt: "image3",
    url: BannerImg,
  },
  {
    label: "Image 4",
    alt: "image4",
    url: BannerImg,
  },
];

const Banner = () => {
  const renderSlides = imageData.map((image) => (
    <div key={image.alt} className="h-[300px]">
      <Image src={image.url} alt={image.alt} />
    </div>
  ));
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      key={"alt"}
      //   autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      className="carousel-container h-[300px]"
    >
      {renderSlides}
    </Carousel>
  );
};

export default Banner;
