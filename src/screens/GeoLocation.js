import React, { useState, Component } from "react";
import { View, Text, Image, ScrollView, Button, Picker, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";


const GeoLocation = ({ navigation }) => {

    // var location = ""

    const [location, setLocation] = useState(' ');

    navigator.geolocation = require('@react-native-community/geolocation');

    const findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                // const location = JSON.stringify(position);
                // location => setLocation(location);
                // setState({ location });
                // location = JSON.stringify(position);
                setLocation(JSON.stringify(position));
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

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
            <TouchableOpacity onPress={findCoordinates}>
                <Text >Press to find your Coordinate </Text>
            </TouchableOpacity>
        </View>

    );

}

export default GeoLocation