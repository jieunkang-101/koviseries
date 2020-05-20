import React, { useContext } from "react";
import styled from "styled-components/native";
import FavoriteContext from "../../components/FavoriteContext";
import CardList from "../../components/Favs/CardList";
import PresenterContainer from "../../components/PresenterContainer";

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 30px;
`;

const FavsPresenter = () => {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  console.log("favorites", favorites);
  return (
    <PresenterContainer>
      <Container>
        {favorites.map(fav => (
          <CardList
            id={fav.id}
            key={fav.id}
            poster={fav.poster_path}
            title={fav.title}
            votes={fav.vote_average}
          />
        ))}
      </Container>
    </PresenterContainer>
  );
};

export default FavsPresenter;
