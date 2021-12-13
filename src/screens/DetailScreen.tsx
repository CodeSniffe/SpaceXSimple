import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, FlatList } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import COLORS from "../assets/COLORS";

const DetailScreen = ({ navigation, route }) => {

    const item = route.params.value;

    return (

        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icons name="arrow-left" size={30} color={COLORS.orangeWeb} onPress={() => navigation.goBack()} />
                <Icons name="dots-horizontal-circle" size={30} color={COLORS.orangeWeb} onPress={() => navigation.navigate('Wiki', { value: item })} />
            </View>

            {/* More Info */}

            {/* <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg' }}
                        style={styles.image}
                    /> */}
            <View style={styles.textWrapper}>
                <Text style={styles.name}>{item.name}</Text>

                {/* Company and Country */}
                <View style={styles.companyWrapper}>
                    <View>
                        <Text style={styles.label}>Made By</Text>
                        <Text style={styles.text}>{item.company}</Text>

                        <Text style={styles.label}>Country</Text>
                        <Text style={styles.text}>{item.country}</Text>

                        <Text style={styles.label}>Cost per Launch</Text>
                        <Text style={styles.text}>$ {item.cost_per_launch.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>

                    <Text style={styles.text}>Success Rate: {item.success_rate_pct}%</Text>
                    </View>

                    {/* Specfication */}
                    <View>
                        <Text style={styles.label}>Specifications</Text>
                        <Text style={styles.text}>Mass: {item.mass.kg.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} kg</Text>
                        <Text style={styles.text}>Diameter: {item.diameter.meters}m</Text>
                        <Text style={styles.text}>Height: {item.height.meters}m</Text>
                        <Text style={styles.text}>Engine: {item.engines.type} ({item.engines.version})</Text>

                        <Text style={styles.label}>First Flight Date</Text>
                        <Text style={styles.text}>{item.first_flight}</Text>
                    </View>
                </View>

                {/* Payload */}
                <View style={styles.payloadWrapper}>
                    <Text style={styles.label}>Payload Weights</Text>
                    <FlatList
                        data={item.payload_weights}
                        renderItem={({ item }) => {
                            return (
                                <Text style={styles.text}>{item.name}: {item.kg.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} kg</Text>
                            )
                        }}
                    />
                </View>

                {/* Stages */}
                <View style={styles.stagesWrapper}>
                    <View>
                        <Text style={styles.label}>First Stage</Text>
                        <Text style={styles.text}>Thrust: {item.first_stage.thrust_vacuum.kN.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} kN</Text>
                        <Text style={styles.text}>Burn time: {item.first_stage.burn_time_sec} second</Text>
                        <Text style={styles.text}>Fuel Usage: {item.first_stage.fuel_amount_tons} ton</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Second Stage</Text>
                        <Text style={styles.text}>Thrust: {item.second_stage.thrust.kN} kN</Text>
                        <Text style={styles.text}>Burn time: {item.second_stage.burn_time_sec} second</Text>
                        <Text style={styles.text}>Fuel Usage: {item.second_stage.fuel_amount_tons} ton</Text>
                    </View>
                </View>

                {/* Description */}
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
            </View>

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
    },
    label: {
        color: COLORS.orangeWeb,
        fontWeight: 'bold'
    },
    text: {
        color: COLORS.oxfordBlue,
        // fontWeight: 'bold',
        paddingVertical: 3
    },
    textWrapper: {
        padding: 15,
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
        width: Dimensions.get('screen').width * 0.95,
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
        paddingVertical: 5,
    },
    payloadwrapper: {
        paddingVertical: 10,
    },
    stagesWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    descriptionWrapper: {
        paddingVertical: 10,
    },
    descriptionText: {
        color: COLORS.oxfordBlue,
        lineHeight: 22,
        textAlign: 'justify'
    }

})

export default DetailScreen;