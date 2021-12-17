import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import COLORS from '../assets/COLORS';
import images from '../assets/CONSTANTS';

const Results = ({ name, company, country, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{name}</Text>
                    <Text numberOfLines={1} style={styles.text}>{company}, {country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical:10,
    },
    textWrapper: {
        flex: 1,
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
    },
    text: {
        color: COLORS.oxfordBlue,
    },
    name: {
        color: COLORS.oxfordBlue,
        fontSize: 18,
        fontWeight: 'bold'
    }


})

export default Results;