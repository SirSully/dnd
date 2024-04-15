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

const backgroundImageUri =
  "https://s3-alpha-sig.figma.com/img/c197/bbf4/efd5cb65abe0457c7520a266fdcf7f1e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g38cigY4Ps68nUHA9yMf~cywCxtvouRx7i0k9ugWZIWJpwH5td8Taenn2C0B5uvYVur-Ayv-huueF~sTbbfWMyfONR9uMi-AHI6TvGEwrwyuanhb5fdB34xzppBpEY-DYdIIDyVp6fVHXIRzHutBgy4jZxHJi3FTSM2pbpawZi4CDGIdnjk~giqmDs3UrDYswpbfh2ZWrokEofTkYiOXdFhIJ3RJaDOqwk3z0QybfEGMHJExMsnTjSyj5diGGODJh2g5Embo~SobktgwuAhGaFUFa11owNUzBbKmcUBGt0HUFoe9mJS~osNBhRyd~yCG6n6c45kx4JIxXlyYJx3EoA__";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: backgroundImageUri,
        }}
        style={styles.topContainer}
      >
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Story</Text>
          <Pressable style={styles.titleButton}>
            <Image source={require("../assets/save.png")} />
          </Pressable>
          <Pressable style={styles.titleButton}>
            <Image source={require("../assets/x.png")} />
          </Pressable>
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
  bottomTextTitle: {
    color: "#999999",
    fontSize: 14,
    padding: 2,
  },
  bottomText: {
    fontSize: 15,
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
  topContainer: {
    height: 136,
    width: "100%",
    backgroundColor: "red",
  },
  titleBar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(26, 30, 33, 0.7)",
    padding: 10,
    alignItems: "center",
  },
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
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
});

export default Screen1;
