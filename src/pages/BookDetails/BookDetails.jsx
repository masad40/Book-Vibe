import React from "react";
import { useLoaderData, useParams } from "react-router";
import star from "../../assets/icons8-half-star-rating-24.png";
import { addToStoredBD, addToWishlistBD } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookId);

  const handelMarkAsRead = (id) => {
    addToStoredBD(id);
  };

  const handleWishlist = (id) => {
    addToWishlistBD(id)
  };


  return (
    <div
      className="w-9/10 mx-auto 
        "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className=" p-15 bg-gray-100 rounded-xl">
          <img
            className="h-130 w-750 shadow-base-content shadow-2xl rounded-sm"
            src={singleBook.image}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="font-bold text-[2rem]">{singleBook.bookName}</h1>
          <h5 className="font-medium my-5">By : {singleBook.author}</h5>
          <p className="border-y-1 border-dashed border-gray-500 py-2 font-medium">
            {singleBook.category}
          </p>
          <p className="py-4">
            <span className="font-bold">Review:</span> {singleBook.review}
          </p>
          <p className="flex mb-3 gap-20 border-b-2 pb-3 border-dashed border-gray-400">
            <span className="font-bold">Tag</span>
            <span className="text-green-500 py-1 px-4 rounded-xl bg-gray-100">
              #{singleBook.tags[0]}
            </span>
            <span className="py-1 px-4 rounded-xl bg-gray-100 text-green-500">
              #{singleBook.tags[1]}
            </span>
          </p>
          <p className=" mb-3">
            Number of Pages :{" "}
            <span className="font-medium"> {singleBook.totalPages}</span>
          </p>
          <p className=" mb-3 ">
            Publisher :
            <span className="font-medium"> {singleBook.publisher}</span>
          </p>
          <p className=" mb-3">
            Year of Publishing :
            <span className="font-medium"> {singleBook.yearOfPublishing}</span>
          </p>
          <p className=" mb-3 flex gap-2">
            Rating :
            <span className="font-medium flex items-center gap-1">
              {" "}
              {singleBook.rating} <img src={star} className="h-[16px]" />
            </span>
          </p>
          <div className="">
            <button
              onClick={() => handelMarkAsRead(id)}
              className="btn hover:bg-blue-500  hover:text-white"
            >
              Read
            </button>
            <button 
              onClick={()=>handleWishlist(id)}
              className="btn ml-5 hover:bg-blue-500 hover:text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
