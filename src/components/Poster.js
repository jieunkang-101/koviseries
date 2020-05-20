import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
  border: 1px 
  border-style: solid;
  border-color: rgb(145, 122, 116);
  padding: 5px;
`;

const Poster = ({ url }) => {
  return (
    url ? (<Image source={{ uri: apiImage(url) }} />) : (<Image source={require('../../assets/default-poster.jpeg')} />)
  );
};

Poster.propTypes = {
  url: PropTypes.string
};

export default Poster;