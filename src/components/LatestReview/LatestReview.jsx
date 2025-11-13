import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Container from "../Container/Container";
import { Link } from "react-router";
const url = import.meta.env.VITE_BACKEND_URL;
const LatestReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${url}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const filter = data.slice(0, 6);
        setReviews(filter);
      });
  }, []);
  return (
    <Container>
      <div>
        <h1 className="  text-center font-bold font-poppins  text-3xl lg:text-5xl my-6">
          {" "}
          Latest{" "}
          <span data-aos="zoom-up" className="text-primary">
            Review Post
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
       <div className="flex items-center justify-center">
            <Link to="/reviews" className="btn btn-primary my-6 ">
              Show All
            </Link>
       </div>
      </div>
    </Container>
  );
};

export default LatestReview;
