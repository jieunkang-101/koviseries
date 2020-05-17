import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import Input from "../../components/Search/Input";


const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text``;

const SearchPresenter = () => {
  return (
    <Container>
      <Input 
        placeholder={"Search Movies & TV Shows"}
      />
    </Container>
  )
}

export default SearchPresenter

