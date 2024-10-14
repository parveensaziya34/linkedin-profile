// pages/index.js
// src/app/page.tsx
import React from 'react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
// import MobileView from '../components/MobileView';
import styles from './page.module.css'; // Ensure this path is correct

export default function Home() {
  return (
  <div className={styles.container}>
      <TestimonialsCarousel />
      {/* <MobileView /> */}
    </div>
  );
}
