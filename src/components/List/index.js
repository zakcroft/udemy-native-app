import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../ListItem";

const List = ({ list }) => {
  return (
    <View style={styles.listContainer}>
      {list.map((p, i) => (
        <ListItem placeName={p} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default List;
