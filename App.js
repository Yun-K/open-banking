/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/HomeScreen';
import Tabs from './src/screens/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBankScreen from './src/screens/AddBankScreen';
import MakePayment from './src/screens/MakePayment';
import Managepayment from './src/screens/Managepayment';
import AddPayee from './src/screens/AddPayee';
import GPS from './src/screens/GPS';

//created a stack navigator for navigation
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    //navigation container for navigation
    <NavigationContainer>
      <Stack.Navigator>
        {/* The home screen is (tabs) bottom navigation bar contains all the homescreen for each features */}
        <Stack.Screen
          name="Home1"
          component={Tabs}
          options={{ title: 'Open-Banking' }}
        />
        {/* Added home screen*/}
        <Stack.Screen name="AddBankScreen" component={AddBankScreen} />
        <Stack.Screen name="MakePayment" component={MakePayment} />
        <Stack.Screen name="ManagePayment" component={Managepayment} />
        <Stack.Screen name="AddPayee" component={AddPayee} />
        <Stack.Screen name="GPS" component={GPS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;
