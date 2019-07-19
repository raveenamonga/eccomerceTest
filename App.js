/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Navigation  from './Navigation';
import SplashScreen from 'react-native-splash-screen';


import { Provider } from 'react-redux';
import {API_ROOT} from './env';
import {setConfiguration} from './src/utils/configuration';
import configureStore from './src/redux/store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

componentDidMount(){
  setConfiguration('API_ROOT', API_ROOT);

  console.disableYellowBox = true;
  SplashScreen.hide();

}

  render() {
    const store = require('./src/redux/store').default;

    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#9979f2" barStyle="light-content" />
      <Provider store = { store }>
              <Navigation />
            </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
