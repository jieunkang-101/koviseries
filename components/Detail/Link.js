import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-weight: 600;
  margin: 0px 15px 0px 25px;
  padding-bottom : 15px;
  opacity: 0.8;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <FontAwesome name={icon} color="white" size={30} />
      <Text style={{ color: "white" }}>{text}</Text>
    </Container>
  </TouchableOpacity>
);

export default Link;