import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 100%;
  height:  100%;
  opacity: 0.5;
  position: absolute;
  border-radius: 4px;
  margin-right: 30px;
`;

const BackgroundImg = ({ url }) => {
  return (
    url ? (<Image source={{ uri: apiImage(url) }} />) : (<Image source={require('../assets/default-bg.jpeg')} />)
  );
};

BackgroundImg.propTypes = {
  url: PropTypes.string
};

export default BackgroundImg;