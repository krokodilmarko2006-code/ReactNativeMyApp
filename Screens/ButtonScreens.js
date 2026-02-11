import React from "react";
import {View,Text,StyleSheet,Button,TouchabableOpacity, TouchableOpacity} from "react-native";

const ButtonScreen = () =>{
    let counter=0;
    return(
        <View>
            <Text></Text>
            <Button title="Click me" onPress={() => console.log("Buitton Clicked this many time!",counter++)}/>

            <TouchableOpacity style={styles.touchableButton} onPress={()=>console.log("Buitton Clicked!!")}>
                <Text>This is a clickable</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles=StyleSheet.create({
    textStyle:{
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        marginButton:10,
    },
    touchableButton:{
        backgroundColor: "purple",
        marginVertical:15,
        paddingVertical:20,
        borderRadius:6,
        marginHorizontal:20,
    }
});
export default ButtonScreen;