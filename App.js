import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Input from "./src/components/Input";
import List from "./src/components/List";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  handlePlaceNameChange = placeName => {
    this.setState({
      placeName
    });
  };

  handleOnPress = () => {
    const trimmedName = this.state.placeName.trim();
    if (trimmedName) {
      this.setState(({ places }) => {
        return {
          places: [...places, trimmedName]
        };
      });
    }
  };

  render() {
    const { places, placeName } = this.state;
    return (
      <View style={styles.container}>
        <Input
          placeName={placeName}
          handlePlaceNameChange={this.handlePlaceNameChange}
          handleOnPress={this.handleOnPress}
        />
        <List list={places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
