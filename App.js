import DrinksScreen from "./src/features/drinks/screens/drinks.screen";
import { PaperProvider } from "react-native-paper";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PaperProvider>
        <SafeArea>
          <DrinksScreen />
        </SafeArea>
      </PaperProvider>
    </>
  );
}
