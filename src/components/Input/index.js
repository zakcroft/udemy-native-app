import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default class Input extends Component {
  render() {
    const { handlePlaceNameChange, handleOnPress, placeName } = this.props;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="great place"
          value={placeName}
          onChangeText={handlePlaceNameChange}
        />
        <Button
          style={styles.placeButton}
          onPress={handleOnPress}
          title="Add"
          color="#841584"
          accessibilityLabel="Add to list"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
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
