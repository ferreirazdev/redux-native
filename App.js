import React from 'react';
import { StyleSheet } from 'react-native';
import Counter from './Components/Counter';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}