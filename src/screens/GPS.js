import React from "react";
import { View, Text , Image,ScrollView} from "react-native";

const GPS = ({ navigation }) => {
    return(
    <View style={{ flex: 2, paddingLeft: 0, paddingTop: 0, width: 900 ,height:500}}>
        <ScrollView>
            <ScrollView horizontal={true}>
                <Image
                source={require('./GPS_Map_images/Te_Aro.png')}
                style={{ flex: 1, width: 1000, height: 1000, resizeMode: 'cover' }}
                />
            </ScrollView>
        </ScrollView>
    </View>
    );
}
export default GPS