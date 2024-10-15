"use client"; // Ensure it's a Client Component

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Girish Chonde",
    ss: "/gri.jpg",
    image: "/h.jpeg",
  },
  {
    id: 2,
    name: "Amrit Kalani",
    ss: "/amrit.jpg",
    image: "/amritk.jpg",
  },
  {
    id: 3,
    name: "Satyanarayan Mohapatra",
    ss: "/st1.jpg",
    image: "/dp.jpg",
  },
  {
    id: 4,
    name: "Sohel Parvez Mallick",
    ss: "/sohel.jpg",
    image: "/es.jpg",
  },
  {
    id: 5,
    name: "Soniya Sharma",
    ss: "/soniya1.jpg",
    image: "/mp.jpg",
  },
  {
    id: 6,
    name: "Komal Maurya",
    ss: "/km1.jpg",
    image: "/kl.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "4px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768, // Tablet or mobile screens
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true, 
        },
      },
    ],
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) {
      return "scale-105 opacity-100 blur-0";
    } else {
      return "scale-90 opacity-50 blur-sm";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 border-2 mt-8 border-orange-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-left mt-12">
        In<i className="font-bold text-red-500">sider glimpses:</i> Click to see real
        <div>conversations with our learners</div>
      </h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-1 transition-transform transform duration-500 ease-in-out ${getSlideClass(index)}`}
              >
                <div className="w-28 h-28 sm:w-24 sm:h-24 p-2 mx-auto sm:mx-6"> {/* Adjust size and gap for mobile */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={112}
                    height={112}
                    className="rounded-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-10">
          <div className="bg-gray-200 rounded-[30px] p-4 flex justify-center border-8 border-black shadow-lg">
            <Image
              src={testimonials[activeIndex].ss}
              alt={testimonials[activeIndex].name}
              width={300}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-md block hover:bg-indigo-700 transition">
        Free Career Counseling from Experts
      </button>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

export default TestimonialsCarousel;
