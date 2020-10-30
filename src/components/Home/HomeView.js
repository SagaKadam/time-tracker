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
            const { time, paused } = this.state;
            if (!paused) {
              this.setState({
                time: time + 1000
              });
            }
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
    const { time } = this.state;
    return (
      <TouchableOpacity
        style={HomeViewStyle.mainActionButton}
        onPress={() => {
          const { paused } = this.state;
          this.setState({
            paused: !paused
          });
        }}
      >
        <Text style={HomeViewStyle.mainActionButtonText}>{time}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { time } = this.state;
    console.log("paused " + this.state.paused);
    return (
      <View style={[{ flex: 1 }, HomeViewStyle.homeViewContainer]}>
        <View style={{ flex: 1 }}>
          <Text style={HomeViewStyle.welcomeHeader}>
            {i18n.Home.WELCOME_HEADER}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          {time > 0 ? this.renderRunningTimer() : this.renderStartButton()}
        </View>
      </View>
    );
  }
}

export default HomeView;
