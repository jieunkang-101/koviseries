import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

const HorizontalSlider = ({ children }) => (
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

HorizontalSlider.propTypes = {
  children: PropTypes.node.isRequired
};

export default HorizontalSlider;