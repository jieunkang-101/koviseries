import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { trimText } from "../../../utils";
import { FontAwesome } from '@expo/vector-icons'; 

const Container = styled.View`
  margin-right: 15px;
  border: 0.5px
  border-color: grey;
  width: 300px;
  height: 170px;
  border-radius: 6px;
`;

const Author = styled.Text`
  justify-content: flex-end;
  padding-top: 20px;
  padding-left: 30px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  opacity: 0.8;
`;

const Content = styled.Text`
  align-items: center;
  color: white;
  font-weight: 500;
  margin: 15px 20px 10px 20px;
  opacity: 0.8;
`;
  
const ReviewSlide = ({ id, author, content, url }) => {
  return (
    <Container>
      <Author><FontAwesome name="pencil-square-o" size={24} color="white" /> by. {author}</Author> 
      <Content>{trimText(content, 110)}</Content>
    </Container>
  );
};

ReviewSlide.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default ReviewSlide
