import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

// export default ({navigation}) => {
//   console.log(navigation);
//   navigation.setOptions({ title: "Hello"});
//   setTimeout(() => navigation.setOptions({ title: "Hello"}), 1000 );
//   setTimeout(() => navigation.setOptions({ title: "Bye bye"}), 2000 );
//   setTimeout(() => navigation.setOptions({ title: "Hello again"}), 3000 );


export default ({route}) => {  
  useEffect(() => {
    console.log("the route changed");
  }, [route])
 
  return (
  <Tabs.Navigator>
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="TV" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favs" component={Favs} />
  </Tabs.Navigator>
  );
};