import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import COLORS from './../assets/COLORS';
import images from './../assets/CONSTANTS';

const RocketCard = ({ id, name, company, country, onPress }) => {

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={images.falcon1}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.text}>{company}, {country}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        margin: 15,
        width: Dimensions.get('screen').width * 0.8,
    },
    image: {
        height: '80%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
    },
    textWrapper: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.oxfordBlue,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        justifyContent: 'center',
    },
    text: {
        color: COLORS.platinum,
    },
    name: {
        color: COLORS.orangeWeb,
        fontSize: 18,
        fontWeight: 'bold'
    }


})

export default RocketCard;