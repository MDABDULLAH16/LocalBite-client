import React from "react";
import LightGallery from "lightgallery/react";

// ✅ Import LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// ✅ Import Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Star } from "lucide-react";

// 🖼️ Your provided image URLs
const dishes = [
  {
    full: "https://i.ibb.co.com/nMpHqxHF/delicious-street-food-fest.jpg",
    thumb: "https://i.ibb.co.com/nMpHqxHF/delicious-street-food-fest.jpg",
    title: "Delicious Street Food Fest",
    rating: 4.8,
  },
  {
    full: "https://i.ibb.co.com/QFYQB1yL/food-vendor-street-food-stall.jpg",
    thumb: "https://i.ibb.co.com/QFYQB1yL/food-vendor-street-food-stall.jpg",
    title: "Food Vendor Street Stall",
    rating: 4.7,
  },
  {
    full: "https://i.ibb.co.com/93kzW7D4/people-ramadan-celebration.jpg",
    thumb: "https://i.ibb.co.com/93kzW7D4/people-ramadan-celebration.jpg",
    title: "Ramadan Celebration Feast",
    rating: 4.9,
  },
  {
    full: "https://i.ibb.co.com/bgtrb3Jw/portrait-indian-man-bazaar.jpg",
    thumb: "https://i.ibb.co.com/bgtrb3Jw/portrait-indian-man-bazaar.jpg",
    title: "Local Bazaar Food Vendor",
    rating: 4.6,
  },
  {
    full: "https://i.ibb.co.com/2YhL1JZw/street-food-still-life.jpg",
    thumb: "https://i.ibb.co.com/2YhL1JZw/street-food-still-life.jpg",
    title: "Street Food Still Life",
    rating: 4.5,
  },
  {
    full: "https://i.ibb.co.com/CpSNr3Hg/view-delicious-appetizing-street-food-1.jpg",
    thumb:
      "https://i.ibb.co.com/CpSNr3Hg/view-delicious-appetizing-street-food-1.jpg",
    title: "Appetizing Street Snacks",
    rating: 4.9,
  },
  {
    full: "https://i.ibb.co.com/HDLgDjxK/view-delicious-appetizing-street-food.jpg",
    thumb:
      "https://i.ibb.co.com/HDLgDjxK/view-delicious-appetizing-street-food.jpg",
    title: "Tasty Evening Street Food",
    rating: 4.7,
  },
  {
    full: "https://i.ibb.co.com/G3bZjzCC/view-delicious-food-sold-streets-city-1.jpg",
    thumb:
      "https://i.ibb.co.com/G3bZjzCC/view-delicious-food-sold-streets-city-1.jpg",
    title: "City Street Food Delight",
    rating: 4.8,
  },
//   {
//     full: "https://i.ibb.co.com/TxcYcyVQ/view-delicious-food-sold-streets-city.jpg",
//     thumb:
//       "https://i.ibb.co.com/TxcYcyVQ/view-delicious-food-sold-streets-city.jpg",
//     title: "Urban Street Food Scene",
//     rating: 4.6,
//   },
];

const TrendingDishes = () => {
  const onInit = () => {
    console.log("✅ LightGallery has been initialized");
  };

  return (
    <div className="p-10 bg-orange-50 min-h-screen">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 text-primary">
        Trending Dishes This Week
      </h2>

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {dishes.map((dish, index) => (
          <a
            key={index}
            href={dish.full}
            data-sub-html={`<h4>${dish.title}</h4><p>⭐ Rating: ${dish.rating}</p>`}
            className="relative group block overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={dish.thumb}
              alt={dish.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-2 left-2 bg-primary  text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star size={20} fill="#f7fc50"></Star> {dish.rating}
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-white font-semibold">
              View Dish
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default TrendingDishes;
