import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`;

const SlideTitle = ({ title }) => <Text>{title}</Text>;

SlideTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SlideTitle;