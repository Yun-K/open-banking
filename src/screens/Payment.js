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
               style={styles.images}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ManagePayment')}>
               <Image source={require("../../res/images/Manage-payment.png")}
               style={styles.images}/>
              </TouchableOpacity>
            </View>          
            )
     
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  images:{
    width: 400,
    height: 110,
    borderRadius:10,
    borderWidth: 1,
    borderColor:'black',
  }
})

export default Payment


