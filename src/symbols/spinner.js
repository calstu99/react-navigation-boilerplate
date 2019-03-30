import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default class spinner extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 22,
    width: 22,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ActivityIndicator style={styles.activityIndicator1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center"
  },
  activityIndicator1: {
    width: 22,
    height: 22
  }
});
