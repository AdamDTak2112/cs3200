import React, { Component } from 'react';
import {
    Platform,
    FlatList,
    Image, 
} from 'react-native';

import { Card, CardItem, Button, Header, Container, Content, Text, ListItem, Left, Body, Icon, Right, Title, Spinner } from "native-base";

import movieService from './../../services/movie.service';
import styles from './../../styles/style';
import MovieSummary from './../details/MovieSummary';
import apiService from '../../services/api.service';

export default class BrowseListPage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: null,
            searchPage: 1,
            loading: false,
            
        }
        let subjectItem = this.props.navigation.state.params.item

    }

    componentDidMount(){
        this._getMovies();
    }
    
    

    render(){
        let subjectItem = this.props.navigation.state.params.item

        return(
            <Container>
                <Header>
                <Text style={styles.title}>
                    {subjectItem.getName()}
                </Text>
                </Header>
                
                {this.state.data != null ? this._renderMovies() : <Text>...Just a few more seconds</Text>}
                
            </Container>
        );
    }

    _getMovies(){
        console.log(this.props.navigation.state.params);
        this.setState({loading: true});
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
            this.setState({loading: false});
        }
        else{
            this.setState(
                { 
                  data: results,
                  loading: false
                });
            }

        })
        .catch(error => {
            console.log('Something went wrong!');
        })
    }

    _getMoreMovies() {
        
        this.setState({
            searchPage: this.state.searchPage + 1
        }, () => this._getMovies());

        
    }

    _renderFooter = () => {
        if (!this.state.loading)return null;

        return(<Spinner color='blue'/>
            
            );
    }

    _renderMovies(){
        return (<FlatList
            data = {this.state.data}
            keyExtractor= {(item, index) => item.title}
            renderItem ={this._renderItem}
            onEndReached ={() => this._getMoreMovies()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this._renderFooter}
        />);
    }

    _renderItem = ({item}) => {
        
        return (
        <Card>
            
            <CardItem header button onPress={() => this.props.navigation.navigate(
                'MovieDetails', item/*{
                    itemName: item.getTitle(),
                    itemYear: item.getYearReleased(),
                    itemPosterPath: item.getPosterPath(),
                    itemPopularity: item.getPopularity(),
                    itemOverview: item.getOverview(),
                }*/
                )}>
                
            <Left>
            <Image source={{uri: apiService.getPosterImage(item.getPosterPath())}} style={{height: 225, width: 150, flex: 1}}/>
            </Left>
                    
                    
                

                <Text style={styles.textItem}>
                    {item.getTitle()} 
                </Text>
                
                <Right>
                    <Text style={styles.textItem}>
                        {item.getYearReleased()}
                    </Text>

              </Right>
              
            </CardItem>
        </Card>
        

        
        );
    }

    _getPoster({posterPath}){
        let temp = movieService.getPoster(posterPath);
        console.log(temp.toString());
        return movieService.getPoster(posterPath).toString();
    }

    


}