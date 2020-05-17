import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";

const PresenterContainer = ({loading, children}) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start"
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </ScrollView>
  );
};

export default PresenterContainer;