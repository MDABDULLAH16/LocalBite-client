import {   useState } from "react";
import { useLoaderData } from "react-router";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Reviews = () => {
  const initialReviews = useLoaderData();
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <div className="px-4 py-10 bg-gray-50 min-h-screen">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-8 text-gray-800"
      >
        🍔 All Food Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
