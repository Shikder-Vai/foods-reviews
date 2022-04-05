import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewsSection from "./ReviewsSection/ReviewsSection";

const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <div className="landing-page"></div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full">
        {reviews.slice(0, 3).map((review) => (
          <ReviewsSection key={review.id} review={review}></ReviewsSection>
        ))}
      </div>
    </div>
  );
};

export default Home;
