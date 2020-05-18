import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import Input from "../../components/Search/Input";
import FlatList from "../../components/Search/FlatList";
import PresenterContainer from "../../components/PresenterContainer";

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text``;

const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => {
  return (   
    <PresenterContainer   
      loading={false}
      contentContainerStyle={{
        paddingTop: 10
      }}
    >
      <Input 
        placeholder={"Search Movies & TV Shows"}
        value={keyword}
        onChange={onChange} 
        onSubmit={onSubmit}
      />
      <ScrollView> 
        {movies.map(movie => (
          <FlatList
            key={movie.id}
            id={movie.id}
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
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            name={show.name}
            firstAirDate={show.first_air_date}
            overview={show.overview}
          />
        ))}
      </ScrollView>
    </PresenterContainer>
  )
}

export default SearchPresenter

