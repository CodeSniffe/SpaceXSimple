import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from "../assets/COLORS";

const WikiScreen = ({ navigation, route }) => {

    const item = route.params.value;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icons name="arrow-left" size={30} color={COLORS.orangeWeb} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>More Information</Text>
            </View>
            <WebView source={{ uri: item.wikipedia }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: COLORS.oxfordBlue
    },
    headerText: {
        color: COLORS.orangeWeb,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
});

export default WikiScreen;