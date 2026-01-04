import { ArrowUpRight, Heart } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const url = import.meta.env.VITE_BACKEND_URL;
const ReviewCard = ({ review }) => {
  const {user}= useContext(AuthContext)
  const {
    foodName,
    foodImage,
    restaurantName,
    location,
    userName,
    ratings,
    userImage,
   
    _id,
  } = review;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const myFavoriteReview = {
      reviewId: _id,
      userEmail: user.email
    };
    setIsFavorite(true);
    fetch(`${url}/myFavorites`, {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(myFavoriteReview)
    }).then(res => res.json()).then(data => {
      toast.error(data.message)
      
      if (data.insertedId) {
        toast.success('Add Successful!')
      }
    }).catch(err=>toast.error(err.message))
  };

  return (
    <div
      data-aos="zoom-in-up"
      className="bg-white shadow-md rounded-2xl overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300 w-full max-w-sm mx-auto"
    >
      {/* Food Image */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="h-52 w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-[#f82780] text-white px-2 py-1 text-sm rounded-lg font-semibold">
          {ratings} ★
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{foodName}</h3>
            <p className="text-gray-500 mt-1 text-sm">
              🍴 {restaurantName} — {location}
            </p>
          </div>

          {/* ❤️ Favorite Heart */}
          <span
            onClick={handleFavorite}
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
          >
            <Heart
              fill={isFavorite ? "#f82780" : "transparent"}
              color={isFavorite ? "#f82780" : "#9ca3af"} // gray when unliked
              size={22}
            />
          </span>
        </div>

        {/* User Info & Button */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
              {userImage ? (
                <img className="rounded-full" src={userImage} />
              ) : (
                userName?.charAt(0)?.toUpperCase()
              )}
            </div>
            <p className="text-gray-700 font-medium text-sm">{userName}</p>
          </div>

          <Link
            to={`/reviewDetails/${_id}`}
            className="bg-[#f82780] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
          >
            <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
