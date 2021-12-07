import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Image, StatusBar } from "react-native";
import COLORS from "../assets/COLORS";
import RocketCard from "../components/RocketCard";
import { Dummydata } from './../assets/DummyData';

const rocket1 = Dummydata[1];

const HomeScreen = ({ navigation }) => {

    const [rockets, setRockets] = useState(Dummydata);
    const [selectedRocket, setSelectedRocket] = useState(null);

    useEffect(() => {

    })

    const handleNavigation = item => {
        setSelectedRocket(item)
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor={COLORS.black}
            />
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Rockets</Text>
            </View>

            {/* List of Rockets */}
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={rockets}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <RocketCard
                            name={item.name}
                            country={item.country}
                            company={item.company}
                            onPress={() => { navigation.navigate('Details', { value: item }) }}
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
    }
})

export default HomeScreen;