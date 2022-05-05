import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

const [selectedNumber, setSelectedNumber] = useState(undefined);
const startGameHandler = (number) =>{
  setSelectedNumber(number);
}

let content = selectedNumber?
  <GameScreen/>:
  <StartGameScreen onStartGame={startGameHandler} />
/*if(selectedNumber){
  content=<GameScreen/>
}*/ //ño mismo que el condicional de arriba

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


