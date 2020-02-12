import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/Styles'

export default class Button extends Component<{}> {
    constructor(props) {
      super(props);

     
    }

    render() {
        
        return (
            
            <TouchableOpacity
                style={this.props.style}
                id = {this.props.id}
                
            >
            </TouchableOpacity>
            
            
        );
    }

}