import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigator from './StackNavigator';
import SearchScreen from "../screens/SearchScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../assets/COLORS";
import ResultStackNavigator from "./ResultStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigtor = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:COLORS.orangeWeb,
                tabBarInactiveTintColor:COLORS.platinum,
                tabBarActiveBackgroundColor: COLORS.oxfordBlue,
                tabBarInactiveBackgroundColor: COLORS.oxfordBlue,
            }}
        >
            <Tab.Screen name='Homescreen' component={StackNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={25} />
                )
            }} />
            <Tab.Screen name='Searchscreen' component={ResultStackNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="magnify" color={color} size={25} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigtor