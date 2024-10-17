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
//     image: "/h.jpeg",
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
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setActiveIndex(next),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   };

//   const getSlideClass = (index) => {
//     if (index === activeIndex) {
//       return "scale-105 opacity-100 blur-0";
//     } else {
//       return "scale-90 opacity-50 blur-sm";
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-6 border-2 mt-8 border-orange-500 rounded-lg shadow-lg">
//       <h2 class="max-w-[600px] mx-auto text-base sm:text-2xl md:text-4xl font-semibold mt-12 text-left ml-0">
//         <span class="inline md:inline-block text-[32px]">
//           In<i class="font-bold text-orange-600">sider glimpses:</i>
//         </span>
//         <span class="block md:inline text-[12px] md:text-[40px] mt-2 md:mt-0">
//           Click to see real conversations with our learners
//         </span>
//
//       </h2>

//       <div className="relative flex flex-col md:flex-row items-center justify-center">
//         <div className="w-full md:w-2/3">
//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className={`p-1 transition-transform transform duration-500 ease-in-out ${getSlideClass(
//                   index
//                 )}`}
//               >
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 p-2 mx-auto sm:mx-6">
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

//         <div className="w-full flex justify-center mt-8 md:mt-0">
//           <div className="w-full sm:w-3/4 md:w-60 lg:w-72 h-auto rounded-2xl flex justify-center">
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

//       <button className="flex center mt-2 px-4 py-3 bg-orange-600 text-white font-semibold rounded-md block hover:bg-indigo-700 transition">
//         Free Career Counseling from Experts
//       </button>
//     </div>
//   );
// };

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10"
//     onClick={onClick}
//   >
//     <IoIosArrowForward />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-gray-600 z-10"
//     onClick={onClick}
//   >
//     <IoIosArrowBack />
//   </div>
// );

// export default TestimonialsCarousel;
"use client";

"use client";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show all images on desktop
    slidesToScroll: 1,
    centerMode: true, // Enable center mode to highlight the centered image
    centerPadding: "0px", // No padding to the sides
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5, // Show all images on tablets
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5, // Show all images on mobile
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const getSlideClass = (index) => {
    return index === activeIndex
      ? "scale-105 opacity-100 blur-0" // Active image styles
      : "scale-90 opacity-50 blur-sm"; // Blurred images
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 border-2 mt-8 border-orange-500 rounded-lg shadow-lg bg-[rgba(211,211,211,0.3)]">
      <h2 className="max-w-[600px] mx-auto text-base sm:text-2xl md:text-4xl font-semibold mt-12 text-left ml-0">
        <span className="inline md:inline-block text-[20px] md:text-[40px]">
          In
          <span className="font-bold text-orange-600 text-[20px] md:text-[40px]">
            sider glimpses: 
          </span>
        </span>
        <span className="block md:inline text-[12px] md:text-[40px] md:mt-0">
           Click to see real conversations with our learners
        </span>
      </h2>

      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-2 transition-transform transform duration-500 ease-in-out ${getSlideClass(
                  index
                )}`}
              >
                {/* Profile images with responsive sizing */}
                <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 mx-auto">
                  {" "}
                  {/* Increased sizes */}
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
        </div>

        <div className="w-full flex justify-center mt-8 md:mt-0">
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

      <button className="flex center mt-2 px-4 py-3 bg-orange-600 text-white font-semibold rounded-md block hover:bg-indigo-700 transition">
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
