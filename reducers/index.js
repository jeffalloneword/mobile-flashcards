import { ADD_DECK, RECEIVE_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions'
import { getSampleDecks } from '../utils/api'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case RECEIVE_DECK :
      return {
        ...state,
        ...action.deck,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD :
      return {
        ...state,
        title,
        card,
      }
    default :
      return state
  }
}

export default decks