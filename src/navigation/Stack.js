import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../screens/Detail/DetailController";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    // mode="modal"
    screenOptions={{
      headerStyle: {
        backgroundColor: "green",
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

export default StackNavigator;