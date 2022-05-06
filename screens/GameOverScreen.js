import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOverScreen = ({rounds}) => {
  return (
    <View style={styles.screen}>
        <Text>Game Over :(</Text>
        <Text>Took me {rounds} rounds</Text>
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
});

export default GameOverScreen