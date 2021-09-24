import React, { useState, Component } from "react";
import { View, Text, Image, ScrollView, Button, Picker, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";

/**
 * Geolocation
 * Get the geolocation of the device
 * @param {*} param0
 * @returns
 */
const GeoLocation = ({ navigation }) => {

    //store location in a const variable
    const [location, setLocation] = useState(' ');

    navigator.geolocation = require('@react-native-community/geolocation');
    //find coordinate method to find the geolocation
    //
    const findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                //set location into the const variable
                setLocation(JSON.stringify(position));
                //pop up the alert form to show the geolocation and give user option to the map view
                Alert.alert(
                    "Your Location Coordinator",
                    JSON.stringify(position),
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: "Show Map View of Nearest Bank",
                            onPress: () => {
                                console.log("OK Pressed");
                                navigation.navigate('GPS')
                            }
                        }
                    ]
                );
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    /**
     * Render
     */
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>

            {/* TouchableOpacity with onpress action to findCoordinates */}

            <TouchableOpacity onPress={findCoordinates}>
                <Text >Press to find your Coordinate </Text>
            </TouchableOpacity>
        </View>

    );

}

export default GeoLocation