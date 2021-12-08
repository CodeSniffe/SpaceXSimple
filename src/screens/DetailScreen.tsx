import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import COLORS from "../assets/COLORS";

const DetailScreen = ({ navigation, route }) => {

    const item = route.params.value;
    console.log(item)
    return (

        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icons name="arrow-left" size={30} color={COLORS.orangeWeb} onPress={() => navigation.goBack()} />
                <Icons name="dots-horizontal-circle" size={30} color={COLORS.orangeWeb} onPress={() => navigation.navigate('Wiki', { value: item })} />
            </View>

            {/* More Info */}
            <ScrollView style={styles.infoWrapper} contentContainerStyle={{ flexGrow: 1 }}>
                {/* <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg' }}
                        style={styles.image}
                    /> */}
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{item.name}</Text>

                    {/* Company and Country */}
                    <View style={styles.companyWrapper}>
                        <Text style={styles.label}>Made By</Text>
                        <Text style={styles.text}>{item.company}</Text>

                        <Text style={styles.label}>From</Text>
                        <Text style={styles.text}>{item.country}</Text>
                    </View>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.label}>Cost per Launch</Text>
                    <Text style={styles.text}>$ {item.cost_per_launch.toLocaleString("en-US", { style: "currency", currency: "USD" })}</Text>
                    <Text >First Flight Date</Text>
                    <Text>{item.first_flight}</Text>

                    <Text>First Stage</Text>
                    <Text>Thrust</Text>

                    <Text>Engine</Text>
                    <Text>Burn Time</Text>
                    <Text>{item.first_stage.engines}</Text>


                </View>
            </ScrollView>
        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        borderRadius: 12,
        resizeMode: '',
    },
    label: {
        color: COLORS.orangeWeb,
        fontWeight: 'bold'
    },
    text: {
        color: COLORS.oxfordBlue,
        // fontWeight: 'bold',
        paddingVertical: 3,
    },
    infoWrapper: {},
    textWrapper: {
        padding: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.oxfordBlue,
    },
    companyWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

})

export default DetailScreen;