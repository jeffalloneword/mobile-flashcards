import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { orange } from '../utils/colors'

export default function DeckList () {

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>FlashCard Deck</Text>
        <Text>32 Cards</Text>
      </View>
      <View style={styles.container}>
        <Text>FlashCard Deck</Text>
        <Text>32 Cards</Text>
      </View>
      <View style={styles.container}>
        <Text>FlashCard Deck</Text>
        <Text>32 Cards</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
