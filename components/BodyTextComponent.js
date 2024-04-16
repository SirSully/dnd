import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const BodyTextComponent = ({ title, text, flex, center, dropdown }) => {
  return !dropdown ? (
    <View style={[flex && { flex: 1 }, center && styles.centeredText]}>
      <Text style={styles.bottomTextTitle}>{title}</Text>
      <View
        style={[
          styles.bottomTextView,
          flex && { flex: 1 },
          center && styles.centeredText,
        ]}
      >
        <Text
          style={[
            styles.bottomText,
            (title === "Title" || title === "Name") && { fontSize: 18 },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  ) : (
    <View>
      <Text style={styles.bottomTextTitle}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            styles.bottomTextView,
            {
              flexDirection: "row",
              flex: 1,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.bottomText]}>{text}</Text>
          </View>
          <Pressable style={styles.downButton}>
            <Image source={require("../assets/down.webp")} />
          </Pressable>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.plusContainer,
            {
              backgroundColor: pressed ? "greenyellow" : "green",
            },
          ]}
        >
          <View style={styles.downButton}>
            <Image source={require("../assets/plus.webp")} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default BodyTextComponent;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 15,
    color: "white",
  },
  bottomTextTitle: {
    color: "#999999",
    fontSize: 14,
    padding: 2,
  },
  bottomTextView: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#464646",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
  centeredText: {
    justifyContent: "center",
    alignItems: "center",
  },

  downButton: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  plusContainer: {
    width: 36,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#464646",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
