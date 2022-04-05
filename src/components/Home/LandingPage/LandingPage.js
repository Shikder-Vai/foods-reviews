import React from "react";

const LandingPage = () => {
  return (
    <div className="md:flex justify-center items-center bg-slate-900">
      <div className="details-container text-white md:w-[50%]">
        <h1 className=" text-4xl font-bold"> Avocado-and-Egg-Toast</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab
          odio vel at, unde aut nihil voluptatem reiciendis quia asperiores hic
          non, atque eaque quaerat quas quam! Reprehenderit, quam quaerat?
        </p>
      </div>
      <div className="md:w-[50%]">
        <img src="https://i.ibb.co/0Qd2DmS/Avocado-and-Egg-Toast.jpg" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
