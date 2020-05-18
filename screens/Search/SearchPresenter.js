import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import Input from "../../components/Search/Input";
import FlatList from "../../components/Search/FlatList";
import PresenterContainer from "../../components/PresenterContainer";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({ refreshData, movies, shows, keyword, onChange, onSubmit }) => {
  return (   
    <PresenterContainer   
      loading={false}
      refreshData={refreshData}
      contentContainerStyle={{
        paddingTop: 10
      }}
    >
      <Container>
        <Input 
          placeholder={"Search Movies & TV Shows"}
          value={keyword}
          onChange={onChange} 
          onSubmit={onSubmit}
        />
        <ScrollView> 
          {movies.map(movie => (
            <FlatList
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </ScrollView>
        <ScrollView> 
          {shows.map(show => (
            <FlatList
              isTv = {true}
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              name={show.name}
              firstAirDate={show.first_air_date}
              overview={show.overview}
            />
          ))}
        </ScrollView>
      </Container>
    </PresenterContainer>
  )
}

export default SearchPresenter

