import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from '../styles/Styles';

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state={
            time : 10
        }

        setInterval(() => {
            this.setState((prevState) => {
                time: prevState.value - 1
            });
        }, 1000);
    }

    render(){
        return(
        <View>
            <Text>{this.state.time}</Text>
        </View>
        );
    }
}