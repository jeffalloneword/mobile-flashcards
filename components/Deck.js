import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { orange } from '../utils/colors'

export default function Deck () {

  return (
    <View style={styles.container}>
      <Text>FlashCard Deck</Text>
      <Text>32 Cards</Text>
      <Button title={'button1'}>Start the Quiz</Button>
      <Button title={'button2'}>Add a new Card</Button>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
