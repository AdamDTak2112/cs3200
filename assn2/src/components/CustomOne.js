/**
 * Adam Tak
 * A02171784
 * CS3200
 * Dr. Chad Mano
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/Style'

export default class CustomOne extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {this.props.pressedButton()}}
        >

        <Text style={styles.buttonText}>
          Up
        </Text>
      </TouchableOpacity>
    );
  }
}


