import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { trimText, trimDate } from "../../utils";

const Container = styled.View`
  padding: 0px 15px;
  margin-bottom: 30px
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  width: 65%;
  margin-left: 25px;
`;

const Title = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: bold;
  margin: 5px 0px 10px 0px;
`;

const Name = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: bold;
  margin: 5px 0px 10px 0px;
`;

const Text = styled.Text`
  color: rgb(245, 161, 144);
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 7px;
`;

const ReleaseDate = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 14px;
`;

const FirstAirDate = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 14px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
`;

const FlatList = ({ id, poster, title, name, releaseDate, firstAirDate, overview }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title
    })
  }
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url = {poster} />
        <Data>
          {title ? (<Title>{trimText(title, 27)}</Title>) : null}
          {title ? <Text>Movie</Text> : null}
          {name ? (<Name>{trimText(name, 27)}</Name>) : null}
          {name ? <Text>TV Show</Text> : null}
          {releaseDate ? (
            <ReleaseDate>{trimDate(releaseDate)}</ReleaseDate>
            ) : null}
          {firstAirDate ? (
            <ReleaseDate>{trimDate(firstAirDate)}</ReleaseDate>
            ) : null}  
          <Overview>{trimText(overview, 70)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  )
}

FlatList.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  releaseDate: PropTypes.string,
  firstAirDate: PropTypes.string,
  overview: PropTypes.string.isRequired
};

export default FlatList
