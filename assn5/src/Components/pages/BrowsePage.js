import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { Button, Header, Container, Content, Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";

import styles from '../../styles/style';
import movieService from '../../services/movie.service';

export default class BrowsePage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }

    componentDidMount(){
        this._getGenres();
    }

    render(){
        return(
            <Container>
                <Header>
                <Text style={styles.title}>Browse</Text>
                
                </Header>
                <Content>
                {this.state.data != null ? this._renderGenres() : <Text>...Just a few more seconds</Text>}
                
                </Content>
            </Container>
        );
    }

    _getGenres(){
        movieService.getGenres()
        .then(results =>{
            this.setState({data: results});
        })
        .catch(error =>{
            console.log('Error obtaining genres...');
        })
    }

    _renderGenres(){
        return(
        
        <FlatList
            data = {this.state.data}
            keyExtractor = {(item, index) => item.getName()}
            renderItem = {this._renderItem}
        />
            
        );
    }

    _renderItem = ({item}) => {
        return (
        <ListItem itemDivider>
        
        <Body style={{ marginLeft: 0 }}>
        <Button onPress={() => {this.props.navigation.navigate('BrowseListPage', {item})}} block>
          <Text style={{ fontWeight: "bold" }}>
            {item.getName()}
          </Text>
        </Button>
        </Body>
        
      </ListItem>
        );
    }

   


}