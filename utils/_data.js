import React from 'react'

// Startup, sample data

let sampleDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'What is the name of the javascript extension that allows React to describe UI elements?',
        answer: 'JSX'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      },
      {
        question: 'True or False: Neither the length of  a JavaScript array nor the types of its elements are fixed.',
        answer: 'True'
      }
    ]
  }
}

// Data functions:

export const DECKS_STORAGE_KEY = 'Udacicards:decks'

export function _getSampleDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...sampleDecks }), 1000)
  })
}