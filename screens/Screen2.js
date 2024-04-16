import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import BodyTextComponent from "../components/BodyTextComponent";
import PowerCard from "../components/PowerCard";
import TitleButton from "../components/TitleButton";
import AddPowerButton from "../components/AddPowerButton";

const backgroundImageUri =
  "https://s3-alpha-sig.figma.com/img/07ac/8866/e12bf65a70ceab97166ddf12595bfddf?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5zLCLZ2sVbvDZ9s87x-cB0HTevqRg~YO-mrfw80STQPvSJInFXvN8lK3ClDHHXiA4Ni~YPYviunk4UnWO22oci5FAkht4bBImNhmjclO8Zmr9fkCmkEBDP0l-GStIVtk5azpTyovnUekGR-ziMCBqhvMN61qAvhIWB3zZnHhAt3q1ue1uNDVigdY91vwCtsyAzQNP1ZQnzWNogwo57XR8r0Zue3pkFvIzdeGAiA1zW8xN-US95D6bpDp9oXXllVZIwF3nLLg7nuaEAC6w-b3ixC3AaxfHUn2sAHjhMTXssWKJglRL5vRthlGH2~eDC736UVPDtNk7re9oxVcRTGyA__";

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Character</Text>
        <TitleButton source={require("../assets/save.webp")} />
        <TitleButton source={require("../assets/x.webp")} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/orc.webp")} style={styles.orcImg} />
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
            <BodyTextComponent title="Class" text="Fighter" />
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
        <AddPowerButton />
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          <PowerCard
            source={require("../assets/fireball.webp")}
            title="Fireball"
            action="3D 6+10"
          />
          <PowerCard
            source={require("../assets/axe.webp")}
            title="Axe Attack"
            action="1D 12 + Str"
          />
          <PowerCard
            source={require("../assets/bow.webp")}
            title="Longbow"
            action="1D8 + Dex"
          />
          <PowerCard
            source={require("../assets/tree.webp")}
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
      <View style={[styles.bottomContainer, { flex: 1 }]}>
        <View style={{ flexDirection: "row", paddingBottom: 5 }}>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={styles.bottomTextTitle}>Story</Text>
          </View>
          <TitleButton source={require("../assets/minus.webp")} />
        </View>

        <TextInput editable={false} style={styles.storyInput} />
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
    padding: 10,
  },
  bottomText: {
    fontSize: 18,
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
    padding: 8,
    marginBottom: 10,
  },
  downButton: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  orcImg: {
    width: 120,
    height: 120,
    borderRadius: 55,
    marginRight: 5,
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  storyInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#989898",
    flex: 1,
    backgroundColor: "white",
  },
  titleBar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#0E40C0",
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
});

export default Screen2;
