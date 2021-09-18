import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button
}from 'react-native'

export default class Payment extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
              <Text>
                hello
              </Text>
            </View>          
            )
    }
     
}

const styles = StyleSheet.create({
  container:{
     flex : 1,
     backgroundColor: '#eee',
  },
  title:{
    textAlign: 'center',
    marginVertical: 8,
  }
})


