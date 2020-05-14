// import React from "react";
// import { View, Text, Button } from "react-native";

// export default ({navigation}) => {
//   return (
//     <View style={{flex: 1, backgroundColor: "black"}}>
//       <Text>Movies</Text>
//       <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
//     </View>
//   )
// };
   
import React, { useEffect, useState } from "react";
import { movieApi,tvApi } from "../api";
import { View, Text } from "react-native";

export default () => {

  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [movie, setMovie] = useState();

  const getData = async () => {
    const [nowPlaying, nowPlyingError] = await movieApi.nowPlaying();
    setNowPlaying(nowPlaying);
    console.log(nowPlaying);
    const [popular, popularError] = await movieApi.popular();
    setPopular(popular);
    const [movie, movieError] = await movieApi.movie(496243);
    setMovie(movie);
    console.log(movie, movieError);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black"}}>
      <Text>Movies</Text>
    </View>
  );
};