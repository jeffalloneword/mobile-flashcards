import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, Dimensions, TouchableOpacity, Animated } from 'react-native'
import { orange, white, gray, stickyNote } from '../utils/colors'

export default class FlashCard extends Component {

  componentWillMount () {
    this.animatedValue = new Animated.Value(0)
    this.amount = 0

    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })

    this.cardFrontRange = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    this.cardBackRange = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard () {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  render () {
    const frontCardStyle = {
      transform: [
        { rotateY: this.cardFrontRange }
      ]
    }
    const backCardStyle = {
      transform: [
        { rotateY: this.cardBackRange }
      ]
    }

    return (


      <View style={styles.container}>
        <View>
          <Animated.View style={[frontCardStyle, styles.card]}>
            <Text style={styles.cardText}>This is the question (front)</Text>
          </Animated.View>
          <Animated.View style={[backCardStyle, styles.card, styles.cardBack]}>
            <Text style={styles.cardText}>This is the answer (back)</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>FLIP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 100,
  },
  card: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    height: 200,
    width: width - 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    borderColor: gray,
    backfaceVisibility: 'hidden',
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  cardBack: {
    backgroundColor: stickyNote,
    position: 'absolute',
    top: 0
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
