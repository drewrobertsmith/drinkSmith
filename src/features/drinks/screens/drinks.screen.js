import "react-native-url-polyfill/auto";

import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import DrinkCard from "../components/drink-card.component";
import { createClient } from "@supabase/supabase-js";

const URL = "https://btdwijqlskntdigvjhlp.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZHdpanFsc2tudGRpZ3ZqaGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4ODg5MzIsImV4cCI6MjAxNDQ2NDkzMn0.EWtTO3qAZCftNXZ7LGYSVoed8RN4eb7vqvWuVEaipLQ";

const supabase = createClient(URL, KEY, {
  detectSessionInUrl: false,
});

export default function DrinksScreen({ navigation }) {
  const [drinksDATA, setDrinksDATA] = useState([]);

  useEffect(() => {
    getDrinksData();
  }, []);

  async function getDrinksData() {
    const { data } = await supabase.from("Drinks").select();
    setDrinksDATA(data);
  }
  return (
    <View style={{ flex: 1 }}>
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
