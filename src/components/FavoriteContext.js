import React, { createContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const isFavorite = id => favoriteIds.indexOf(id) > -1;
  const addFavoriteId = id => {
    if (!isFavorite(id)) {
      setFavoriteIds([...favoriteIds, id]);
    }
  };
  const removeFavoriteId = id =>
    setFavoriteIds(favoriteIds.filter(favId => favId !== id));

  return (
    <FavoriteContext.Provider
      value={{
        favoriteIds,
        setFavoriteIds,
        addFavoriteId,
        removeFavoriteId,
        toggleFavoriteId: id =>
          isFavorite(id) ? removeFavoriteId(id) : addFavoriteId(id),
        isFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;