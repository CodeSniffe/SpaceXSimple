import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

import COLORS from './../assets/COLORS';
import images from './../assets/CONSTANTS';

const RocketCard = ({ id,name, company, country, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image
                    // source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SpX_CRS-2_launch_-_further_-_cropped.jpg/800px-SpX_CRS-2_launch_-_further_-_cropped.jpg" }}
                    style={styles.image}
                    source={images.Falcon_Heavy}
                />
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
        marginTop: 15,
        margin: 10,
        width: Dimensions.get('screen').width * 0.8,
    },
    image: {
        height: '90%',
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