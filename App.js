import React, { useState } from "react";
import { Image, Text } from "react-native";
import { AppLoading } from 'expo';


const cacheImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
});


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://unsplash.com/photos/_0UgNXhFzT8",
      require("./assets/splash.jpg")
    ]);
    return Promise.all([...images]);
  }  

  const onFinish = () => setIsReady(true);
  return isReady ? null : (
    <AppLoading   
      startAsync={loadAssets} 
      onFinish={onFinish} 
      onError={console.error} 
    />
  );  
}
