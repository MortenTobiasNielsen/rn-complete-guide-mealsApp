import React from "react";
import { Text, StyleSheet } from "react-native";

import StandardFonts from "../constants/fonts";

const DefaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: StandardFonts.openSans,
  },
});

export default DefaultText;
