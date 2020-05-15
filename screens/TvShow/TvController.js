import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import { View, Text, Button } from "react-native";

const TvController = ({navigation}) => {
  const [shows, setShows] = useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      today,
      todayError,
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      popular,
      popularError
    });
    console.log(topRated);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>{shows.topRated?.length}</Text>
      <Button title="TV Show" onPress={() => navigation.navigate("Detail")} />
    </View>
  )
};

export default TvController;