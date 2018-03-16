import React, { Component } from 'react';
import {
    Platform,
    FlatList,
    Image,
} from 'react-native';

import styles from '../../styles/style';

import{
    Container,
    Text,
    Card,
    CardItem,
    Button,
    Header,
    Content,
    ListItem,
    Left,
    Body,
    Icon,
    Right,
    Title,
    Spinner,

} from 'native-base';

import movieService from '../../services/movie.service';
import apiService from '../../services/api.service';

export default class SearchResultsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            data: null,
            searchPage: 1,
            loading: false,
            subjectItem: null
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
                    Search Results
                </Text>
                </Header>
                
                {this.state.data != null ? this._renderMovies() : <Text>...Just a few more seconds</Text>}
                
            </Container>
        );
    }
//TODO getMovies needs to pull search results
    _getMovies(){
        this.setState({loading: true});
        movieService.getMovieSearch(this.props.navigation.state.params)
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