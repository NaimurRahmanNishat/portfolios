"use client";
import airport from "../../../../public/slider/airport.png";
import amazon from "../../../../public/slider/amazon.png";
import doctorcare from "../../../../public/slider/doctorcare.png";
import furniture from "../../../../public/slider/furniture.png";
import metablog from "../../../../public/slider/metablog.png";
import newsportal from "../../../../public/slider/newsportal.png";
import nrworld from "../../../../public/slider/nrworld.png";
import redtilt from "../../../../public/slider/redtilt.png";
import resturent from "../../../../public/slider/resturent.png";
import sebaghor from "../../../../public/slider/sebaghor.png";
import seller from "../../../../public/slider/seller.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  airport,
  amazon,
  doctorcare,
  furniture,
  metablog,
  newsportal,
  nrworld,
  redtilt,
  resturent,
  sebaghor,
  seller,
];

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={partner}
              alt="partner-logo"
              className="w-[200px] h-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
