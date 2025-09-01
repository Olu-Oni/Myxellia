// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper mmodules
import { Navigation, Pagination } from "swiper/modules";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface SlidesProps {
  amt: number;
}
const Slides: React.FC<SlidesProps> = ({ amt }) => {
  const slides = (som: number) => {
    switch (som) {
      case 1:
        return { bg: [bg1, bg2], text: "MOST CLICKED" };
      case 2:
        return { bg: [bg2, bg3, bg1, bg2], text: "MOST WATCHLISTED" };
      case 3:
        return { bg: [bg3, bg2, bg1, bg2], text: "HOTTEST LISTING" };
      default:
        return {};
    }
  };
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-[418px] h-[286px] rounded-xl"
    >
      {slides(amt)?.bg &&
        slides(amt)?.bg?.map((bg) => (
          <SwiperSlide>
            <div className="slider-container">
              <span className="flex flex-col justify-end text-nowrap absolute inset-0   p-4 pb-6 bg-gradient-to-b from-transparent to-[#00000080]">
                <h4 className="text-lg text-white">{slides(amt)?.text}</h4>
                <h4 className="font-bold text-white ">
                  Urban Prime Plaza Premiere
                </h4>
              </span>
              <img src={bg} alt="" />
            </div>
          </SwiperSlide>
        ))}
      ...
    </Swiper>
  );
};

export default Slides;
