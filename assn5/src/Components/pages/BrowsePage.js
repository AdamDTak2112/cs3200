import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from '../../styles/style';

export default class BrowsePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome To the Browse Page</Text>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('BrowseListPage')}}
                    style={styles.touchableButton}
                />
                
            </View>
        );
    }


}