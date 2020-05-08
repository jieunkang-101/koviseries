// import React, { useState } from "react";
// import { Text, Image, View } from "react-native";
// import { AppLoading } from 'expo';
// import { Asset } from "expo-asset";
// import { Ionicons } from "@expo/vector-icons";
// import * as Font from "expo-font";
// import { NavigationContainer } from "@react-navigation/native";
// import Stack from "./navigation/Stack";

// export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   const cacheResourcesAsync = () => {
//     const images = [
//       "https://images.unsplash.com/photo-1588892862675-802c046d2ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//       require("./assets/splash.jpg")
//     ];
//     const cacheImages = images.map(image => {
//       if (typeof image === "string") {
//         return Image.prefetch(image);
//       } else {
//         return Asset.fromModule(image).downloadAsync();
//       }
//     });

//     const fonts = [Ionicons.font];
//     const cacheFonts = fonts.map(font => Font.loadAsync(font));
//     return Promise.all([cacheImages, cacheFonts]);
//   }  

//   const onFinish = () => setIsReady(true);

//   return isReady ? (
//     // <View style={{ flex: 1 }}>
//     //   <Image source={require('./assets/splash.jpg')} />
//     // </View>
//     <NavigationContainer>
//       <Stack />
//     </NavigationContainer>
//   ) : (
//     <AppLoading   
//       startAsync={cacheResourcesAsync} 
//       onFinish={onFinish} 
//       onError={console.error} 
//     />
//   );  
// }



import React, { useState } from "react";
import { Text, Image, View } from "react-native";
import { AppLoading } from 'expo';
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
});

const cacheFonts = fonts =>
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1588892862675-802c046d2ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.jpg")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  }  
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading   
      startAsync={loadAssets} 
      onFinish={onFinish} 
      onError={console.error} 
    />
  );  
}
