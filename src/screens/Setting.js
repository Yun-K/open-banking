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


/**
 * Setting
 * The Setting Screen of the APP
 * @param {*} param0
 * @returns
 */
const Setting = ({ navigation }) => {
    // const variables for edit usernames
    const [isEditUserNameVisible, setModalVisible] = useState(false);
    const ShowEditUN = () => {
        setModalVisible(!isEditUserNameVisible);
    };
    const [username, setText] = useState('skr_skr');
    // const variables for edit usernames
    const [isEditEmailNameVisible, setEModalVisible] = useState(false);
    const ShowEditEmail = () => {
        setEModalVisible(!isEditEmailNameVisible);
    };
    const [email, setEText] = useState('skr_skr@gmail.com');
    /**
     * Render
     */
    return (
        //safe area view
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    {/* Avatar image display */}
                    <Avatar.Image
                        source={require('../../res/images/Profile-icon.png')}
                        size={80}
                    />
                    {/* UserInfo display */}
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>Skr Skr</Title>
                        <Caption style={styles.caption}>{username}</Caption>
                    </View>
                </View>
            </View>

            {/* UserInfo view */}

            <View style={styles.userInfoSection}>

                <View style={{ flexDirection: 'row' }}>
                    <Text>Username:                                                           </Text>

                    {/* TouchableOpacity for edit UserInfo*/}

                    <TouchableOpacity style={styles.commandButton} onPress={ShowEditUN}>
                        <Text style={styles.panelButtonTitle}>        Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{username}</Text>
                </View>

                {/* Modal for edit UserInfo pop up*/}

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

                    {/* TouchableOpacity for edit UserInfo*/}

                    <TouchableOpacity style={styles.commandButton} onPress={ShowEditEmail}>
                        <Text style={styles.panelButtonTitle}>        Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
                </View>

                {/* Modal for edit UserInfo pop up*/}

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

            {/* bank investment view */}

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

            {/*  touch ID view */}

            <View style={styles.userInfoSection}>
                <TouchableOpacity style={styles.wrapper} onPress={() => { }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../res/images/TouchID-icon.png')}
                            style={{ width: 25, height: 25 }}
                        />
                        <Text style={{ alignItems: 'center' }}> Touch ID</Text>
                    </View>
                </TouchableOpacity>


                {/*  edit Password view */}
                <TouchableOpacity style={styles.wrapper} onPress={() => { }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../res/images/Password-icon.png')}
                            style={{ width: 25, height: 25 }}
                        />
                        <Text style={{ alignItems: 'center' }}> Change Password</Text>
                    </View>
                </TouchableOpacity>

                {/*  rate app view */}
                <TouchableOpacity style={styles.wrapper} onPress={() => { }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../res/images/Rate-icon.png')}
                            style={{ width: 25, height: 25 }}
                        />
                        <Text style={{ alignItems: 'center' }}> Rate Our App</Text>
                    </View>
                </TouchableOpacity>

            </View>


        </SafeAreaView >

    );
};




export default Setting

/**
* style sheet component
*/
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
    wrapper: {
        marginTop: 15,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        borderTopColor: '#dddddd',
        borderTopWidth: 2,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
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