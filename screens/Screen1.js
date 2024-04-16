import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import BodyTextComponent from "../components/BodyTextComponent";
import TitleButton from "../components/TitleButton";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/table.webp")}
        style={styles.topContainer}
      >
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Story</Text>
          <TitleButton source={require("../assets/save.webp")} />
          <TitleButton source={require("../assets/x.webp")} />
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <BodyTextComponent title="Title" text="Children of Yahr" />
        <BodyTextComponent title="System" text="D&D 4th Edition" />
        <BodyTextComponent title="Party" text="Flying Dragons" dropdown />
        <BodyTextComponent title="Currency" text="Gold" />
        <BodyTextComponent
          title="Log Line"
          text="After the death of an ancient King, a desert world is thrown into chaos while an elite solder and his crew fight for their very survuval of their race."
        />
        <BodyTextComponent
          title="Synopsis"
          text="Tobin leaves home and heads to The Cradle"
          flex
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bottomContainer: {
    flex: 1,
    padding: 10,
  },
  titleBar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(26, 30, 33, 0.7)",
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  topContainer: {
    height: 136,
    width: "100%",
  },
});

export default Screen1;
