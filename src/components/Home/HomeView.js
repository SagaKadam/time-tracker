import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeViewStyle from "./HomeViewStyle";

const HomeView = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        <Text style={HomeViewStyle.welcomeHeader}>Good Morning!</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity 
            style={HomeViewStyle.mainActionButton}
            onPress={() => {
            console.log("button pressed")
        }}>
            <Text style={HomeViewStyle.mainActionButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
