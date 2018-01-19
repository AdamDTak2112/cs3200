import React, { Component } from 'react';
import {
  Button,
  StyleSheet
} from 'react-native';

import styles from '../styles/Style'

export default class CustomTwo extends Component<{}> {
  render() {
    return (
        <Button
            title={(this.props.name)}
            onPress={() => this.props.pressedButton()}
        />
    );
  }
}