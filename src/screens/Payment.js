import 'react-native-gesture-handler';
import React from 'react';
import MakePayment from './MakePayment';
import ManagePayment from './Managepayment';
import { NavigationContainer}from '@react-navigation/native'
import{
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    Alert,
    TouchableOpacity,
    Image
}from 'react-native'

const Payment = ({ navigation }) => {
   
        return(
            <View style = {styles.container}>
               <TouchableOpacity onPress={() =>navigation.navigate('MakePayment')}>
               <Image source={require("../../res/images/Make-payment.png")}
               style={{
                width: 400,
                height: 120
            }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ManagePayment')}>
               <Image source={require("../../res/images/Manage-payment.png")}
               style={{
                width: 400,
                height: 110
            }}/>
              </TouchableOpacity>
            </View>          
            )
     
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  Button:{
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }
})

export default Payment


