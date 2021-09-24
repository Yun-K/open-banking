import React, { useState, Component } from "react";
import { View, Text, Image, ScrollView, Button, Picker, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";


const GPS = ({ navigation }) => {

  // const [location, setLocation] = useState(' ');

  var location = "";

  // const state = {
  //   location: null
  // };

  navigator.geolocation = require('@react-native-community/geolocation');

  const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        // const location = JSON.stringify(position);
        // location => setLocation(location);
        // setState({ location });
        location = JSON.stringify(position);
        Alert.alert(location)
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };


  const [selectedValue, setSelectedValue] = useState("Which bank are you looking for?");
//state for the ANZ button
  const [isANZModalVisible, setIsANZModalVisible] = React.useState(false);
//state for the BNZ button
  const [isBNZModalVisible, setIsBNZModalVisible] = React.useState(false);
//state for the westpec button
  const [isWESTModalVisible, setIsWESTModalVisible] = React.useState(false);
//click ANZ button event
  const handleANZModal = () => setIsANZModalVisible(() => !isANZModalVisible);
//click BNZ button event
  const handleBNZModal = () => setIsBNZModalVisible(() => !isBNZModalVisible);
//click WestPec button event
  const handleWESTModal = () => setIsWESTModalVisible(() => !isWESTModalVisible);

  return (

//Image of the map with cross scroll view (Horizontal and Verticle)
    <View style={{ flex: 2, paddingLeft: 0, paddingTop: 20, height: 250 }}>
      <View style={{ flex: 2, paddingLeft: 0, height: 50 }}>
        <ScrollView>
          <ScrollView horizontal={true}>
            <Image
              source={require('./GPS_Map_images/Map_2.png')}
              style={{ flex: 1, width: 500, height: 400, resizeMode: 'cover' }}
            />
          </ScrollView>
        </ScrollView>
      </View>

      
      {/* three buttons for ANZ, BNZ and Westpec*/}
      <Text style={{ fontSize: 20, fontWeight: '700', paddingBottom: 20, textAlign: "center" }}>Which bank Institute are you looking for? </Text>
      <Button title="ANZ" onPress={handleANZModal} color="blue" />
      <Button title="BNZ" onPress={handleBNZModal} />
      <Button title="WestPec" onPress={handleWESTModal} color="red" />
      <Modal isVisible={isANZModalVisible}>
        <View style={{ flex: 1 }}>
          <Text style={styles.modal}>ANZ Bank address:</Text>{/*ANZ Modal event mouse click change*/}
          {ANZ.map(acc => {
            return (
              <View key={acc.Name}>
                <Text style={{
                  color: "white", textAlign: "center"
                  , fontSize: 20, paddingBottom: 80
                }}>
                  {acc.Address}
                </Text>
              </View>
            )
          })}
          <Button title="back" onPress={handleANZModal} />
        </View>
      </Modal>

      <Modal isVisible={isBNZModalVisible}>{/*BNZ Modal event mouse click change*/}
        <View style={{ flex: 1 }}>
          <Text style={styles.modal}>BNZ Bank address:</Text>
          {BNZ.map(acc => {
            return (
              <View key={acc.Name}>
                <Text style={{
                  color: "white", textAlign: "center"
                  , fontSize: 20, paddingBottom: 80
                }}>
                  {acc.Address}
                </Text>
              </View>
            )
          })}
          <Button title="back" onPress={handleBNZModal} />
        </View>
      </Modal>

      <Modal isVisible={isWESTModalVisible}>{/*WestPec Modal event mouse click change*/}
        <View style={{ flex: 1 }}>
          <Text style={styles.modal}>WestPec Bank address:</Text>
          {WESTPEC.map(acc => {
            return (
              <View key={acc.Name}>
                <Text style={{
                  color: "white", textAlign: "center"
                  , fontSize: 20, paddingBottom: 80
                }}>
                  {acc.Address}
                </Text>
              </View>
            )
          })}
          <Button title="back" onPress={handleWESTModal} />
        </View>
      </Modal>


    </View >
  );
}
// banks addresses lists
const ANZ = [
  {
    Address: '22 Willis Street, Wellington Central, Wellington 6011',
    Name: "b1",
  },
  {
    Address: '49 Manners Street, Te Aro, Wellington 6011',
    Name: "b2",
  },
  {
    Address: '139 Cuba Street, Te Aro, Wellington 6011',
    Name: "b3",
  },
  {
    Address: '57 Courtenay Place, Te Aro, Wellington 6011',
    Name: "b4",
  },
];

const BNZ = [
  {
    Address: '50 Manners Street, Te Aro, Wellington 6011',
    Name: "b1",
  },
  {
    Address: '38 Willis Street, Wellington Central, Wellington 6011',
    Name: "b2",
  },
  {
    Address: 'Level 10, Ricoh House 1 Victoria Street, Wellington 6011',
    Name: "b3",
  },
  {
    Address: '61 Willis Street, Wellington Central, Wellington 6011',
    Name: "b4",
  },
];

const WESTPEC = [
  {
    Address: '318 Lambton Quay, Wellington Central, Wellington 6011',
    Name: "b1",
  },
  {
    Address: '46 Onepu Road, Kilbirnie, Wellington 6022',
    Name: "b2",
  },
  {
    Address: 'Level 1/1 Grey Street, Wellington Central, Wellington 6011',
    Name: "b3",
  },
  {
    Address: '76 Johnsonville Road, Johnsonville, Wellington 6037',
    Name: "b4",
  },
];

// CSS-liked styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 24,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  container: {
    flex: 1,
    //paddingTop: 100,
    alignItems: "center"
  },
  modal: {
    flex: 1,
    color: "white",
    textAlign: "center",
    paddingTop: 100,
    fontSize: 20,
    fontWeight: '700'
  },
  input: {
    alignItems: "center",
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default GPS