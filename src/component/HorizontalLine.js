import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

export default function HorizontalLine({ horizontalLineStyle = {} }) {
  return (
    <View style={{ ...styles.horizontalLine, ...horizontalLineStyle }}></View>
  );
}

const styles = StyleSheet.create({
  horizontalLine: { borderBottomColor: Colors.GRAY, borderBottomWidth: 0.6 },
});
