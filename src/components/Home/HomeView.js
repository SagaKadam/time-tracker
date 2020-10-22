import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeViewStyle from "./HomeViewStyle";
import i18n from "../../i18n/i18n";

const HomeView = () => {
  return (
    <View style={[{flex: 1}, HomeViewStyle.homeViewContainer]}>
      <View style={{ flex: 1 }}>
        <Text style={HomeViewStyle.welcomeHeader}>{i18n.Home.WELCOME_HEADER}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity 
            style={HomeViewStyle.mainActionButton}
            onPress={() => {
            console.log("button pressed")
        }}>
            <Text style={HomeViewStyle.mainActionButtonText}>{i18n.Home.START}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
