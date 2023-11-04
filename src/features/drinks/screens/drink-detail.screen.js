import { Image, StyleSheet, Text, View } from "react-native";

import DrinkCard from "../components/drink-card.component";
import React from "react";

export default function DrinkDetail({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={styles.bg}>
      <DrinkCard item={item}/>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 8
  }
});