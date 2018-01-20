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

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {this.state.value}
          </Text>
        </View>
        
        <CustomOne 
          pressedButton={() => this.pressedUp()}
        />
        <CustomTwo
          pressedButton={() => this.pressedDown()}
        />  

        
      </View>
    );
  }
  pressedUp(){
    this.setState((prevState) => {
      return {
        value: prevState.value + 1

      }
    }
    );
  }

  pressedDown(){
    this.setState((prevState) => {
      return {
        value: prevState.value - 1

      }
    }
    ); 
  }
}