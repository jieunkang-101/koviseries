import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

const ScrollViewContainer = ({ children }) => (
  <View>
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        paddingLeft: 15,
        paddingBottom: 30,           
      }}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
);

ScrollViewContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScrollViewContainer;