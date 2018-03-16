import React, { Component } from 'react';
import{
    StyleSheet,
    Image
} from 'react-native';

import{
   Card,
   CardItem,
   Left,
   Text,
   Right,
   Container,
   Content,
   Body,
   Header,
   
} from 'native-base';

import styles from './../../styles/style';
import apiService from './../../services/api.service';
import Movie from './../../models/movie';

export default class MovieDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let item = this.props.navigation.state.params;

        return(
//this.props.navigation.state.params.item
            
            <Container style={styles.detailContainer}>
                
                <Header>
                    <Text style={styles.title}>{this.props.navigation.state.params.getTitle()}</Text>
                </Header>
                <Content padder>
                    <Left>
                        <Image source={{uri: apiService.getPosterImage(this.props.navigation.state.params.getPosterPath())}} style={{height: 225, width: 150, flex: 2}}/>
                        <Text style={styles.detailText}>Date released: {item.getYearReleased()}</Text>
                    </Left>
                    <Body>
                        
                        

                        <Text >Plot Overview</Text>
                        <Text style={styles.detailText}>{item.getOverview()}</Text>
                    </Body>
                </Content>

            </Container>
        );
    }
}