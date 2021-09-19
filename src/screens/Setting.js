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
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import Modal from "react-native-modal";

const Setting = ({ navigation }) => {

    const [isEditUserNameVisible, setModalVisible] = useState(false);
    const ShowEditUN = () => {
        setModalVisible(!isEditUserNameVisible);
    };
    const [username, setText] = useState('skr_skr');

    const [isEditEmailNameVisible, setEModalVisible] = useState(false);
    const ShowEditEmail = () => {
        setEModalVisible(!isEditEmailNameVisible);
    };
    const [email, setEText] = useState('skr_skr@gmail.com');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={require('../../res/images/Profile-icon.png')}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>Skr Skr</Title>
                        <Caption style={styles.caption}>{username}</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>

                <View style={{ flexDirection: 'row' }}>
                    <Text>Username:                                                           </Text>

                    <TouchableOpacity style={styles.commandButton} onPress={ShowEditUN}>
                        <Text style={styles.panelButtonTitle}>        Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{username}</Text>
                </View>
                <Modal isVisible={isEditUserNameVisible}>
                    <View>
                        <Text style={{ color: "#dddddd", fontSize: 20 }}>Edit Username</Text>
                        <TextInput
                            style={{ height: 50, color: "#dddddd" }}
                            placeholder="Type here to translate!"
                            onChangeText={username => setText(username)}
                            defaultValue={username}
                        />
                        <Button title="save" onPress={ShowEditUN} />
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Email Address:                                                    </Text>
                    <TouchableOpacity style={styles.commandButton} onPress={ShowEditEmail}>
                        <Text style={styles.panelButtonTitle}>        Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
                </View>
                <Modal isVisible={isEditEmailNameVisible}>
                    <View >
                        <Text style={{ color: "#dddddd", fontSize: 20 }}>Edit Email</Text>
                        <TextInput
                            style={{ height: 50, color: "#dddddd" }}
                            placeholder="Type here to translate!"
                            onChangeText={email => setEText(email)}
                            defaultValue={email}
                        />
                        <Button title="save" onPress={ShowEditEmail} />
                    </View>
                </Modal>
            </View >

            <Text style={{ paddingHorizontal: 30 }}>KiwiSaver Investment</Text>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>$140.50</Title>
                    <Caption>Total Earned</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12%</Title>
                    <Caption>Investment Rate</Caption>
                </View>
            </View>

            {/* <View style={styles.userInfoSection}>

                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}></Text>
                </TouchableOpacity>

            </View> */}


        </SafeAreaView >

    );
};




export default Setting



const styles = StyleSheet.create({
    input: {
        alignItems: "center",
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commandButton: {
        // padding: 15,
        // borderRadius: 10,
        // alignItems: 'center',
        width: 30,

    },
    panelButtonTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF6347',
    },
});