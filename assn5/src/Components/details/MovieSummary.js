import React, { Component } from 'react';
import{
    StyleSheet
} from 'react-native';

import{
   Card,
   CardItem,
   Left,
   Text,
   Right,
   Header,
} from 'native-base';

import styles from './../../styles/style';

export default class MovieSummary extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            //this.props.navigation.state.params.item
            
                <Header>
                    {this.props.navigation.state.params.item.getTitle()}
                </Header>
                
        
            
        );
    }
}