export const getFavouriteItems = () => {
  const ls = localStorage.getItem("favourites");
  return ls ? JSON.parse(ls) : [];
};
