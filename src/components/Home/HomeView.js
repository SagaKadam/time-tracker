import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeViewStyle from "./HomeViewStyle";
import i18n from "../../i18n/i18n";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  renderStartButton() {
    return (
      <TouchableOpacity
        style={HomeViewStyle.mainActionButton}
        onPress={() => {
          setInterval(() => {
            //console.log("timer");
            this.setState({
              time: this.state.time + 1000
            });
          }, 1000);
        }}
      >
        <Text style={HomeViewStyle.mainActionButtonText}>
          {i18n.Home.START}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRunningTimer() {
    return (
      <TouchableOpacity
        style={HomeViewStyle.mainActionButton}
        onPress={() => {
          console.log("button pressed");
        }}
      >
        <Text style={HomeViewStyle.mainActionButtonText}>{this.state.time}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[{ flex: 1 }, HomeViewStyle.homeViewContainer]}>
        <View style={{ flex: 1 }}>
          <Text style={HomeViewStyle.welcomeHeader}>
            {i18n.Home.WELCOME_HEADER}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>{this.state.time}</Text>
          {this.renderStartButton()}
        </View>
      </View>
    );
  }
}

export default HomeView;
