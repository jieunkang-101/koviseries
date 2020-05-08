import React, { useState } from "react";
// import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { AppLoading } from 'expo';


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {};
  const onFinish = () => setIsReady(true);
  return isReady ? null : (
    <AppLoading   
      startAsync={loadAssets} 
      onFinish={onFinish} 
      onError={console.error} 
    />
  );  
}
