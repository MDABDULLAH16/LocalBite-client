import { useState, useEffect } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useLoaderData } from "react-router";
import Loader from "../../components/Loader/Loader";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BACKEND_URL);


const Reviews = () => {
  const initialReviews = useLoaderData();
  const [reviews, setReviews] = useState(initialReviews);
  const [search, setSearch] = useState(""); // search input
  const [loading, setLoading] = useState(false);
console.log(search);

  // Fetch reviews when search changes
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND_URL}/reviews?search=${search}`);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to avoid calling API on every keystroke
    const delayDebounce = setTimeout(() => {
      fetchReviews();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search]);
  return (
    <div className="px-4 py-10 bg-gray-50 min-h-screen">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-8 text-gray-800"
      >
        🍔 All Food Reviews {reviews.length }
      </h2>

      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search food..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
       <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
