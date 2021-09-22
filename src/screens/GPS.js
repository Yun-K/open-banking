import React, { useState } from "react";
import { View, Text , Image,ScrollView,Button,Picker,StyleSheet} from "react-native";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";


const GPS = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("Which bank are you looking for?");

    const [isANZModalVisible, setIsANZModalVisible] = React.useState(false);

    const [isBNZModalVisible, setIsBNZModalVisible] = React.useState(false);

    const [isWESTModalVisible, setIsWESTModalVisible] = React.useState(false);

    const handleANZModal = () => setIsANZModalVisible(() => !isANZModalVisible);

    const handleBNZModal = () => setIsBNZModalVisible(() => !isBNZModalVisible);

    const handleWESTModal = () => setIsWESTModalVisible(() => !isWESTModalVisible);

    return(
    <View style={{ flex: 2, paddingLeft: 0, paddingTop: 20,height: 250 }}>
    <View style={{ flex: 2, paddingLeft: 0,height: 50 }}>
            <ScrollView>
                <ScrollView horizontal={true}>
                    <Image
                    source={require('./GPS_Map_images/Map_2.png')}
                    style={{ flex: 1, width: 500, height: 400, resizeMode: 'cover' }}
                    />
                </ScrollView>
            </ScrollView>
    </View>
    {/* <View style={styles.container}>
    <Text style={{fontSize: 20, fontWeight: '700'}}>Which bank Institute are you looking for? </Text>
    <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        mode="dropdown" 
        style={styles.picker}
    >
        <Picker.Item label="ANZ" value="ANZ" onPress={handleModal}/>
        <Picker.Item label="BNZ" value="BNZ" />
        <Picker.Item label="WestPac" value="WestPac" />
    </Picker> */}
    {/* </View> */}
    <Text style={{fontSize: 20, fontWeight: '700',paddingBottom:20,textAlign:"center"}}>Which bank Institute are you looking for? </Text>
    <Button title="ANZ" onPress={handleANZModal} color="blue"/>
    <Button title="BNZ" onPress={handleBNZModal}/>
    <Button title="WestPec" onPress={handleWESTModal} color="red"/>
    <Modal isVisible={isANZModalVisible}>
        <View style={{ flex: 1 }}>
            <Text style={ styles.modal }>ANZ Bank address:</Text>
            {ANZ.map(acc=>{
                return(
                    <View key={acc.Name}>
                        <Text style = {{color:"white",textAlign: "center"
                    ,fontSize: 20,paddingBottom:80}}>
                            {acc.Address}
                        </Text>
                    </View>
                )
            })}
            <Button title="back" onPress={handleANZModal}/>
        </View>
    </Modal>

    <Modal isVisible={isBNZModalVisible}>
        <View style={{ flex: 1 }}>
            <Text style={ styles.modal }>BNZ Bank address:</Text>
            {BNZ.map(acc=>{
                return(
                    <View key={acc.Name}>
                        <Text style = {{color:"white",textAlign: "center"
                    ,fontSize: 20,paddingBottom:80}}>
                            {acc.Address}
                        </Text>
                    </View>
                )
            })}
            <Button title="back" onPress={handleBNZModal}/>
        </View>
    </Modal>

    <Modal isVisible={isWESTModalVisible}>
        <View style={{ flex: 1 }}>
            <Text style={ styles.modal }>WestPec Bank address:</Text>
            {WESTPEC.map(acc=>{
                return(
                    <View key={acc.Name}>
                        <Text style = {{color:"white",textAlign: "center"
                    ,fontSize: 20,paddingBottom:80}}>
                            {acc.Address}
                        </Text>
                    </View>
                )
            })}
            <Button title="back" onPress={handleWESTModal}/>
        </View>
    </Modal>


    </View>
    );
}

const ANZ = [
    {
      Address:'22 Willis Street, Wellington Central, Wellington 6011',
      Name : "b1",
    },
    {
      Address:'49 Manners Street, Te Aro, Wellington 6011',
      Name : "b2",
    },
    {
      Address:'139 Cuba Street, Te Aro, Wellington 6011',
      Name : "b3",
    },
    {
        Address:'57 Courtenay Place, Te Aro, Wellington 6011',
        Name : "b4",
    },
  ];

  const BNZ = [
    {
      Address:'50 Manners Street, Te Aro, Wellington 6011',
      Name : "b1",
    },
    {
      Address:'38 Willis Street, Wellington Central, Wellington 6011',
      Name : "b2",
    },
    {
      Address:'Level 10, Ricoh House 1 Victoria Street, Wellington 6011',
      Name : "b3",
    },
    {
        Address:'61 Willis Street, Wellington Central, Wellington 6011',
        Name : "b4",
    },
  ];

  const WESTPEC = [
    {
      Address:'318 Lambton Quay, Wellington Central, Wellington 6011',
      Name : "b1",
    },
    {
      Address:'46 Onepu Road, Kilbirnie, Wellington 6022',
      Name : "b2",
    },
    {
      Address:'Level 1/1 Grey Street, Wellington Central, Wellington 6011',
      Name : "b3",
    },
    {
        Address:'76 Johnsonville Road, Johnsonville, Wellington 6037',
        Name : "b4",
    },
  ];


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