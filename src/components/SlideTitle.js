import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 22px;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SlideTitle = ({ title }) => <Text>{title}</Text>;

SlideTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SlideTitle;