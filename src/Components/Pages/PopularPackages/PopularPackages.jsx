import img1 from "../../../assets/images/card/1.jpg";
import img2 from "../../../assets/images/card/2.jpg";
import img3 from "../../../assets/images/card/3.jpg";
import img4 from "../../../assets/images/card/4.jpg";
import img5 from "../../../assets/images/card/5.jpg";
import img6 from "../../../assets/images/card/6.jpg";
import img7 from "../../../assets/images/card/7.jpg";
import "../../Shared/SectionTitle/SectionTitle.jsx";
import ellipse from "../../../assets/images/ellipse.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Navigation } from "swiper/modules";
import { Avatar } from "keep-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const PopularPackages = () => {
  return (
    <div className="bg-theme-color-200 lg:py-28 py-16">
      <div className="container mx-auto lg:px-0 px-6 flex justify-between items-center lg:pb-16">
      <div className="relative flex flex-col pb-10">
        <div className="absolute lg:-top-3 -top-4 lg:left-16 left-6">
          <img className="" src={ellipse} alt="" />
        </div>
        <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">Popular packages</h3>
      </div>
      <div className="">
        <div className="swiper_btn flex gap-4 p-2 bg-white rounded-lg">
          <button
            onClick={() => Swiper.slidePrev()}
            className="button_prev bg-theme-color-100 p-2 rounded-md text-white text-xl md:text-3xl text-center"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => Swiper.slideNext()}
            className="button_next bg-theme-color-100 p-2 rounded-md text-white text-xl md:text-3xl text-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      </div>
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".button_next",
          prevEl: ".button_prev",
        }}
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="p-4 rounded-2xl">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img1} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img2} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img3} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img4} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img5} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img6} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4 rounded-2xl w-96">
          <div>
            <div className="">
              <img className="rounded-2xl" src={img7} alt="" />
            </div>
            <h2 className="md:text-xl font-semibold text-start  md:py-4 py-2">
              The basic package to start your promotion
            </h2>
            <div className="flex justify-between">
              <Avatar.Group>
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Avatar
                  className="w-9 h-9 aspect-square"
                  img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p className="text-gray-600 text-sm ps-5">200K+ users</p>
              </Avatar.Group>
              <p
                className="text-theme-color-100
              font-semibold"
              >
                $86.00
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularPackages;
