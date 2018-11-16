import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { orange, white, gray } from '../utils/colors'

export default function FlashCard () {

  return (

    <View style={styles.container}>
      <View style={styles.item}>
        <Text>This is a card</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 100,
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    borderWidth : 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    height: 200,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    borderColor: gray,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
});
