import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./Screens/MainScreen";
import ExerciseScreen from "./Screens/ExerciseScreen";
import ListScreen from "./Screens/ListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// E
// Create a FruitScreen component that
// displays the names of two fruits using let and const variables.

// M
// Create a QuoteScreen component that displays a quote and its author.
// Use let and const variables for the quote and author.

// H
// Create a FactsScreen component that displays three facts.
// Use a combination of let and const variables and different styles for each fact.