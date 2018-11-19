import React from 'react'
import { AsyncStorage } from 'react-native'
import { _getSampleDecks } from './helpers'
import { DECKS_STORAGE_KEY } from './_data'

export function getDecks () {
  return AsyncStorage.getAllKeys(DECKS_STORAGE_KEY)
}

export function getDeck (id) {

}

export function saveDeckTitle (title) {

}

export function addCardToDeck (title, card) {

}

export function getSampleDecks() {
  let sampleDecks = {}

  Promise.all(_getSampleDecks()).then(
    ([sampleDecks]) => ({
      sampleDecks
    }),
  )

  //AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(sampleDecks))

  return sampleDecks
}



