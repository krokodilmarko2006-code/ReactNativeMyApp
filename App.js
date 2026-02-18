import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonScreen from "./Screens/ButtonScreens";
import MainScreen from "./Screens/MainScreen";
import ExerciseScreen from "./Screens/ExerciseScreen";
import MenuScreen from "./Screens/MenuScreen";
import StudentScreen from "./Screens/StudentScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="List" component={ExerciseScreen} />
        <Stack.Screen name="Students" component={StudentScreen} />
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