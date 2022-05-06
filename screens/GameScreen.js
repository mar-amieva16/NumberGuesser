import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import NumberContainer from '../Components/NumberContainer';
import constants from '../Constants/constants';
import Card from '../Components/Card';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);

    if (randNumFloored === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNumFloored;
    }
}
const GameScreen = ({selectedNumber, OnGameOver}) => {

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow.current, currentHigh.current, selectedNumber));

    const [rounds, setRounds] = useState(0)
    useEffect(()=>{
        if(currentGuess===selectedNumber){
            OnGameOver(rounds)
        }
    }, [currentGuess])

    console.log('currentGuess', currentGuess)
    const nextGuess = direction =>{
        if( (direction===constants.direction.higher &&currentGuess>selectedNumber)  || (direction===constants.direction.lower &&currentGuess<selectedNumber)){
            alert('Las bichotas no dicen mentiras.')
            return
        }

        if(direction===constants.direction.lower)
        {
            currentHigh.current =currentGuess;
        }else{
            currentLow.current =currentGuess;
        }

        const nextNum= generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setRounds(currentRounds=>setRounds(currentRounds+1))
        setCurrentGuess(nextNum);

        if(nextNum===selectedNumber)
        {
            alert('Ganación :)')
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Computer Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
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