import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MakePayment = ({navigation}) => {
  const [Accountnumber, onChangeAccount] = React.useState('Account Number');
  const [Amountnumber, onChangeAmount] = React.useState('Enter Amount');
  const [TheirRef, thRef] = React.useState('Enter reference');
  const [YourRef, yoRef] = React.useState('Enter reference');

  const Show = () => {
    Alert.alert('Confirmation', 'Are you sure you want to pay this account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => navigation.navigate('Payment')},
    ]);
  };

  return (
    <SafeAreaView style={Scrollstyles.container}>
      <ScrollView style={Scrollstyles.scrollView}>
        {/* First Part for the Select Account*/}
        <Text
          style={{
            fontSize: 20,
            paddingTop: 10,
            fontWeight: 'bold',
          }}>
          Select Account
        </Text>
        <ScrollView
          horizontal
          style={{
            backgroundColor: '#fff',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          {/* the first view for the Stream line account */}
          <View style={Scrollstyles.AccountView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MakePayment')}>
              <Image
                source={require('../../res/images/MakeP-Streamline.png')}
                style={Scrollstyles.images}
              />
              <Text style={Scrollstyles.StreamText}>Stream Line</Text>
              <Text style={Scrollstyles.StreamMoneyText}>$5000</Text>
            </TouchableOpacity>
          </View>
          {/* the first view for the Saving account */}
          <View style={Scrollstyles.AccountView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MakePayment')}>
              <Image
                source={require('../../res/images/MakeP-Saving.png')}
                style={Scrollstyles.images}
              />
              <Text style={Scrollstyles.SavingText}>Saving</Text>
              <Text style={Scrollstyles.SavingMoneyText}>$47.7</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Second part for Payee  enter account number*/}
        <View style={Scrollstyles.PayeeView}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: '#707070',
              height: 45,
              borderRadius: 10,
            }}>
            <Text style={Scrollstyles.text}>Choice Payee here +</Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingTop: 15,
              paddingLeft: 10,
              fontSize: 17,
              paddingBottom: 5,
            }}>
            Or, enter an account number :
          </Text>
          <TextInput
            style={Scrollstyles.input}
            onChangeText={onChangeAccount}
            value={Accountnumber}
          />
        </View>
        {/* Third Part for Enter amount */}
        <View style={Scrollstyles.PayeeView}>
          <Text style={Scrollstyles.text}>Enter Amount :</Text>
          <TextInput
            style={Scrollstyles.input}
            onChangeText={onChangeAmount}
            value={Amountnumber}
          />
        </View>

        {/* Fourth part for Reference */}
        <View style={Scrollstyles.PayeeView}>
          <Text style={Scrollstyles.text}>Their Reference :</Text>
          <TextInput
            style={Scrollstyles.input}
            onChangeText={thRef}
            value={TheirRef}
          />

          <Text style={Scrollstyles.text}>Your Reference :</Text>
          <TextInput
            style={Scrollstyles.input}
            onChangeText={yoRef}
            value={YourRef}
          />
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Button title="Pay" onPress={Show} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Scrollstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 10,
  },
  AccountView: {
    height: 130,
    width: 250,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    marginEnd: 20,
    marginStart: 10,
  },
  images: {
    marginLeft: 10,
    marginTop: 20,
    width: 80,
    height: 80,
  },
  StreamText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -85,
    marginLeft: 70,
    fontWeight: 'bold',
  },
  StreamMoneyText: {
    fontSize: 20,
    marginLeft: 60,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  SavingText: {
    fontSize: 20,
    marginLeft: 50,
    textAlign: 'center',
    marginTop: -85,
    fontWeight: 'bold',
  },
  SavingMoneyText: {
    fontSize: 20,
    marginLeft: 50,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  PayeeView: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#dddd',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MakePayment;
