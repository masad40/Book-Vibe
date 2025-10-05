import React from "react";
import BannerImg from "../../assets/books.jpg" 

const Banner = () => {
  return (
    <div className="hero bg-gray-100 rounded-2xl py-10 pt-5">
      <div className="hero-content flex-col  md:flex-row-reverse md:gap-30">
        <img
          src={BannerImg}
          className="md:w-4/12 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold py-6">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn btn-primary ">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
