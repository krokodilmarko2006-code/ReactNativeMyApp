import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import StudentsDetails from '../components/StudentDetails';

const StudentScreen = ({}) => (
    <View>
        <Text style={styles.text}>StudentScreen</Text>
        <StudentsDetails name="Ellie" image={require('../../assets/Avatar-1.jpeg')} desc={"Bungalo123"}/>
        <StudentsDetails name="Gabriel" image={require('../../assets/Avatar-2.png')} desc={"Bungalo1234"} />
        <StudentsDetails name="Mark" image={require('../../assets/Avatar-3.png')} desc={"Bungalo12345"} />
    </View>
);
const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:20,
        marginVertical:20,
    },
});
export default StudentScreen;
