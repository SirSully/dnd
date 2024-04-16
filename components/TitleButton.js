import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleButton = ({ source }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.titleButton,
      ]}
    >
      <Image source={source} />
    </Pressable>
  );
};

export default TitleButton;

const styles = StyleSheet.create({
  titleButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#1A1E21",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#989898",
    borderWidth: 1,
    marginHorizontal: 5,
  },
});
