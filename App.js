import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/Screens/MainScreen";
import ExerciseScreen from "./src/Screens/ExerciseScreen";
import ListScreen from "./src/Screens/ListScreen";
import ButtonScreen from "./src/Screens/ButtonScreen";
import MenuScreen from "./src/Screens/MenuScreen";
import StudentsScreen from "./src/Screens/StudentsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
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
