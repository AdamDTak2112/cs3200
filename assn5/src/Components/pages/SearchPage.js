import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class SearchPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>SEARCH PAGE</Text>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('SearchResultsPage')}}
                >
                    <Text>Search</Text>

                </TouchableOpacity>
            </View>
        );
    }


}