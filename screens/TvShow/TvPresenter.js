import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import PresenterContainer from "../../components/PresenterContainer";
import { Dimensions, ScrollView, Text } from "react-native";
import SlideTitle from "../../components/SlideTitle";
import BgSlide from "../../components/TvShow/BgSlide";
import BgSlideContainer from "../../components/BgSlideContainer";
import CardSlide from "../../components/CardSlide";
import ScrollCard from "../../components/Movies/ScrollCard";


const TvPresenter = ({ loading, popular, today, thisWeek, topRated }) => {
  return (
    <PresenterContainer loading={loading}>  
      <>
        <SlideTitle title={"TV Shows Popular"} />
        <BgSlideContainer>
          <Swiper controlsEnabled={false} loop timeout={5}>
            {popular.map(show => (
              <BgSlide
                key={show.id}
                id={show.id}
                name={show.name}
                originalName={show.original_name}
                overview={show.overview}
                votes={show.vote_average}
                backgroundImage={show.backdrop_path}
                poster={show.poster_path}
              />
            ))}
          </Swiper>
        </BgSlideContainer>
        <SlideTitle title={"TV Shows Airing Today"} />
        <ScrollView 
            horizontal={true}
            contentContainerStyle={{
              paddingLeft: 15,
              paddingBottom: 30,           
            }}
            showsHorizontalScrollIndicator={false}
          >
            {today.map(show => (
              <CardSlide
                key={show.id}
                id={show.id}
                poster={show.poster_path}
                name={show.name}
                votes={show.vote_average}
              />
            ))}
          </ScrollView>
          <SlideTitle title={"TV Shows On The Air"} />      
          <SlideTitle title={"TV Shows Top Rated"} />   


      </>  
    </PresenterContainer>
   
  )
}

export default TvPresenter
