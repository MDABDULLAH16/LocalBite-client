import { ArrowUpRight, Eye, Info } from "lucide-react";
import { Link } from "react-router";

const LatestReviewCard = ({ review }) => {
  const {
    foodName,
    foodImage,
    restaurantName,
    location,
    userName,
    ratings,
    userImage,
    _id
  } = review;

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
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{foodName}</h3>
          <p className="text-gray-500 mt-1 text-sm">
            🍴 {restaurantName} — {location}
          </p>
        </div>

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
          <Link to={`/reviewDetails/${_id}`} className="bg-linear-to-r from-[#f82780] to-[#f82780] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
           <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestReviewCard;
