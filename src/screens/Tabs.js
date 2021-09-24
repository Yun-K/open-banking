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



/**
 * create the tab navigator
 * The Tab Navigator for the button bar
 * @param {*} param0
 * @returns
 */
const Tab = createBottomTabNavigator();
const Tabs = () => {
    /**
     * Render
     */
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: true,
                style: {
                    position: 'absolute',
                    backgroundColor: '#9FA8DA',
                    height: 200
                }
            }}
        >
            {/* adding screen homescreen */}
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
            {/* adding screen paymentscreen */}
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
            {/* adding screen FindNearestBankscreen */}
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
            {/* adding screen settingscreen */}
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