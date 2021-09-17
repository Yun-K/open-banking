import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Payment" component={HomeScreen} />
            <Tab.Screen name="Find Nearest Bank" component={HomeScreen} />
            <Tab.Screen name="Setting" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default Tabs