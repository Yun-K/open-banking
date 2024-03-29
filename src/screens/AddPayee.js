import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Payees} from './Managepayment';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  styles,
  useColorScheme,
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import ManagePayment from './Managepayment';

/**
 * Add Payee Page
 * add new payee into the list.
 * @param {*} param0
 * @returns
 */
const AddPayee = ({navigation}) => {
  const [Name, name] = React.useState(null);
  const [Account, account] = React.useState(null);
  const [Particulars, part] = React.useState(null);

  /**
   * Remind users to confirm account and name
   */
  const Show = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to add this ' +
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
            navigation.navigate('ManagePayment');
            if (Payees.includes(Name)) {
              console.log('Payee already exist!!');
            } else {
              Payees.push({Account, Name, Particulars});
            }
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
      {/* Input the Name */}
      <View style={Managestyles.View}>
        <Text style={{fontSize: 18, marginTop: 10}}> Name </Text>
        <TextInput
          style={Managestyles.input}
          onChangeText={name}
          value={Name}
          placeholder="Person or company"
        />
      </View>
      {/* Input Bank account  */}
      <View style={Managestyles.View}>
        <Text style={{fontSize: 18}}> Account No. </Text>
        <TextInput
          style={{
            backgroundColor: '#dddd',
            textAlign: 'center',
            borderRadius: 10,
            width: 350,
            marginLeft: 20,
            fontSize: 17,
          }}
          onChangeText={account}
          value={Account}
          placeholder="Bank - Branch -Account - Suffix"
        />
      </View>
      <Text>ON THEIR STATEMENT</Text>
      {/* Input the Reference */}
      <View style={Managestyles.View}>
        <Text style={Managestyles.statementText}> Particulars </Text>
        <TextInput
          style={Managestyles.statement}
          onChangeText={part}
          value={Particulars}
        />
        <Text style={Managestyles.statementText}> Code </Text>
        <TextInput
          style={Managestyles.statement}
          onChangeText={part}
          value={Particulars}
        />
        <Text style={Managestyles.statementText}> Reference </Text>
        <TextInput
          style={Managestyles.statement}
          onChangeText={part}
          value={Particulars}
        />
      </View>
      {/* Save button */}
      <View>
        <Button title="Save" onPress={Show} />
      </View>
    </SafeAreaView>
  );
};

/**
 *  View style
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
    marginLeft: 70,
    marginTop: -30,
  },
  statement: {
    borderColor: '#707070',
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 17,
    marginBottom: 10,
    width: 280,
    height: 40,
    marginLeft: 100,
    marginTop: -27,
  },
  statementText: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default AddPayee;
