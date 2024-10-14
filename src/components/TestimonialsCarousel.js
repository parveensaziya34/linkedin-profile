'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  {
    id: 1,
    name: "Girish Chonde",
    ss: "/gri.jpg",
    image: "/h.jpeg"
  },
  {
    id: 2,
    name: "Amrit Kalani",
    ss: "/amrit.jpg",
    image: "/amritk.jpg"
  },
  {
    id: 3,
    name: "Satyanarayan Mohapatra",
    ss:"/st1.jpg",
    image: "/st.jpg"
  },
  {
    id: 4,
    name: "Sohel Parvez Mallick",
    ss:"/sohel.jpg",
    image: "/sohel1.jpg"
  },
  {
    id: 5,
    name: "Soniya Sharma",
    ss:"/soniya1.jpg",
    image: "/soniya.jpg"
  },
  {
    id: 6,
    name: "Komal Maurya",
    ss:"/km1.jpg",
    image: "/km.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active (centered) testimonial

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set 3 images in view
    slidesToScroll: 1,
    centerMode: true, // Center the middle image
    centerPadding: '0px',
    nextArrow: <NextArrow />, // Use renamed component
    prevArrow: <PrevArrow />, // Use renamed component
    beforeChange: (current, next) => setActiveIndex(next), // Update the activeIndex when the slider changes
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) {
      return styles.activeCard; // Centered (highlighted) image
    } else {
      return styles.inactiveCard; // Other images
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>
        In<i className={styles.word}>sider glimpses:</i> Click to see real 
        <div>conversations with our learners</div>
      </h2>

      <div className={styles.sliderWrapper}>
        {/* Profile Images Carousel */}
        <Slider {...settings} className={styles.profileSlider}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.card} ${getSlideClass(index)}`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className={styles.profileImage}
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Right-side Phone Mockup */}
        <div className={styles.phoneMockup}>
          <div className={styles.phoneContent}>
            <Image
              src={testimonials[activeIndex].ss}
              alt={testimonials[activeIndex].name}
              width={300}
              height={500}
              className={styles.phoneImage}
            />
          </div>
        </div>
      </div>

      <button className={styles.counselingButton}>
        Free Career Counseling from Experts
      </button>
    </div>
  );
};

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return <div className={styles.arrowNext} onClick={onClick}><IoIosArrowForward style={{ fontSize: '40px' }}/></div>;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className={styles.arrowPrev} onClick={onClick}><IoIosArrowBack style={{ fontSize: '40px' }}/></div>;
};

export default TestimonialsCarousel;
