import DrinkDetail from "../../features/drinks/screens/drink-detail.screen";
import DrinksScreen from "../../features/drinks/screens/drinks.screen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const DrinksStack = createNativeStackNavigator();

export default function DrinksNavigator() {
  return (
    <DrinksStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "containedModal",
      }}
    >
      <DrinksStack.Screen name="Drinks List" component={DrinksScreen} />
      <DrinksStack.Screen name="Favorites" component={DrinkDetail} />
    </DrinksStack.Navigator>
  );
}
