import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button4 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 36,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={this.props.root ? this.props.root : null}
      >
        <Text style={styles.buttonContent}>
          {this.props.buttonContent ? this.props.buttonContent : "BUTTON"}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  buttonContent: {
    fontSize: 18,
    fontWeight: "200",
    color: "rgba(255,255,255,1)",
    fontFamily: "AvenirNext-Regular",
    lineHeight: "140%",
    letterSpacing: 1
  }
});
