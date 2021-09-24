import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BankAccounts} from './HomeScreen';

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
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

const image = [];
const BankName = [];
/**
 * AddBank
 * Add a new Bank account into the bank list.
 * @param {*} param0
 * @returns
 */
const AddBankScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Please select bank');
  const [Account, id] = React.useState(null);
  const [number, PasswordText] = React.useState(null);
  // const [image, setiamge] = React.useState({Image: '', Name: ''});
  let Image = {};
  let Name = {};
  let Account1 = {};
  /**
   * set Image value
   */
  const setImage = () => {
    Account1 = ' ';
    if (selectedValue == 'BNZ') {
      Image = require('../screens/HomeScreenImage/bnz.png');
      Name = 'BNZ';
    } else if (selectedValue == 'ANZ') {
      Image = require('../screens/HomeScreenImage/ANZ.jpg');
      Name = 'ANZ';
    } else if (selectedValue == 'WestPac') {
      Image = require('../screens/HomeScreenImage/west.jpg');
      Name = 'west';
    }
  };

  /**
   *  Remind to confirm the user to add a new bank.
   */
  const Confirmation = () =>
    Alert.alert('Confirmation', 'Are you sure that you want to add the bank?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          navigation.navigate('Home');
          setImage();
          BankAccounts.push({Image, Name, Account, Account1});
          console.log(BankAccounts);
        },
      },
    ]);

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <Text>Please Pick your Bank Institution </Text>
      {/* pick one of the bank */}
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="ANZ" value="ANZ" />
        <Picker.Item label="BNZ" value="BNZ" />
        <Picker.Item label="WestPac" value="WestPac" />
      </Picker>
      {/* Input Account */}
      <Text>Please Enter Your Account </Text>
      <TextInput
        style={styles.input}
        onChangeText={id}
        value={Account}
        placeholder="Account ID"
      />
      {/* Input Password */}
      <Text>Please Enter Your Password </Text>
      <TextInput
        style={styles.input}
        onChangeText={PasswordText}
        value={number}
        placeholder="Password"
      />

      <Button title={'Confirm'} onPress={Confirmation} />
    </View>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default AddBankScreen;
