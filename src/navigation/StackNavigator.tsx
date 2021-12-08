import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './../screens/Homescreen';
import DetailScreen from './../screens/DetailScreen';
import WikiScreen from "../screens/WikiScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator
            intialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Wiki" component={WikiScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigator;