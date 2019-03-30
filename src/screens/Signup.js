import React, { Component } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Button
          title="Go to Next Screen"
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9013FE",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
