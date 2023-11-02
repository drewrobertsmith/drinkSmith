import { Text, View } from "react-native";

import DrinkCard from "../components/drinkCard.component";
import React from "react";

export default function DrinkDetail({ route }) {
  const { drink } = route.params;
  return (
    <View>
        <DrinkCard drink={drink}/>
    </View>
  );
}
