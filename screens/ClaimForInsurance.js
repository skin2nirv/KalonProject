import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ClaimForInsurance extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ClaimForInsurance SCREEN!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
