import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const PowerCard = ({ source, title, action }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={source}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.action}>{action}</Text>
      </ImageBackground>
    </View>
  );
};

export default PowerCard;

const styles = StyleSheet.create({
  container: { paddingRight: 10 },
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
  action: {
    fontSize: 16,
    color: "#fff",
    paddingBottom: 5,
    textAlign: "center",
  },
});
