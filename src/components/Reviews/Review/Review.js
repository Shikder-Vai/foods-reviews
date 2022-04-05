import React from "react";

const Review = ({ review }) => {
  const { name, img, reviews, ratting } = review;
  return (
    <div className="m-4 p-6 border-2 border-gray-200 items-center bg-slate-400 flex flex-col text-white">
      <img className="h-[110px] w-[110px] rounded-[50%] " src={img} alt="" />
      <h1 className="text-xl font-bold mt-2">Name: {name}</h1>
      <p className=" text-1xl mt-2">Rating: {ratting}%</p>
      <p className="text-lg">{reviews}</p>
    </div>
  );
};

export default Review;
