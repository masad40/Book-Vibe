// ✅ Read List Storage
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  return storedBookSTR ? JSON.parse(storedBookSTR) : [];
};

const addToStoredBD = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("This book is already in your reading list!");
    return false;
  }
  storedBookData.push(id);
  localStorage.setItem("readList", JSON.stringify(storedBookData));
  alert("Book added to reading list successfully!");
  return true;
};

// ✅ Wishlist Storage
const getStoredWishlist = () => {
  const storedWishlistSTR = localStorage.getItem("wishlist");
  return storedWishlistSTR ? JSON.parse(storedWishlistSTR) : [];
};

const addToWishlistBD = (id) => {
  const storedWishlistData = getStoredWishlist();
  if (storedWishlistData.includes(id)) {
    alert("This book is already in your wishlist!");
    return false;
  }
  storedWishlistData.push(id);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlistData));
  alert("Book added to wishlist successfully!");
  return true;
};


export {
  getStoredBook,
  addToStoredBD,
  getStoredWishlist,
  addToWishlistBD
};