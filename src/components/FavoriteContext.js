import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

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

FavoriteContext.propTypes = {
  children: PropTypes.node
};

export default FavoriteContext;