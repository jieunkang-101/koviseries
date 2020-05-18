import React from "react";
import styled from "styled-components/native";
import PresenterContainer from "../../components/PresenterContainer";
import BgImg from "../../components/BgImg";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { Dimensions, ActivityIndicator } from "react-native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
`;

const OriginalTitle = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 4}px;
  align-items: center;
  justify-content: flex-end;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;



const DetailController = ({ loading, backgroundImage, poster, title, originalTitle, votes, overview }) => {




  return (
    <PresenterContainer loading={false}>
      <Header>
        <BgImg url={backgroundImage} />
        <Container>
          <Poster url={poster} />
          <Info>
            <Title>{title}</Title>
            <OriginalTitle>| {originalTitle}</OriginalTitle>
            {votes ? <Votes votes={votes} /> : null }
          </Info>
        </Container>
      </Header>
      {loading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        ) : null}
      <Data>
        <DataName>Overview</DataName>
        <DataValue>{overview}</DataValue>
  
      </Data>
    </PresenterContainer>

  )
};

export default DetailController;