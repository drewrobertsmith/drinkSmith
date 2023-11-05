import { Image, StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-paper";
import React from "react";

export default function DrinkDetail({ route }) {
  const { item } = route.params;

  // Helper function to render ingredients as Text components
  const renderIngredients = () => {
    return item.ingredients.map((ingredient, index) => (
      <Text key={index} style={styles.ingredient}>
        • {ingredient}
      </Text>
    ));
  };
  
  return (
    <View style={styles.bg}>
      <Card mode="contained" style={styles.card}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Title
          title={item.name}
          subtitle={item.shortDescription}
        />
        <Card.Content>
          {renderIngredients()}
          <Text style={styles.directions}>{item.directions}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 8,
  },
  card: {
    padding: 4,
    flex: 1,
  },
  ingredient: {
    // Styles for ingredient text
    padding: 4,
  },
  directions: {
    paddingTop: 8
  }
});
