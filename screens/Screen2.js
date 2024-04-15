import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import BodyTextComponent from "../components/BodyTextComponent";
import PowerCard from "../components/PowerCard";

const backgroundImageUri =
  "https://s3-alpha-sig.figma.com/img/07ac/8866/e12bf65a70ceab97166ddf12595bfddf?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5zLCLZ2sVbvDZ9s87x-cB0HTevqRg~YO-mrfw80STQPvSJInFXvN8lK3ClDHHXiA4Ni~YPYviunk4UnWO22oci5FAkht4bBImNhmjclO8Zmr9fkCmkEBDP0l-GStIVtk5azpTyovnUekGR-ziMCBqhvMN61qAvhIWB3zZnHhAt3q1ue1uNDVigdY91vwCtsyAzQNP1ZQnzWNogwo57XR8r0Zue3pkFvIzdeGAiA1zW8xN-US95D6bpDp9oXXllVZIwF3nLLg7nuaEAC6w-b3ixC3AaxfHUn2sAHjhMTXssWKJglRL5vRthlGH2~eDC736UVPDtNk7re9oxVcRTGyA__";

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Character</Text>
        <Pressable style={styles.titleButton}>
          <Image source={require("../assets/save.png")} />
        </Pressable>
        <Pressable style={styles.titleButton}>
          <Image source={require("../assets/x.png")} />
        </Pressable>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/orc.png")}
            style={{
              width: 120,
              height: 120,
              borderRadius: 65,
            }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <BodyTextComponent title="Name" text="Orc" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: 60 }}>
                <BodyTextComponent title="Defense" text="14" center />
              </View>
              <View style={{ width: 60 }}>
                <BodyTextComponent title="Health" text="165" center />
              </View>
              <View style={{ width: 60 }}>
                <BodyTextComponent title="Level" text="16" center />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 10,
          }}
        >
          <View style={{ width: "50%", marginRight: 5 }}>
            <BodyTextComponent title="Race" text="Orc" />
          </View>

          <View style={{ width: "50%", marginLeft: 5 }}>
            <BodyTextComponent title="Class" text="Figher" />
          </View>
        </View>
        <BodyTextComponent
          title="Reference"
          text="Monster Manual 4e page 123"
        />
      </View>
      <View
        style={[
          styles.bottomContainer,
          { borderColor: "#484848", borderWidth: 1 },
        ]}
      >
        <View style={[styles.bottomTextView, { width: 140 }]}>
          <View style={{ flexDirection: "row" }}>
            <Pressable style={[styles.downButton]}>
              <Image source={require("../assets/plus.png")} />
            </Pressable>
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.bottomText}>Add Power</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          <PowerCard
            source={require("../assets/fireball.png")}
            title="Fireball"
            action="3D 6+10"
          />
          <PowerCard
            source={require("../assets/axe.png")}
            title="Axe Attack"
            action="1D 12 + Str"
          />
          <PowerCard
            source={require("../assets/bow.png")}
            title="Longbow"
            action="1D8 + Dex"
          />
          <PowerCard
            source={require("../assets/tree.png")}
            title="Tree of Knowledge"
            action="2D10 + Int"
          />
          <PowerCard
            source={require("../assets/fury.jpg")}
            title="Orcish Fury"
            action="1D12 + Str"
          />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bottomContainer: {
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
  topContainer: {
    height: 136,
    width: "100%",
    backgroundColor: "red",
  },
  titleBar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#0E40C0",
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

export default Screen2;
