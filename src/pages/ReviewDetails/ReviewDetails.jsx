import React from "react";
import { useLoaderData, Link } from "react-router";
import Container from "../../components/Container/Container";

export default function ReviewDetails() {
  const data = useLoaderData();

  // defensive defaults in case some fields are missing
  const {
    foodName = "Unknown Food",
    foodImage = "",
    restaurantName = "Unknown Restaurant",
    location = "Unknown Location",
    userName = "Anonymous",
    userEmail = "",
    userImage = "",
    ratings = 0,
    description = "No description provided.",
    createdAt,
  } = data || {};

  const createdAtLabel = createdAt
    ? new Date(createdAt).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Unknown date";

  // render star rating (rounded to nearest half star visually)
  const renderStars = (value) => {
    const fullStars = Math.floor(value);
    const halfStar = value - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++)
      stars.push(<span key={"f" + i}>★</span>);
    if (halfStar) stars.push(<span key={"h"}>☆</span>);
    for (let i = 0; i < emptyStars; i++)
      stars.push(<span key={"e" + i}>✩</span>);

    return (
      <div className="text-yellow-500 text-lg flex items-center gap-1">
        {stars}
        <span className="ml-2 text-gray-600 text-sm">{value.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Container>
        <div data-aos='zoom-in-up' className="w-full mx-auto py-6">
          <Link
            to=".."
            className="inline-block mb-4 text-sm text-blue-600 hover:underline"
          >
            ← Back to reviews
          </Link>
    
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* left: food image */}
            <div className="md:col-span-1 bg-gray-50 flex items-center justify-center p-4">
              {foodImage ? (
                <img
                  src={foodImage}
                  alt={foodName}
                  className="w-full h-64 object-cover rounded-xl shadow-inner"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </div>
    
            {/* right: details */}
            <div className="md:col-span-2 p-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold">{foodName}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {restaurantName} • {location}
                  </p>
                </div>
    
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    {renderStars(Number(ratings || 0))}
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
    
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
                      Share
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-pink-400 text-white text-sm hover:opacity-95">
                      Open Map
                    </button>
                  </div>
                </div>
              </div>
    
              <hr className="border-dashed" />
    
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium">Description</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
    
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      userImage ||
                      "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(userName)
                    }
                    alt={userName}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
    
                  <div>
                    <div className="font-medium">{userName}</div>
                    <div className="text-xs text-gray-500">{userEmail}</div>
                  </div>
                </div>
    
                <div className="text-right text-sm text-gray-500">
                  Posted: {createdAtLabel}
                </div>
              </div>
    
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 border rounded-lg">
                  <div className="text-xs text-gray-500">Restaurant</div>
                  <div className="font-medium">{restaurantName}</div>
                </div>
    
                <div className="p-3 border rounded-lg">
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-medium">{location}</div>
                </div>
    
                <div className="p-3 border rounded-lg">
                  <div className="text-xs text-gray-500">Score</div>
                  <div className="font-medium">
                    {Number(ratings || 0).toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
}
