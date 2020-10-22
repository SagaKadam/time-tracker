import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView
} from "react-native";
import HomeView from "./src/components/Home/HomeView";

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeView />
    </SafeAreaView>
  );
};

export default Main;
