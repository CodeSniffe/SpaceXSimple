import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/navigation/StackNavigator";
import BottomTabNavigtor from "./src/navigation/BottomTabNavigator";
const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigtor />
    </NavigationContainer>
  )
}

export default App;