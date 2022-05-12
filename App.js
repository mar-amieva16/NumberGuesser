import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './Constants/Colors';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)
  const [numberGuessed, setnumberGuessed] = useState(undefined);

  const GameOverHandler = (rounds, numberGuessed) => {
    setNumberOfGuesses(rounds);
    setnumberGuessed(numberGuessed);
  }

  const restartGame=()=>{
    console.log("Restart");
    setSelectedNumber(undefined);
    setNumberOfGuesses(0);
  }

  const startGameHandler = (number) => {
    setSelectedNumber(number);
  }


  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedNumber && numberOfGuesses === 0) {
    content = <GameScreen
      selectedNumber={selectedNumber}
      OnGameOver={GameOverHandler} />
  } else if (selectedNumber && numberOfGuesses > 0) {
    content = <GameOverScreen rounds={numberOfGuesses}
    numberGuessed={numberGuessed}
    onRestartGame={restartGame}/>
  }




  return (
    <View style={styles.screen}>
      <Header title={"Guess the Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1
  },
  button:{
    width:100,
  },
});


