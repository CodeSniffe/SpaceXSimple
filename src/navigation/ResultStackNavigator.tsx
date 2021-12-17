import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from './../screens/SearchScreen';
import ResultScreen from './../screens/ResultScreen';

const Stack = createStackNavigator();

const ResultStackNavigator = () => {

    return (
        <Stack.Navigator
            intialRouteName="Search"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>

    )
}

export default ResultStackNavigator;