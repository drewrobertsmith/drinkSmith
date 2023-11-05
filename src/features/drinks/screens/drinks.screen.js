import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import DrinkCard from "../components/drink-card.component";
import { Search } from "../components/search.component";
import { getDrinksData } from "../../../services/drinks/drinks.service";

export default function DrinksScreen({ navigation }) {
  const [drinksDATA, setDrinksDATA] = useState([]);
  const [fullDATA, setfullDATA] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchDrinksData();
  }, []);

  async function fetchDrinksData() {
    try {
      const data = await getDrinksData();
      setDrinksDATA(data);
      setfullDATA(data);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error fetching data: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Search 
        fullDATA={fullDATA}
        setDrinksDATA={setDrinksDATA}
      />
      <FlatList
        data={drinksDATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Drink Details", {
                  item: item,
                })
              }
            >
              <DrinkCard item={item} />
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
