import React from 'react';

const ListedBook = ({book}) => {
    return (
        <div className='flex flex-col md:flex-row mt-5 border rounded-xl border-dotted border-gray-400 gap-4 md:gap-10 p-3 items-center'>
            <div className="p-3 md:p-5 bg-gray-100 rounded-lg ">
                <img 
                    src={book.image} 
                    alt={book.bookName} 
                    className="h-[200px] md:h-[250px] w-full object-contain shadow-base-content shadow-xl rounded-sm" 
                />
            </div>
            <div className="space-y-2 p-2">
                <h1 className="font-bold text-xl md:text-2xl">{book.bookName}</h1>
                <p className="font-semibold text-sm md:text-base">By : {book.author}</p>
                <div className="flex flex-col md:flex-row md:gap-8 text-sm md:text-base">
                    <span className='font-semibold'>Tag:</span>
                    <span>{book.tags[0]}</span>
                    <span>{book.tags[1]}</span>
                    <span>Year: {book.yearOfPublishing}</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-5 text-sm md:text-base">
                    <span>Publisher: {book.publisher}</span>
                    <span>Page: {book.totalPages}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-3 border-t-2 border-dashed border-gray-400">
                    <p className="py-1 px-3 text-sm rounded-2xl text-blue-500 bg-blue-100">
                        Category: {book.category}
                    </p>
                    <p className="py-1 px-3 text-sm rounded-2xl text-violet-500 bg-violet-100">
                        Rating: {book.rating}
                    </p>
                    <button className='btn btn-sm md:btn-md rounded-2xl bg-green-100 text-green-500 hover:bg-amber-200'>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;