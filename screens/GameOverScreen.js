import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';


const restart = (rounds) => {
  rounds = -1;
  console.log(rounds)
}


const GameOverScreen = ({ rounds, numberGuessed, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverBox}>
        <Text style={styles.gameOverTitle}>Game Over!</Text>
        <Text>The number guessed:</Text>
        <Text style={styles.gameOverMsg}>{numberGuessed}</Text>
        <Text>It took you: {rounds} rounds to guess</Text>
      </Card>
      <View>
        <Button
          title="Restart Game"
          style={styles.button}
          color={Colors.secondary}
          onPress={() => { onRestartGame() }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  gameOverTitle: {
    fontSize: 26,
    color: Colors.secondary,
    margin: 15,
    textAlign: 'center',
  },
  gameOverMsg: {
    fontSize: 22,
    color: Colors.primary,
    margin: 10,
  },
  gameOverBox: {
    shadowColor: Colors.tertiary,
  },
});

export default GameOverScreen