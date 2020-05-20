import React, { createContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const isFavorite = favorite => favorites.some(fav => fav.id === favorite.id);
  const addFavorite = favorite => {
    if (!isFavorite(favorite)) {
      setFavorites([...favorites, favorite]);
    }
  };
  const removeFavorite = favorite =>
    setFavorites(favorites.filter(fav => fav.id !== favorite.id));

  // console.log("list", favorites);
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        toggleFavorite: favorite =>
          isFavorite(favorite)
            ? removeFavorite(favorite)
            : addFavorite(favorite),
        isFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;