import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Image, StatusBar, Alert, ActivityIndicator } from "react-native";
import COLORS from "../assets/COLORS";
import RocketCard from "../components/RocketCard";
import { Dummydata } from './../assets/DummyData';
import { getData } from '../services/spacexApi';

const rocket1 = Dummydata[1];

const HomeScreen = ({ navigation }) => {

    const [rocketsData, setRocketsData] = useState();
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        Alert.alert(
            "One Time Pop Up Message", "HomeScreen"
        )

        const getRocketsData = async () => {
            const axios = require('axios')
            var data = JSON.stringify({
                query: `{
                  rockets(limit:10) {
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
                    setRocketsData(rockets)
                })
                .catch(function (error) {
                    console.log(error);
                }).finally(() => setLoading(false))
        }
        getRocketsData()
        // rocketsData.data.rockets.push(images)
        // console.log(JSON.stringify(rocketsData))
        
        const test = async () => {
               const data = await getData();
               setRocketsData(data)
               console.log(JSON.stringify(data))
        }
        // test();
     
    }, [])

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
                            data={rocketsData.data.rockets}
                            keyExtractor={item => item.id}
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
    }
})

export default HomeScreen;