/**
 * Adam Tak
 * A02171784
 * CS3200
 * Dr. Chad Mano
 */

import React, { Component } from 'react';
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomOne from './CustomOne';
import CustomTwo from './CustomTwo';

import styles from '../styles/Style';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        
        <CustomOne/>
        
        
      </View>
    );
  }
}