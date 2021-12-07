import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import COLORS from './../assets/COLORS';

const RocketCard = ({ name, company, country, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SpX_CRS-2_launch_-_further_-_cropped.jpg/800px-SpX_CRS-2_launch_-_further_-_cropped.jpg" }}
                    style={styles.image}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.bottomTextWrapper}>
                        <Text style={styles.text}>{company}, {country}</Text>
                        <Text style={styles.text}></Text>
                    </View>
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
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 15,
        margin: 10,
    },
    image: {
        height: 250,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
        resizeMode:'cover'
    },
    textWrapper: {
        padding: 16,
        backgroundColor:COLORS.oxfordBlue,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,

    },
    bottomTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
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