import React, { Component } from 'react'
import './App.css'
//import Counter from './examples/useEffect/counterWithDocumentTitleUpdate/CounterWithDocumentTitleUpdate'
import ChatRecipientPicker from './examples/customHooks/ChatRecipientPicker'
//import CounterWithReducer from './examples/useReducer/CounterWithReducer'
//import TextInputWithFocusButton from './examples/useRef/TextInputWithFocusButton'

class App extends Component {
  render () {
    return (
      <ChatRecipientPicker />
    )
  }
}

export default App
