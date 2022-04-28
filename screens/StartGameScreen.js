import {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartGameScreen =()=>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Select a Number</Text>
            <View style={styles.inputContainer}>
                <TextInput/>
                <Button style={styles.button} title="Reset"/>
                <Button style={styles.button} title="Confirm"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {

    },
    button: {

    }
});

export default StartGameScreen