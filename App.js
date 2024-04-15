// App.js
import React from "react";

import { SafeAreaView, StatusBar } from "react-native";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Swiper from "react-native-swiper";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1A1E21" }}>
      <StatusBar barStyle="light-content" />
      <Swiper showsButtons={false}>
        <Screen1 />
        <Screen2 />
      </Swiper>
    </SafeAreaView>
  );
}
