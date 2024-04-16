import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const AddPowerButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      style={[
        styles.bottomTextView,
        { width: 140 },
        isPressed && { backgroundColor: "green" },
      ]}
    >
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[{ flexDirection: "row" }]}
      >
        <View style={[styles.downButton]}>
          <Image source={require("../assets/plus.webp")} />
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.bottomText}>Add Power</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default AddPowerButton;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 18,
    color: "white",
  },
  bottomTextView: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#464646",
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  downButton: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
