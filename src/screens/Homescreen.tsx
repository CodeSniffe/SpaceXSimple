import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, Alert, ActivityIndicator, TouchableOpacity } from "react-native";

import COLORS from "../assets/COLORS";
import RocketCard from "../components/RocketCard";
import { Dummydata } from './../assets/DummyData';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const rocket1 = Dummydata[1];

const HomeScreen = ({ navigation }) => {

    const [rocketsData, setRocketsData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [press, setPress] = useState(1)

    useEffect(() => {
        Alert.alert(
            "One Time Pop Up Message", "HomeScreen"
        )

        getRocketsData()
    }, [])

    const getRocketsData = () => {
        const axios = require('axios')
        var data = JSON.stringify({
            query: `{
              rockets(limit:${press}) {
                company
                cost_per_launch
                country
                description
                diameter{
                    meters
                }
                height{
                    meters
                }
                engines {
                  type
                  version
                }
                first_flight
                id
                payload_weights {
                  name
                  kg
                }
                name
                mass {
                  kg
                }
                first_stage {
                  thrust_vacuum {
                    kN
                  }
                  fuel_amount_tons
                  burn_time_sec
                }
                second_stage {
                  burn_time_sec
                  fuel_amount_tons
                  thrust {
                    kN
                  }
                }
                success_rate_pct
                wikipedia
              }
            }`,
            variables: {}
        });

        var config = {
            method: 'post',
            url: 'https://api.spacex.land/graphql/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                const rockets = response.data;
                setRocketsData([...rockets.data.rockets])
                setPress(press + 1)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            }).finally(() => setLoading(false))
    }

    console.log(rocketsData)

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor={COLORS.oxfordBlue}
            />
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Rockets</Text>
            </View>

            {/* List of Rockets */}
            <View>
                {isLoading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size={"large"} color={COLORS.oxfordBlue} />
                    </View>
                )
                    : (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            // showsVerticalScrollIndicator={false}
                            horizontal
                            data={rocketsData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <RocketCard
                                    id={item.id}
                                    name={item.name}
                                    country={item.country}
                                    company={item.company}
                                    onPress={() => { navigation.navigate('Details', { value: item }) }}
                                />
                            )}
                        />
                    )
                }
            </View>

            {/* Filter Button */}
            <View style={styles.buttonWrapper}>
                <View>
                    <TouchableOpacity onPress={() => { }}>
                        {/* <TouchableOpacity onPress={() => lastRockets(press)}> */}
                        <Icon name="chevron-left" size={40} color={COLORS.oxfordBlue} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: COLORS.oxfordBlue, fontSize: 28 }}>{press-1}</Text>
                <View>
                    <TouchableOpacity onPress={() => getRocketsData()}>
                        {/* <TouchableOpacity onPress={() => nextRockets(press)}> */}
                        <Icon name="chevron-right" size={40} color={COLORS.oxfordBlue} />
                    </TouchableOpacity>
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
        padding: 12,
        backgroundColor: COLORS.oxfordBlue,
    },
    headerText: {
        fontSize: 18,
        color: COLORS.orangeWeb,
        fontWeight: 'bold'
    },
    loading: {
        justifyContent: 'center',
        alignItem: 'center',
        top: 120
    },
    buttonWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: -10
    },
    buttonBack: {
        borderRadius: 5,
        padding: 10
    }
})

export default HomeScreen;