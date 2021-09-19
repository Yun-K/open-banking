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

const ManagePayment = ({navigation}) => {
  const [Search, search] = React.useState('Search');
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
        <TouchableOpacity style={Managestyles.Payees}>
          <Text style={Managestyles.TextName}>
            + Add a new person or company here
          </Text>
        </TouchableOpacity>
      </View>
      {/* For the Mange payees */}
      <View style={Managestyles.View}>
        <ScrollView style={Managestyles.ScrollView}>
          <Text style={Managestyles.Text}>YOUR SAVED PAYEES</Text>
          {/* Payees (Kevin and Alvin)  */}
          {/* TODO: make function each time can added a payees */}
          <TouchableOpacity style={Managestyles.Payees}>
            <Text style={Managestyles.TextName}> Kevin </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Managestyles.Payees}>
            <Text style={Managestyles.TextName}> Alvin </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
});

export default ManagePayment;
