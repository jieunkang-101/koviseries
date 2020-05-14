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
 
  // const [nowPlaying, setNowPlaying] = useState({
  //   movies: [],
  //   error: null
  // });

  // const getData = async () => {
  //   const { data } = await movieApi.nowPlaying();
  //   console.log(data);
  //   try {
  //     const { 
  //       data: { results } 
  //     } = await movieApi.nowPlaying();
  //     setNowPlaying({
  //       movies: results,
  //       error: null
  //     })
  //   } catch(e) {
  //     setNowPlaying({
  //       error: e
  //     })
  //   }   
  // }
  // console.log(nowPlaying); 

  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    console.log(nowPlaying, error);
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