import React from "react";
import star from "../../assets/icons8-half-star-rating-24.png"
import { Link } from "react-router";

const Book = ({ SBook }) => {
  return (
    <Link to={`/BookDetails/${SBook.bookId}`}><div className="card w-full max-w-sm mx-auto bg-gray-50 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src={SBook.image}
          alt={SBook.bookName}
          className="h-[320px] w-full object-contain"
        />
      </figure>
      <div className="card-actions mt-3 justify-center px-4">
        <div className="badge badge-outline">{SBook.tags[0]}</div>
        <div className="badge badge-outline">{SBook.tags[1]}</div>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl">
          {SBook.bookName}
        </h2>
        <p className="text-sm md:text-base">
          By: {SBook.author}
        </p>
        <div className="card-actions mt-3 justify-between border-t-2 border-dashed border-gray-300 pt-3">
          <div className="text-sm">{SBook.category}</div>
          <div className="flex items-center gap-1">
            <span>{SBook.rating}</span>
            <img className="h-4" src={star} alt="rating" />
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Book;
