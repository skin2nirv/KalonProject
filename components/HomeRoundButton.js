import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class HomeRoundButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          borderColor: "#F7D358",
          borderWidth: 0.5,
          borderRadius: 25,
          width: 130,
          height: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={this.props.onPressTopButton}
      >
        <Ionicons
          style={{ fontSize: 30, color: "#F7D358" }}
          name={this.props.name}
        />
        <Text style={{ paddingLeft: 10 }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
