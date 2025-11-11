import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const review = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      restaurantName: form.restaurantName.value,
      location: form.location.value,
      userName: user.displayName || "",
      userEmail: user.email || "",
      userImage: user.photoURL || "",
      ratings: parseFloat(form.ratings.value),
      description: form.description.value,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${BACKEND_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Review added successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to add review");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-aos='zoom-in' className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="card w-full max-w-5xl shadow-xl bg-base-100 p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Your Review</h2>
        <form
          onSubmit={handleAddReview}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Food Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="foodName"
              placeholder="Enter food name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Food Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Image URL</span>
            </label>
            <input
              type="text"
              name="foodImage"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Restaurant Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Restaurant Name</span>
            </label>
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Restaurant location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Ratings */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="ratings"
              placeholder="Rate 1-5"
              className="input input-bordered w-full"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write your review..."
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            />
          </div>

          {/* User Info (readonly) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          <div className="lg:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className={`btn btn-primary w-full lg:w-1/2 ${
                loading ? "loading" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
