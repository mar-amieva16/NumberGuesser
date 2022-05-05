import {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Card from '../Components/Card'
import Colors from '../Constants/Colors'
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';


const StartGameScreen =(onStartGame)=>{

    const [enteredValue,setEnteredValue] = useState('')
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNUmber] = useState(undefined)

    const numberInputHandler = input =>{
        setEnteredValue(input.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler= () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler= () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber)||chosenNumber<=0 ||chosenNumber>99) return 
        setConfirmed(true)
        setSelectedNUmber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
        <Card>
            <Text>You Selected:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button 
            title='Ready to start game?'
            onPress={()=>onStartGame()} />
        </Card>
        )
    }
    return(
        <View style={styles.screen}>
            <Card>
            <Text style={styles.title}>Select a Number</Text>
            <Input 
                style={styles.input}
                blurOnSubmit //Sólo en Android
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType="numer-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
            />
                <View style={styles.buttonContainer}>
                    <View>
                        <Button 
                            style={styles.button} 
                            title="Reset"
                            onPress={resetInputHandler}
                            color={Colors.secondary}
                        />
                    </View>    
                    <View style={styles.button}>
                        <Button 
                            style={styles.button} 
                            title="Confirm"
                            onPress={confirmInputHandler}
                            color={Colors.primary}
                        />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    )
}

const styles = StyleSheet.create({
    selectedContainer:{
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button:{
        width: 100,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width:50,
        textAlign: 'center'
    }
});

export default StartGameScreen