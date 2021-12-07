import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import COLORS from "../assets/COLORS";

const DetailScreen = ({ navigation, route }) => {

    const item = route.params.value;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icons name="arrow-left" size={30} color={COLORS.orangeWeb} onPress={() => navigation.goBack()} />
            </View>
            {/* More Info */}
            <View style={styles.infoWrapper}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SpX_CRS-2_launch_-_further_-_cropped.jpg/800px-SpX_CRS-2_launch_-_further_-_cropped.jpg" }}
                    style={styles.image}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{item.name}</Text>

                    <Text style={styles.label}>Company</Text>
                    <Text style={styles.text}>{item.company}</Text>

                    <Text style={styles.label}>Country</Text>
                    <Text style={styles.text}>{item.country}</Text>

                    <Text style={styles.label}>Cost per Launch</Text>
                    <Text style={styles.text}>$ {Number(item.cost_per_launch).toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>

                    <Text style={styles.label}>Launch Success Rate</Text>
                    <Text style={styles.text}>{item.success_rate_pct}%</Text>

                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.text}>{item.description}</Text>
                </View>
            </View>

        </View >
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
    image: {
        height: '50%',
        width: '100%',
    },
    label:{
        color:COLORS.orangeWeb,
    },
    text: {
        color: COLORS.oxfordBlue,
        fontWeight:'bold',
        paddingVertical:3,
    },
    infoWrapper: {},
    textWrapper: {
        paddingHorizontal: 15,
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.oxfordBlue
    }

})

export default DetailScreen;