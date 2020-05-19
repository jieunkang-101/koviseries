import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const BgSlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin: 15px 0px 30px 15px;
`;

export default BgSlideContainer;