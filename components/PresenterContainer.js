import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";

const PresenterContainer = ({loading, children, contentContainerStyle}) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </ScrollView>
  );
};

PresenterContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
};

export default PresenterContainer;