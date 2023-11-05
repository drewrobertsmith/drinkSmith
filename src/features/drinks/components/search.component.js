import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { filter } from "lodash";

export const Search = ({ fullDATA, setDrinksDATA }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    const filteredData = filter(fullDATA, (drink) => {
      return contains(drink, query);
    });
    setDrinksDATA(filteredData);
  };

  //parameters to search by
  const contains = ({ baseSpirit, name, ingredients }, query) => {
    const lowerCaseQuery = query.toLowerCase();
    if (
        baseSpirit.toLowerCase().includes(lowerCaseQuery) || 
        name.toLowerCase().includes(lowerCaseQuery) ||
        ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
        ) {
      return true;
    }
    return false;
  };

  return (
    <TextInput
      style={styles.search}
      placeholder="Search"
      autoCapitalize="none"
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query) => handleSearch(query)}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});
