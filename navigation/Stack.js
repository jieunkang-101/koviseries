import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)