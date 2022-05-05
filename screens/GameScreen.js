import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import NumberContainer from '../Components/NumberContainer';
import constants from '../Constants/constants';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);

    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        randNumFloored;
    }
}
const GameScreen = ({ selectednumber }) => {

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow, currentHigh, selectednumber));

    const nextGuess = direction =>{
        if( (direction===constants.direction.higher &&currentGuess>selectednumber)  || (direction===constants.direction.lower &&currentGuess<selectednumber)){
            //Alert('Hips dont lie', [{text:'Sorry', style:'cancel'}])
            alert('Hips dont lie')
            return
        }
    }

    return (
        <View>
            <Text>Computer Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.butonContainer}>
                <Button title='Lower' onPress={() => { nextGuess(constants.direction.lower)}} />
                <Button title='Higher' onPress={() => { nextGuess(constants.direction.higher)}} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

export default GameScreen