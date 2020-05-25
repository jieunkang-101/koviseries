import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.Text`
  color: rgb(220, 220, 220);
  margin-top: 3px;
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐️ {votes} / 10</Container>;

Votes.propTypes = {
  votes: PropTypes.number
};

export default Votes;