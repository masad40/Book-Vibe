import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <h1 className="text-center text-[48px] font-semibold py-10">Books</h1>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-3 md:gap-10">
        {data.map((SBook) => (
          <Book key={SBook.bookId} SBook={SBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
