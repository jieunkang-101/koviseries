import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies/MoviesController";
import Tv from "../screens/TvShow/TvController";
import Search from "../screens/Search/SearchController";
import Favs from "../screens/Favorites/FavsController";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

const TabNavigator = ({ navigation, route }) => {  
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({ 
      title: name, 
      headerStyle: {
        backgroundColor: "rgb(194, 29, 87)",
        borderBottomColor: "rgb(194, 29, 87)"
      }
    });  
  }, [route]);
 
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Movies") {
            return <FontAwesome5 name="film" color={focused ? "white" : "grey"} size={24} />
          } else if (route.name === "TV") {
            return <FontAwesome5 name="tv" color={focused ? "white" : "grey"} size={22} />
          } else if (route.name === "Search") {
            return <FontAwesome5 name="search" color={focused ? "white" : "grey"} size={24} />
          } else if (route.name === "Favorites") {
            return <FontAwesome5 name="heart" color={focused ? "white" : "grey"} size={24} />
          }
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "black",
          borderTopColor: "black"
        }
      }}
    >
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="TV" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favorites" component={Favs} />
  </Tabs.Navigator>
  );
};

export default TabNavigator;