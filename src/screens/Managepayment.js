import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DialogInput from 'react-native-dialog-input';
import AddPayee from './AddPayee';
import MakePayment from './MakePayment';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  styles,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  Model,
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
/**
 * Set a array to store the deafult data.
 */
let Payees = [
  {Account: 1, Name: 'name01', Reference: ''},
  {Account: 2, Name: 'name02', Reference: ''},
];
let ChoicePayees = [];

// wait time
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

/**
 * ManagePayment
 * manage the payee's information
 * @param {*} param0
 * @returns
 */
const ManagePayment = ({navigation}) => {
  const [Search, search] = React.useState('Search');
  const [refreshing, setRefreshing] = React.useState(false);
  /**
   * Refresh the ScrollView
   */
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log(Payees);
    wait(20).then(() => setRefreshing(false));
  }, []);
  /**
   * Let users manage payees and confirm user decisions
   * @param {*} Name
   * @param {*} Account
   */
  const Show = (Name, Account) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to Choice' +
        Name +
        '?\n' +
        '\nAccount No. : ' +
        Account,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            navigation.navigate('MakePayment');
            ChoicePayees = Payees.filter(Payee => Payee.Name == Name);
          },
        },
        {
          text: 'Delete',
          onPress: () => {
            Payees = Payees.filter(Payee => Payee.Name !== Name);
          },
        },
      ],
    );
  };

  /**
   * Render
   */
  return (
    <SafeAreaView>
      {/* for the Search  */}
      <View style={Managestyles.View}>
        <Image
          source={require('../../res/images/Search-Icon.png')}
          style={Managestyles.images}
        />
        <TextInput
          style={Managestyles.input}
          onChangeText={search}
          value={Search}
        />
      </View>
      <View style={Managestyles.View}>
        <TouchableOpacity
          style={Managestyles.Payees}
          onPress={() => navigation.navigate('AddPayee')}>
          <Text style={Managestyles.TextName}>
            + Add a new person or company here
          </Text>
        </TouchableOpacity>
      </View>
      {/* For the Mange payees */}
      <View style={Managestyles.View}>
        <ScrollView
          style={Managestyles.ScrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Text style={Managestyles.Text}>YOUR SAVED PAYEES</Text>
          {/* Payees (Kevin and Alvin)  */}
          {Payees.map(payee => {
            return (
              <View key={payee.Name}>
                <TouchableOpacity
                  style={Managestyles.Payees}
                  onPress={() => Show(payee.Name, payee.Account)}>
                  <Text style={Managestyles.TextName}> {payee.Name} </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/**
 * styles
 */
const Managestyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  View: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#707070',
    borderWidth: 0.5,
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#dddd',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 17,
    marginBottom: 10,
    width: 300,
    height: 40,
    marginLeft: 60,
    marginTop: -35,
  },
  images: {
    marginTop: 10,
    marginLeft: 10,
    width: 35,
    height: 35,
  },
  ScrollView: {
    height: 500,
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  Textadd: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  Payees: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  TextName: {
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
  },
  dialog: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {Payees, ChoicePayees};

export default ManagePayment;
