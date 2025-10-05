import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishlist } from "../../Utility/addToDB";
import ListedBook from "../ListedBook/ListedBook";
import Banner from "../../components/Banner/Banner";
import toast, { Toaster } from "react-hot-toast";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
  const readListData = useLoaderData();

  useEffect(() => {
    
    const storedBookData = getStoredBook().map((id) => parseInt(id));
    const myReadList = readListData.filter((book) =>
      storedBookData.includes(book.bookId)
    );
    setReadList(myReadList);

    
    const storedWishlistData = getStoredWishlist().map((id) => parseInt(id));
    const myWishlist = readListData.filter((book) =>
      storedWishlistData.includes(book.bookId)
    );
    setWishlist(myWishlist);
  }, []);

  const handelSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPage);
      toast.success("Sorted by Pages!", { position: "top-center", duration: 2000 });
    }
    if (type === "ratings") {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
      toast.success("Sorted by Ratings!", { position: "top-center", duration: 2000 });
    }
  };

  const handelWishlistSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
      setWishlist(sortedByPage);
      toast.success("Wishlist sorted by Pages!", { position: "top-center", duration: 2000 });
    }
    if (type === "ratings") {
      const sortedByRatings = [...wishlist].sort((a, b) => a.rating - b.rating);
      setWishlist(sortedByRatings);
      toast.success("Wishlist sorted by Ratings!", { position: "top-center", duration: 2000 });
    }
  };

  return (
    <div className="flex gap-10 flex-col items-center">
      <Toaster />
      <Banner />

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

       
        <TabPanel>
          <div className="dropdown dropdown-bottom dropdown-center mb-4">
            <div tabIndex={0} role="button" className="btn m-1 rounded-xl bg-green-100 text-green-500">
              Sort By : {sort ? sort : ""} ⬇
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-200 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li><a onClick={() => handelSort("pages")}>Pages</a></li>
              <li><a onClick={() => handelSort("ratings")}>Ratings</a></li>
            </ul>
          </div>
          {readList.map((book) => (
            <ListedBook key={book.bookId} book={book} />
          ))}
        </TabPanel>

        
        <TabPanel>
          <div className="dropdown dropdown-bottom dropdown-center mb-4">
            <div tabIndex={0} role="button" className="btn m-1 rounded-xl bg-green-500 text-white">
              Sort By : {sort ? sort : ""} ⬇
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li><a onClick={() => handelWishlistSort("pages")}>Pages</a></li>
              <li><a onClick={() => handelWishlistSort("ratings")}>Ratings</a></li>
            </ul>
          </div>
          {wishlist.map((book) => (
            <ListedBook key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;