import DrinksNavigator from "./src/infastructure/navigation/drinks.navigator";
import FavoritesScreen from "./src/features/favorites/favorites.screen";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const DrinksTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PaperProvider>
        <SafeArea>
          <NavigationContainer>
            <DrinksTab.Navigator>
              <DrinksTab.Screen name="Drinks" component={DrinksNavigator} />
              <DrinksTab.Screen name="Favorites" component={FavoritesScreen} />
            </DrinksTab.Navigator>
          </NavigationContainer>
        </SafeArea>
      </PaperProvider>
    </>
  );
}
