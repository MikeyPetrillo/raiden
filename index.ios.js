/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import * as firebase from 'firebase'
import settings from './app/config/settings'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(settings.firebaseConfig);


class raiden extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome To Raiden</Text>
                <Text style={styles.instructions}>Tagline here, lets work together to make something better.</Text>

                <Text>Sign Up</Text>
                <Text>Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
  }
});

AppRegistry.registerComponent('raiden', () => raiden);
