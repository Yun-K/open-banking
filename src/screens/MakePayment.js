import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const MakePayment = ({ navigation }) => {

    return(
        <SafeAreaView style={Scrollstyles.container}>
        <ScrollView style={Scrollstyles.scrollView}>
        <Text 
            style = {{ 
                fontSize: 20,
                paddingTop:10,
                fontWeight: 'bold',
            }}>
                Select Account
            </Text>
        <ScrollView horizontal style = {{backgroundColor: '#fff',}} >
        {/* the first view for the Stream line account */}
        <View style={Scrollstyles.View}>
        <TouchableOpacity onPress={() =>navigation.navigate('MakePayment')}>
           
               <Image source={require("../../res/images/MakeP-Streamline.png")}
               style={Scrollstyles.images}/>
            {/* Text Stream Line  */}
            <Text style = {Scrollstyles.StreamText}>
             Stream Line    
            </Text>  
            {/* text $5000 */}
            <Text style = {Scrollstyles.StreamMoneyText}>
                $5000
            </Text>     
           
        </TouchableOpacity>
        </View>
        {/* the first view for the Saving account */}
        <View style={Scrollstyles.View}>
        <TouchableOpacity onPress={() =>navigation.navigate('MakePayment')}>
            {/* Icon image */}
            <Image source={require("../../res/images/MakeP-Saving.png")}
               style={Scrollstyles.images}/>
            {/* Text Saving */}
             <Text 
            style = {Scrollstyles.SavingText}>
             Saving   
            </Text> 
            {/* Text $47.7 */}
            <Text style = {Scrollstyles.SavingMoneyText}>
                $47.7
            </Text>     
        </TouchableOpacity>
        </View>
        </ScrollView>
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
    fontSize: 42,
  },
  View:{
    height: 130,
    width: 250, 
    borderWidth: 1, 
    borderColor: '#dddd',
    borderRadius:10,
    marginEnd:20,
    marginStart:10,
  },
  images:{
    marginTop:20,
    width: 80,
    height: 80
  },
  StreamText:{
    fontSize:20,  
    textAlign: 'center', 
    marginTop: -85,  
    marginLeft: 60, 
    fontWeight: 'bold',
  },
  StreamMoneyText:{
    fontSize:20, 
    marginLeft: 50,
    textAlign: 'center', 
    marginTop:20,
    fontWeight: 'bold',
  },
  SavingText:{
    fontSize: 20,  
    marginLeft: 40, 
    textAlign: 'center', 
    marginTop: -85,   
    fontWeight: 'bold',
  },
  SavingMoneyText:{
    fontSize:20,  
    marginLeft:40, 
    textAlign: 'center', 
    marginTop:20,
    fontWeight: 'bold',

  }
});

export default MakePayment