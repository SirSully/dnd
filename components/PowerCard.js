import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const PowerCard = ({ source, title, action }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={styles.container}
    >
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={source}
        style={styles.imageBackground}
      >
        <View
          style={[
            styles.overlay,
            { opacity: isPressed ? 0 : 0.6 }, // Adjust opacity based on press state
          ]}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.action}>{action}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default PowerCard;

const styles = StyleSheet.create({
  action: {
    fontSize: 16,
    color: "#fff",
    paddingBottom: 5,
    textAlign: "center",
  },
  container: {
    paddingRight: 10,
  },
  imageStyle: {
    borderRadius: 8,
    borderColor: "#484848",
    borderWidth: 1,
  },
  imageBackground: {
    width: 110,
    height: 154,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 1,
    left: 1,
    width: 108,
    height: 152,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 5,
    textAlign: "center",
  },
});
