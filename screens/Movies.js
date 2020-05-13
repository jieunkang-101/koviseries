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
import { movieApi } from "../api";
import { View, Text } from "react-native";

export default () => {
 
  const [nowPlaying, setNowPlaying] = useState({
    movies: [],
    error: null
  });

  const getData = async () => {

    const results = await movieApi.nowPlaying();
    console.log(results);
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