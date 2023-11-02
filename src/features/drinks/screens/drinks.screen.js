import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DrinkCard from "../components/drinkCard.component";
import React from "react";

const DRINKS = [
  {
    id: 1,
    name: "Old Fashioned",
    shortDescription: "Bold and Boozy",
    image: require("../../../../assets/old-fashioned.jpg"),
    baseSpirit: "Whiskey",
    ingredients: {
      base: "2oz Bourbon",
      modifier: ".25oz demerara syrup",
      bitters: "2 dashes angostura bitters",
      bitters: "2 dashes orange bitters",
      garnish: "expressed orange peel",
    },
    directions:
      "Combine all ingredients in a rocks glass, add a big ice cube and stir till chilled, express orange peel and place in drink",
  },
  {
    id: 2,
    name: "Martini",
    shortDescription: "Elegant and Refined",
    image: require("../../../../assets/martini.jpg"),
    baseSpirit: "Gin",
    ingredients: {
      base: "2.5oz Gin",
      modifier: ".25oz Dry Vermouth",
      modifier: ".25oz Blanc Vermouth",
      bitters: "1 dash orange bitters",
      garnish: "expressed lemon peel",
    },
    directions:
      "Stir all ingredients over ice, strain into a chilled coup. Express the lemon peel over the drink and place on rim",
  },
  {
    id: 3,
    name: "Daiquiri",
    shortDescription: "Tropical and Fun",
    image: require("../../../../assets/Daiquiri.jpg"),
    baseSpirit: "Rum",
    ingredients: {
      base: "2oz Bourbon",
      modifier: "1/4oz demerara syrup",
      bitters: "2 dashes angostura bitters",
      bitters: "2 dashes orange bitters",
      garnish: "expressed orange peel",
    },
    directions:
      "Combine all ingredients in a rocks glass, add a big ice cube and stir till chilled, express orange peel and place in drink",
  },
];

export default function DrinksScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DRINKS}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Favorites", {
                  drink: item,
                })
              }
            >
              <DrinkCard drink={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  item: {
    padding: 4,
  },
});
