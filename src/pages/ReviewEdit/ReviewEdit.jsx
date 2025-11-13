import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";

const url = import.meta.env.VITE_BACKEND_URL;

const ReviewEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the review by ID
  useEffect(() => {
    fetch(`${url}/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading review:", err);
        setLoading(false);
      });
  }, [id]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  // Handle update submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Review Updated!",
            text: "Your review has been successfully updated.",
            timer: 1800,
            showConfirmButton: false,
          });
          navigate("/myReviews");
        } else {
          Swal.fire({
            icon: "info",
            title: "No changes made",
            text: "You didn’t change any fields.",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong. Please try again.",
        });
        console.error(err);
      });
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Edit Your Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={review.foodName || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="block font-semibold mb-1">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            value={review.restaurantName || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={review.location || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* image */}
        <div>
          <label className="block font-semibold mb-1">Food Image</label>
          <input
            type="url"
            name="foodImage"
            value={review.foodImage || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Ratings */}
        <div>
          <label className="block font-semibold mb-1">Ratings</label>
          <input
            type="number"
            name="ratings"
            value={review.ratings || 0}
            min="1"
            max="5"
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={review.description || ""}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewEdit;
