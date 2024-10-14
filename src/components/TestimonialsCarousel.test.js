// src/components/TestimonialsCarousel.test.js
import { render, screen } from '@testing-library/react';
import TestimonialsCarousel from './TestimonialsCarousel';

test('renders testimonial text', () => {
  render(<TestimonialsCarousel />);
  const linkElement = screen.getByText(/This is an amazing service!/i);
  expect(linkElement).toBeInTheDocument();
});
