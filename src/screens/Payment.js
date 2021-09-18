import React from 'react';
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

export default class Payment extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
               <TouchableOpacity onPress={() => Alert.alert('go to make payment')}>
               <Image source={require("../../res/images/Make-payment.png")}
               style={{
                width: 410,
                height: 120
            }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert('go to manage')}>
               <Image source={require("../../res/images/Manage-payment.png")}
               style={{
                width: 405,
                height: 110
            }}/>
              </TouchableOpacity>
            </View>          
            )
    }
     
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


