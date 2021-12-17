import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import COLORS from "../assets/COLORS";
import { Dummydata } from './../assets/DummyData';
import CATEGORIES from './../assets/CATEGORIES';
import Results from "../components/Results";

const SearchScreen = ({navigation}) => {

    const [rockets, setRockets] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getRocketsData();
    }, [])

    //Function get api data
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
                // setRockets(rockets)
                setRockets(Dummydata.data.rockets)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //Function to filter rockets based on input
    const filterSth = (text) => {
        if (text) {
            setSearch(text)
            let data = Dummydata.data.rockets
                .filter((item) => {
                    return (
                        item.name.toLowerCase().includes(text.toLowerCase())
                    )
                })
                console.log(text)
            console.log(data)
            setRockets(data)
        }
        else {
            setRockets(Dummydata.data.rockets)
            setSearch(text)
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Search</Text>
            </View>

            {/* Searching */}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Search For Rockets"
                    onChangeText={(text) => filterSth(text)}
                />

            </View>

            {/* Results */}
            <View style={styles.result}>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    // showsVerticalScrollIndicator={false}
                    data={rockets}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Results
                            name={item.name}
                            country={item.country}
                            company={item.company}
                            onPress={() => { navigation.navigate('Result', { value: item }) }}
                        />
                    )}
                />
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
    inputWrapper: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        borderBottomWidth:0.5,
        width:'100%'
    },
    result:{
        padding:15
    }
})

export default SearchScreen;