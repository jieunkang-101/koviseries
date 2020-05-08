import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    // mode="modal"
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black"
      },
      headerTintColor: "#FFFFFF",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tab" component={Tabs} options={{gestureEnabled: true}} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)