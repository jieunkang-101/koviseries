import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import Input from "../../components/Search/Input";
import FlatList from "../../components/Search/FlatList";


const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text``;

const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => {
  return (
    <Container>
      <Input 
        placeholder={"Search Movies & TV Shows"}
        value={keyword}
        onChange={onChange} 
        onSubmit={onSubmit}
      />
      {/* <SlideTitle title={"Results"} /> */}
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
    </Container>
  )
}

export default SearchPresenter

