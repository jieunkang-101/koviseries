import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { trimText } from "../../../utils";

const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  border: 0.5px
  border-color: grey;
  width: 300px;
  height: 200px;
`;

const Author = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 15px;
  opacity: 0.8;
`;

const Content = styled.Text`
  color: white;
  font-weight: 500;
  margin: 30px 30px 30px 30px;
  opacity: 0.8;
`;
  
const ReviewSlide = ({ id, author, content, url }) => {

  return (
    <Container>
      <Author>{author}</Author> 
      <Content>{trimText(content, 150)}</Content>
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
