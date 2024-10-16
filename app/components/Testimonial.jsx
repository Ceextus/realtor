import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'bg1.jpg', // Replace with actual image URL
    rating: 5,
    text: 'Amazing service! Highly recommended.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'bg2.jpg', // Replace with actual image URL
    rating: 4,
    text: 'Great experience, but could improve on response time.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: 'bg4.jpg', // Replace with actual image URL
    rating: 5,
    text: 'I loved every bit of the service! Will definitely return.',
  },
  {
    id: 4,
    name: 'Bob Brown',
    image: 'bg5.jpg', // Replace with actual image URL
    rating: 3,
    text: 'It was okay, but I expected more based on reviews.',
  },
];

const TestimonialSection = () => {
  return (
    <div className=" bg-gray-100 w-full max-w3xl mx-auto p-6 mt-0">
      <h2 className="text-2xl font-bold text-center mb-4">Testimonials</h2>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} mr-2"></span>`;
          },
        }}
        autoplay={{
          delay: 3000, // Autoplay every 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-3"
              />
              <h3 className="font-semibold">{testimonial.name}</h3>
              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z" />
                  </svg>
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
