import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)

  const GameOverHandler = (rounds) => {
    setNumberOfGuesses(rounds)
  }

  const startGameHandler = (number) => {
    setSelectedNumber(number);
  }
  console.log('selectedNumber', selectedNumber)

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedNumber && numberOfGuesses === 0) {
    content = <GameScreen
      selectedNumber={selectedNumber}
      OnGameOver={GameOverHandler} />
  } else if (selectedNumber && numberOfGuesses > 0) {
    content = <GameOverScreen rounds={numberOfGuesses}/>
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
});


