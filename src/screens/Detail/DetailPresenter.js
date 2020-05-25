import React from "react";
import { Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PresenterContainer from "../../components/PresenterContainer";
import HeartButton from "../../components/Detail/HeartButton";
import BgImg from "../../components/BgImg";
import Votes from "../../components/Votes";
import ReviewSlide from "../../components/Detail/ReviewSlide";
import CardSlide from "../../components/CardSlide";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import Link from "../../components/Detail/Link";
import { formatDate, formatNumber } from "../../../utils";

const Header = styled.View`
  height: ${Dimensions.get("window").height / 4}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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

const Data = styled.View`
  padding: 30px 20px 10px 25px;
`;

const DataInline = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 16px;
`;

const DataName = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
  font-size: 18px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
  font-size: 16px;
`;

const Underline = styled.View`
  margin: 20px 0px 20px 0px;
  border-bottom-color: rgb(128, 77, 68);
  border-bottom-width: 1;
`;

const DetailPresenter = ({ 
  openBrowser, 
  loading, 
  result, 
  reviews, 
  similar 
}) => {
  console.log(reviews);
  return (
    <PresenterContainer loading={false}>
      <Header>
        <BgImg url={result.backgroundImage} />
        <Container>                  
          <Info>            
            <Title>{result.title}</Title>
            <OriginalTitle>| {result.originalTitle}</OriginalTitle>
            {result.votes ? <Votes votes={result.votes} /> : null }
          </Info>         
        </Container>
      </Header>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
      ) : null}   
      <Data>
        <HeartButton result={result} />
        {result.release_date ? (
          <DataInline> ▪︎ Release Date: {" "}{formatDate(result.release_date)}</DataInline>
        ) : null}
        {result.first_air_date ? (
          <DataInline> ▪︎  First Air Date: {" "}{formatDate(result.first_air_date)}</DataInline>
        ) : null}
        {result.runtime ? (
          <DataInline> ▪︎ Runtime: {" "}{result.runtime} min</DataInline>
        ) : null}
        {result.episode_run_time && result.episode_run_time.length !== 0 ? (
          <DataInline> ▪︎ Episode Runtime: {" "}{result.episode_run_time} min</DataInline>
        ) : null}
        {result.budget ? (
          <DataInline> ▪︎ Budget: {" "}${formatNumber(result.budget)} USD</DataInline>
        ) : null}
        {result.revenue ? (
          <DataInline> ▪︎ Revenue: {" "}${formatNumber(result.revenue)} USD</DataInline>
        ) : null}
        {result.genres?.length > 0 ? ( 
          <DataInline> ▪︎ Genres: {" "}
            {result.genres.map(genre => (
              "• " + genre.name + " "            
            ))}
          </DataInline>
        ) : null}
        {result.number_of_episodes ? (
          <DataInline> ▪︎ Seasons {result.number_of_seasons} ‣ Episodes {result.number_of_episodes}</DataInline>
        ) : null}
        {result.overview ? (
          <>
            <Underline />
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>  
        ) : null}
        {reviews?.length > 0 ? (
          <>
            <Underline />
            <DataName>Reviews</DataName> 
          </>
        ) : null}
        <ScrollViewContainer>  
          {reviews && reviews.map(movie => (
            // <TouchableOpacity onPress={() => openBrowser(movie.url)}>
              <ReviewSlide
                id={movie.id}
                key={movie.id}
                author={movie.author}
                content={movie.content}
                onPress={() => 
                  openBrowser(`${movie.url}`)
                }
              />
            // </TouchableOpacity>
          ))}
        </ScrollViewContainer>
        {result.imdb_id ? (
          <>
            <Underline />
            <DataName>Links</DataName>
            <Link
              text={"IMDB Page"}
              icon={"imdb"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
          </>
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <Underline />
            <DataName>Videos</DataName>
            {result.videos.results.map(video => (
              <Link
                key={video.id}
                text={video.name}
                icon={"youtube"}
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
        {similar?.length > 0 ? (
          <>
            <Underline />
            <DataName>Similar Movies</DataName>
          </>  
          ) : null}       
          <ScrollViewContainer>  
            {similar && similar.map(movie => (
              <CardSlide
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
        </ScrollViewContainer>    
      </Data>  
    </PresenterContainer>
  )
};

export default DetailPresenter;