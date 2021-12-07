import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './../screens/Homescreen';
import DetailScreen from './../screens/DetailScreen';

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
        </Stack.Navigator>

    )
}

export default StackNavigator;