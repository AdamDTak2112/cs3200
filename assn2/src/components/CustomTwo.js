import React, { Component } from 'react';
import {
  Button,
} from 'react-native';

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