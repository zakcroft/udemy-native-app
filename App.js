import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = name => {
    this.setState({
      placeName: name
    });
  };

  onPressLearnMore = () => {
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
    const { places } = this.state;
    const placesList = places.map((p, i) => <Text key={i}>{p}</Text>);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="great place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            style={styles.placeButton}
            onPress={this.onPressLearnMore}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>{placesList}</View>
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
  },
  inputContainer: {
    //flex: 1,
    ///backgroundColor: "green",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
