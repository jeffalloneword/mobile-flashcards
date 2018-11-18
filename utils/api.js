import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { _getSampleDecks } from './helpers'

export function getDecks () {

}

export function getDeck (id) {

}

export function saveDeckTitle (title) {

}

export function addCardToDeck (title, card) {

}

export function getSampleDecks() {
  return Promise.all(_getSampleDecks()).then(
    ([sampleDecks]) => ({
      sampleDecks
    }),
  )
}



