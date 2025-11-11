import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,  } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/nMpHqxHF/delicious-street-food-fest.jpg",
      title: "Experience the Local Street Food Fest",
      subtitle: "Taste the flavors that bring people together.",
    },
    {
      img: "https://i.ibb.co.com/QFYQB1yL/food-vendor-street-food-stall.jpg",
      title: "Meet the Masters Behind the Stalls",
      subtitle: "Every bite tells a story of passion and tradition.",
    },
    {
      img: "https://i.ibb.co.com/93kzW7D4/people-ramadan-celebration.jpg",
      title: "Celebrate Food and Culture Together",
      subtitle: "Join vibrant moments of shared flavors and joy.",
    },
    {
      img: "https://i.ibb.co.com/bgtrb3Jw/portrait-indian-man-bazaar.jpg",
      title: "Authentic Tastes from the Streets",
      subtitle: "Discover the people who make food an art form.",
    },
    {
      img: "https://i.ibb.co.com/2YhL1JZw/street-food-still-life.jpg",
      title: "Fresh, Flavorful & Locally Loved",
      subtitle: "Because real taste comes from real places.",
    },
    {
      img: "https://i.ibb.co.com/CpSNr3Hg/view-delicious-appetizing-street-food-1.jpg",
      title: "Street Delights That Inspire Cravings",
      subtitle: "From spicy to sweet — there’s something for everyone.",
    },
    {
      img: "https://i.ibb.co.com/HDLgDjxK/view-delicious-appetizing-street-food.jpg",
      title: "Where Every Bite Feels Like Home",
      subtitle: "Savor the love and tradition in every meal.",
    },
    {
      img: "https://i.ibb.co.com/G3bZjzCC/view-delicious-food-sold-streets-city-1.jpg",
      title: "Explore Local Food Corners",
      subtitle: "Find hidden gems and street food favorites near you.",
    },
    {
      img: "https://i.ibb.co.com/TxcYcyVQ/view-delicious-food-sold-streets-city.jpg",
      title: "Join the LocalBite Community",
      subtitle: "Share your reviews and celebrate local flavors.",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper  overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh] lg:h-[80vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end items-center text-center pb-16 px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg md:text-xl drop-shadow-sm max-w-3xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
