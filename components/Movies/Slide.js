import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, Image } from "react-native";
import { apiImage } from "../../api";


const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: absolute;
`; 

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const Slide = ({ id, title, originalTitle, backgroundImage, votes, overview, poster }) => {

  return (
    <Container>
      <BackgroundImg source = {{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Data>
          <Title>{title} | {originalTitle}</Title>
          <Votes>{votes} /10</Votes>
          <Overview>{overview}</Overview>
        </Data>
      </Content>
    </Container>
  )
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};


export default Slide
