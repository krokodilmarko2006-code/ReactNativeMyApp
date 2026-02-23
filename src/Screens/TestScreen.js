import React from "react";
import { View, Text, StyleSheet} from "react-native";

const BoxScreen = () => {
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
        <View style={{width:200,height:100,backgroundColor:'yellow',alignSelf:"flex-start"}}/>
        <View style={{width:200,height:100,backgroundColor:'red', alignContent:"center"}}/>
        <View style={{width:200,height:100,backgroundColor:'blue'}}/>
        <View style={{width:200,height:100,backgroundColor:'black'}}/>
        <View style={{width:200,height:100,backgroundColor:'green'}}/>
        <View style={{width:200,height:100,backgroundColor:'pink'}}/>
    </View>
};

const styles = StyleSheet.create({
});

export default BoxScreen;