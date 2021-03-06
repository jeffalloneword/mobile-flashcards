import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import { purple, white } from './utils/colors'
import FlashCard from './components/FlashCard'

export default class App extends Component {
  state = {
    nav: 'card',
  }

  componentDidMount () {

  }

  render () {
    const getDisplay = () => {
      switch (this.state.nav) {
        case 'card':
          return <FlashCard/>
        case 'deck':
          return <DeckList/>
        default:
          return <DeckList/>
      }
    }

    return (
      <Provider store={createStore(reducer)}>
        < View style={styles.container}>
          {getDisplay()}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})
