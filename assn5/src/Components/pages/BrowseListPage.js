import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';

import { Card, CardItem, Button, Header, Container, Content, Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";

import movieService from './../../services/movie.service';
import styles from './../../styles/style';

export default class BrowseListPage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: null,
            searchPage: 1
        }
    }

    componentDidMount(){
        this._getMovies();
    }

    render(){
        return(
            <Container>
                <Header>
                <Text style={styles.title}>
                    {this.props.navigation.state.params.item.getName()}
                </Text>
                </Header>
                <Content>
                {this.state.data != null ? this._renderMovies() : <Text>...Just a few more seconds</Text>}
                </Content>
            </Container>
        );
    }

    _getMovies(){
       console.log(this.props.navigation.state.params.item.getID());
        movieService.getMovies(this.props.navigation.state.params.item.getID(), this.state.searchPage.toString())
        .then(results =>{
            if(this.state.searchPage != '1'){
            let newData = this.state.data;
            results.forEach(element => {
               newData.push(element)
            });
            this.setState({
                data: newData
            });
        }
        else{
            this.setState(
                { data: results
                });
            }
        })
        .catch(error => {
            console.log('Something went wrong!');
        })
    }

    _getMoreMovies = () => {
        console.log("reached getmoremovies");
        this.setState({
            searchPage: this.state.searchPage + 1
        }, () => this._getMovies());

        
    }

    _renderMovies(){
        return (<FlatList
            data = {this.state.data}
            keyExtractor= {(item, index) => item.title}
            renderItem ={this._renderItem}
            onEndReached ={this._getMoreMovies}
            onEndReachedThreshold={5}
        />);
    }

    _renderItem = ({item}) => {
        return (
        <Card>
            <CardItem button>
                <Left>
                <Text style={styles.textItem}>
                    {item.getTitle()} 
                </Text>
                </Left>
                <Right>
                    <Text style={styles.textItem}>
                        {item.getYearReleased()}
                    </Text>
                </Right>
            </CardItem>
        </Card>
        
        );
    }


}