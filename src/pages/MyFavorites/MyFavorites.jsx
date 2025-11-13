import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useLoaderData, Link } from "react-router";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

const url = import.meta.env.VITE_BACKEND_URL;

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const allReviews = useLoaderData();

  const [myFavorites, setMyFavorites] = useState([]);
  const [favoriteReviews, setFavoriteReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user's favorite list
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`${url}/myFavorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyFavorites(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching favorites:", err);
        setLoading(false);
      });
  }, [user?.email]);

  // ✅ Filter favorite reviews when data is ready
  useEffect(() => {
    if (myFavorites.length > 0 && allReviews.length > 0) {
      const reviewIds = myFavorites.map((f) => f.reviewId);
      const filtered = allReviews.filter((r) => reviewIds.includes(r._id));
      setFavoriteReviews(filtered);
    } else {
      setFavoriteReviews([]);
    }
  }, [myFavorites, allReviews]);

  // ✅ Handle remove from favorites
  const handleRemoveFavorite = (id) => {
    Swal.fire({
      title: "Remove from favorites?",
      text: "Are you sure you want to remove this review from favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${url}/myFavorites/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Removed!",
                "Review removed from favorites.",
                "success"
              );
              const remaining = myFavorites.filter((fav) => fav._id !== id);
              setMyFavorites(remaining);
            }
          });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
      <h1 className="text-3xl text-primary sm:text-5xl font-bold mb-6 text-center">
        My Favorite Reviews:{" "}
        <span className="text-primary">{favoriteReviews.length}</span>
      </h1>

      {favoriteReviews.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full text-left text-xs sm:text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-2 sm:px-4">SL No</th>
                <th className="py-3 px-2 sm:px-4">Food</th>
                <th className="py-3 px-2 sm:px-4">User Info</th>
                <th className="py-3 px-2 sm:px-4">Ratings</th>
                <th className="py-3 px-2 sm:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favoriteReviews.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  {/* SL No */}
                  <td className="py-3 px-2 sm:px-4">{index + 1}</td>

                  {/* Food Info */}
                  <td className="py-3 px-2 sm:px-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <img
                        src={item.foodImage}
                        alt={item.foodName}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md border"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                          {item.foodName}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {item.restaurantName} - {item.location}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* User Info */}
                  <td className="py-3 px-2 sm:px-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                          {user.displayName}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 truncate max-w-[120px] sm:max-w-none">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Ratings */}
                  <td>
                    <button className="px-2 sm:px-3 py-1 ml-4 my-4 rounded-full bg-[#f82780] text-white transition text-xs sm:text-sm">
                      {item.ratings}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="py-3 sm:px-4 flex flex-col items-center justify-center lg:mt-2 sm:flex-row sm:space-x-2">
                    <Link
                      to={`/reviewDetails/${item._id}`}
                      className="px-2 sm:px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition text-xs sm:text-sm"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleRemoveFavorite(item._id)}
                      className="px-2 sm:px-3 py-1 text-red-500 border border-red-500 rounded hover:bg-red-50 transition text-xs sm:text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
