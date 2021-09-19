import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBankScreen from './AddBankScreen'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
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

const HStack = createNativeStackNavigator();
// function homeSStack() {
//     return (

//     );
// };

const HomeScreen = ({ navigation }) => {
    return (

        <View>
            <ScrollView scrollEventThrottle={16}>
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, height: 250 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                        Banks
                    </Text>
                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2, paddingLeft: 8, paddingTop: 10, width: 120 }}>
                                    <Image source={require("../screens/HomeScreenImage/ANZ.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ flex: 1, paddingLeft: 20, paddingTop: 10 }}>
                                    <Text >
                                        20-202000-00
                                    </Text>
                                    <Text>
                                        20-202000-01
                                    </Text>
                                </View>
                            </View>

                            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2, paddingLeft: 8, paddingTop: 10, width: 120 }}>
                                    <Image source={require("../screens/HomeScreenImage/bnz.png")} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ flex: 1, paddingLeft: 20, paddingTop: 10 }}>
                                    <Text>
                                        20-202000-00
                                    </Text>
                                    <Text>
                                        20-202000-01
                                    </Text>
                                </View>
                            </View>

                            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2, paddingLeft: 8, paddingTop: 10, width: 120 }}>
                                    <Image source={require("../screens/HomeScreenImage/west.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ flex: 1, paddingLeft: 20, paddingTop: 10 }}>
                                    <Text>
                                        20-202000-00
                                    </Text>
                                    <Text>
                                        20-202000-01
                                    </Text>
                                </View>
                            </View>

                            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                <View style={{ flex: 2, paddingLeft: 8, paddingTop: 10, width: 120 }}>
                                    <Image source={require("../screens/HomeScreenImage/plus.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                                </View>
                                <View style={{ flex: 1, paddingTop: 10 }}>
                                    <Button
                                        title="add here"
                                        onPress={() =>
                                            navigation.navigate('AddBankScreen')
                                        }
                                    />
                                    <Text>
                                        add here
                                    </Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>);
};




export default HomeScreen