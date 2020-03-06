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

export default class SearchPersonResultPage extends Component{
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
        this._getPeople();
    }
    
    

    render(){
        
        

        return(
            <Container>
                <Header>
                <Text style={styles.title}>
                    Search Results
                </Text>
                </Header>
                
                {this.state.data != null ? this._renderPeople() : <Text>...Just a few more seconds</Text>}
                
            </Container>
        );
    }
//TODO getPeople needs to pull search results
    _getPeople(){
        this.setState({loading: true});
        movieService.getPeopleSearch(this.props.navigation.state.params)
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

    _getMorePeople() {
        
        this.setState({
            searchPage: this.state.searchPage + 1
        }, () => this._getPeople());

        
    }

    _renderFooter = () => {
        if (!this.state.loading)return null;

        return(<Spinner color='blue'/>
            
            );
    }

    _renderPeople(){
        return (<FlatList
            data = {this.state.data}
            keyExtractor= {(item, index) => item.title}
            renderItem ={this._renderItem}
            onEndReached ={() => this._getMorePeople()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this._renderFooter}
        />);
    }

    _renderItem = ({item}) => {
        
        return (
        <Card>
            
            <CardItem header button onPress={() => this.props.navigation.navigate(
                'PersonDetails', item
                )}>
                
            <Left>
            <Image source={{uri: apiService.getPersonPicture(item.getImagePath())}} style={{height: 225, width: 150, flex: 1}}/>
            </Left>
                    
                    
                

                <Text style={styles.textItem}>
                    {item.getName()} 
                </Text>
                
                <Right>
                    <Text style={styles.textItem}>
                        {item.getPopularity()}
                    </Text>
                    

              </Right>
              
            </CardItem>
        </Card>
        

        
        );
    }
}