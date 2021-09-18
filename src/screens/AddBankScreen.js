import React, { useState } from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Picker,
    TextInput,
    Image,
    Button,
    Alert
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';





const AddBankScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("Please select bank");
    const [text, UsernameText] = React.useState(null);
    const [number, PasswordText] = React.useState(null);

    const Confirmation = () =>
        Alert.alert(
            "Confirmation",
            "Are you sure that you want to add the bank?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Confirm", onPress: () => navigation.navigate('Home') }
            ]
        );

    return (
        <View style={styles.container}>
            <Text>Please Pick your Bank Institution </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="ANZ" value="ANZ" />
                <Picker.Item label="BNZ" value="BNZ" />
                <Picker.Item label="WestPac" value="WestPac" />
            </Picker>


            <Text>Please Enter Your Username </Text>
            <TextInput
                style={styles.input}
                onChangeText={UsernameText}
                value={text}
                placeholder="Username"
            />
            <Text>Please Enter Your Password </Text>
            <TextInput
                style={styles.input}
                onChangeText={PasswordText}
                value={number}
                placeholder="Password"
            />

            <Button title={"Confirm"} onPress={Confirmation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    input: {
        alignItems: "center",
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default AddBankScreen


