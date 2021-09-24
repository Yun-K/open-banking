import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddBankScreen from './AddBankScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Card} from 'react-native-paper';
import BankViewModel from '../ViewModel/BankViewModel';
import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import PayeeViewModel from '../ViewModel/PayeeViewModel';

const HStack = createNativeStackNavigator();
/**
 * const bank account with three instance, Image,Nmae , and two accounts
 */
const BankAccounts = [
  {
    Image: require('../screens/HomeScreenImage/ANZ.jpg'),
    Name: 'ANZ',
    Account: '20-202000-00',
    Account1: '20-202000-01',
  },
  {
    Image: require('../screens/HomeScreenImage/bnz.png'),
    Name: 'bnz',
    Account: '20-202000-00',
    Account1: '20-202000-01',
  },
  {
    Image: require('../screens/HomeScreenImage/west.jpg'),
    Name: 'west',
    Account: '20-202000-00',
    Account1: '20-202000-01',
  },
];
/**
 * home screen horizontal sliding menu
 * @param {*} param0 
 * @returns 
 */
const HomeScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log(BankAccounts);
    wait(20).then(() => setRefreshing(false));
  }, []);
/**
 * return three s=banks on the scrollViews
 */
  return (
    <View>
      <ScrollView
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 20,
            height: 250,
          }}>
          <Text
            style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
            Banks
          </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              {BankAccounts.map(Acc => {//implement the BankAccounts and name it acc
                return (
                  <View style={styles.AccountView} key={Acc.Name}>
                    <View style={styles.ImageView}>
                      <Image source={Acc.Image} style={styles.Imagestyles} />
                    </View>
                    <View style={styles.Text}>
                      <Text> {Acc.Account} </Text>
                      <Text> {Acc.Account1} </Text>
                    </View>
                  </View>
                );
              })}
              <View style={styles.AccountView}>
                <View style={styles.ImageView}>
                  <Image
                    source={require('../screens/HomeScreenImage/plus.jpg')}
                    style={styles.Imagestyles}
                  />
                </View>
                <View style={{flex: 1, paddingTop: 10}}>
                  <Button
                    title="add here"
                    onPress={() => navigation.navigate('AddBankScreen')}
                  />
                  <Text> add here </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
// CSS-liked styels
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AccountView: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  ImageView: {
    flex: 2,
    paddingLeft: 8,
    paddingTop: 10,
    width: 120,
  },
  Imagestyles: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  Text: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
  },
});

export {BankAccounts};
export default HomeScreen;
