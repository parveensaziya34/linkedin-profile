

// "use client";

// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const testimonials = [
//   {
//     id: 1,
//     name: "Girish Chonde",
//     ss: "/gris.jpg",
//     image: "/h2.jpg",
//   },
//   {
//     id: 2,
//     name: "Amrit Kalani",
//     ss: "/amri.jpg",
//     image: "/amritk.jpg",
//   },
//   {
//     id: 3,
//     name: "Satyanarayan Mohapatra",
//     ss: "/st.jpg",
//     image: "/dp.jpg",
//   },
//   {
//     id: 4,
//     name: "Sohel Parvez Mallick",
//     ss: "/sp1.jpg",
//     image: "/es.jpg",
//   },
//   {
//     id: 5,
//     name: "Soniya Sharma",
//     ss: "/soniya.jpg",
//     image: "/mp.jpg",
//   },
//   {
//     id: 6,
//     name: "Komal Maurya",
//     ss: "/km.jpg",
//     image: "/kl.jpg",
//   },
// ];

// const TestimonialsCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // Show all images on desktop
//     slidesToScroll: 1,
//     centerMode: true, // Enable center mode to highlight the centered image
//     centerPadding: "0px", // No padding to the sides
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setActiveIndex(next),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 5, // Show all images on tablets
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 4, // Show all images on mobile
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "90px",
//         },
//       },
//     ],
//   };

//   const getSlideClass = (index) => {
//     return index === activeIndex
//       ? "scale-105 opacity-100" // Active image styles
//       : "scale-90 opacity-50 filter brightness-75"; // Dim non-active images
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-1 border-2 mt-12 border-orange-500 rounded-lg bg-[rgba(211,211,211,0.3)] shadow-lg">
//       <h2 className="max-w-[600px] mx-auto text-base sm:text-2xl md:text-4xl font-semibold text-left ml-0 mt-12">
//         <span className="inline md:inline-block text-[20px] md:text-[40px]">
//           In<i className="font-bold text-orange-600">sider glimpses:</i>
//         </span>
//         <span className="block md:inline text-[12px] md:text-[40px] mt-0 md:mt-0">
//           Click to see real conversations with our learners
//         </span>
//       </h2>

//       {/* Main Slider Section */}
//       <div className="relative flex flex-col md:flex-row items-center justify-center md:overflow-hidden overflow-hidden left-0">
//         <div className="w-full md:w-2/3">
//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className={`p-2 transition-transform transform duration-500 ease-in-out ${getSlideClass(
//                   index
//                 )}`}
//               >
//                 {/* Profile images with responsive sizing */}
//                 <div className="w-18 h-18 sm:w-28 sm:h-28 mx-auto overflow-hidden">
//                   {/* Increased sizes */}
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     width={300}
//                     height={400}
//                     className="rounded-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Secondary Image Section */}
//         <div className="w-full flex justify-center mt-2 md:mt-0 overflow-hidden">
//           <div className="w-full sm:w-3/4 md:w-60 lg:w-72 h-auto rounded-2xl flex justify-center overflow-hidden">
//             <Image
//               src={testimonials[activeIndex].ss}
//               alt={testimonials[activeIndex].name}
//               width={400}
//               height={500}
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <button className="mt-2 mb-4 px-4 py-3 bg-orange-600 text-white font-semibold rounded-md block hover:bg-indigo-700 transition mx-auto md:mx-0">
//         Free Career Counseling from Experts
//       </button>
//     </div>
//   );
// };

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10 bg-orange-100 rounded-2xl overflow-hidden"
//     onClick={onClick}
//   >
//     <IoIosArrowForward />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-0 md:left-1 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10 bg-orange-100 rounded-2xl overflow-hidden"
//     onClick={onClick}
//   >
//     <IoIosArrowBack />
//   </div>
// );

// export default TestimonialsCarousel;

"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Girish Chonde",
    ss: "/gris.jpg",
    image: "/h2.jpg",
  },
  {
    id: 2,
    name: "Amrit Kalani",
    ss: "/amri.jpg",
    image: "/amritk.jpg",
  },
  {
    id: 3,
    name: "Satyanarayan Mohapatra",
    ss: "/st.jpg",
    image: "/dp.jpg",
  },
  {
    id: 4,
    name: "Sohel Parvez Mallick",
    ss: "/sp1.jpg",
    image: "/es.jpg",
  },
  {
    id: 5,
    name: "Soniya Sharma",
    ss: "/soniya.jpg",
    image: "/mp.jpg",
  },
  {
    id: 6,
    name: "Komal Maurya",
    ss: "/km.jpg",
    image: "/kl.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const getSlideClass = (index) => {
    return index === activeIndex
      ? "scale-105 opacity-100"
      : "scale-90 opacity-50 filter brightness-75";
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-1 border-2 mt-12 border-orange-500 rounded-lg bg-[rgba(211,211,211,0.3)] shadow-lg">
      <h2 className="max-w-[600px] mx-auto text-base sm:text-2xl md:text-4xl font-semibold text-left ml-0 mt-12">
        <span className="inline md:inline-block text-[20px] md:text-[40px]">
          In<i className="font-bold text-orange-600">sider glimpses:</i>
        </span>
        <span className="block md:inline text-[12px] md:text-[40px] mt-0 md:mt-0">
          Click to see real conversations with our learners
        </span>
      </h2>

      {/* Slider Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="w-full md:w-2/3 relative">
          {/* Assign slider reference */}
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-2 transition-transform transform duration-500 ease-in-out ${getSlideClass(
                  index
                )}`}
              >
                {/* Profile images with responsive sizing */}
                <div className="w-18 h-18 sm:w-28 sm:h-28 mx-auto overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={400}
                    className="rounded-full"
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Control Arrows */}
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>

        <div className="w-full flex justify-center mt-2 md:mt-0 overflow-hidden">
          <div className="w-full sm:w-3/4 md:w-60 lg:w-72 h-auto rounded-2xl flex justify-center">
            <Image
              src={testimonials[activeIndex].ss}
              alt={testimonials[activeIndex].name}
              width={400}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <button className="mt-2 mb-4 px-4 py-3 bg-orange-600 text-white font-semibold rounded-md block hover:bg-indigo-700 transition mx-auto md:mx-0">
        Free Career Counseling from Experts
      </button>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-20 bg-orange-100 rounded-2xl"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-20 bg-orange-100 rounded-2xl"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

export default TestimonialsCarousel;
