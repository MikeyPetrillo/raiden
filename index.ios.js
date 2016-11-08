/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
const firebase = require('firebase');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQres8B1RLAFnhs7c4SxgWa-ng8B9knzQ",
  authDomain: "raiden-a5db8.firebaseapp.com",
  databaseURL: "https://raiden-a5db8.firebaseio.com",
  storageBucket: "raiden-a5db8.appspot.com",
  messagingSenderId: "276978701255"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class raiden extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome To Raiden
        </Text>
        <Text style={styles.instructions}>
          Tagline here, lets work together to make something better.
        </Text>
          <View style={styles.button}>
            <Text>Sign Up</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40
  }
});

AppRegistry.registerComponent('raiden', () => raiden);
