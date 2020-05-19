import React from 'react'
import { View, Text } from 'react-native'

const Favs = ({ navigation, route }) => {
  console.log(navigation);
  console.log(route.params.result);
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Favs;
