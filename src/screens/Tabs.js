import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import GPS from './GPS';
import Setting from './Setting';
import GeoLocation from './GeoLocation'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    focused,
    size,
    color,
    Image,
    TouchableOpacity,
    styleSheet
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Payment from './Payment';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                style: {
                    // display: 'flex',
                    position: 'absolute',
                    // bottom: 25,
                    // left: 20,
                    // right: 20,
                    // elevation: 0,
                    backgroundColor: '#9FA8DA',
                    // borderRadius: 15,
                    height: 200
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../../res/images/Home-icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name="Payment" component={Payment} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../../res/images/Payment-icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name="Find Nearest Bank" component={GeoLocation} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../../res/images/Nearest-icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../../res/images/Setting-icon.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

export default Tabs