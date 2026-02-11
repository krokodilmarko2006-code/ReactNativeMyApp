import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter = 0;

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Button Screen</Text>

            <Button
                title="Click me"
                onPress={() =>
                    console.log("Button Clicked this many times!", counter++)
                }
            />

            <TouchableOpacity
                style={styles.touchableButton}
                onPress={() => console.log("Touchable Button Clicked!!")}
            >
                <Text style={{ color: "white", textAlign: "center" }}>
                    This is a clickable
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    touchableButton: {
        backgroundColor: "purple",
        marginVertical: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
});

export default ButtonScreen;
