import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../styles/Styles';

export default class Score extends Component<{}>{
    constructor(props){
        super(props);
        
        this.state={
            value: 0,
        }
    }

    render(){
        return(
           <Text style={styles.score}>{this.state.value}</Text>
        );
    }



}