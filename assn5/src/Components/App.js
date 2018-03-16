

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  NavigationActions,
  StackNavigator,
  TabNavigator} from 'react-navigation';

import BrowsePage from './pages/BrowsePage';
import BrowseListPage from './pages/BrowseListPage';
import SearchResultsPage from './pages/SearchResultsPage';
import SearchPersonResultsPage from './pages/SearchPersonResultPage';
import SearchPage from './pages/SearchPage';
import MovieDetails from './details/MovieDetails';



const RootBrowse = StackNavigator({
    BrowsePage: {
      screen: BrowsePage
    },
    BrowseListPage:{
      screen: BrowseListPage
    },
    MovieDetails:{
      screen: MovieDetails
    }
})


const RootSearch = StackNavigator({
    SearchPage: {
      screen: SearchPage
    },
    SearchResultsPage: {
      screen: SearchResultsPage
    },
    SearchPersonResultsPage: {
      screen: SearchPersonResultsPage
    },
    MovieDetails:{
      screen: MovieDetails
    }

})

const RootTab = TabNavigator({
  SearchTab: {
    screen: RootSearch,
    navigationOptions:{
      title: 'Search'
    }
  },
    BrowseTab: {
      screen: RootBrowse,
      navigationOptions:{
        title: 'Browse',

      } 
    },
    
},
    {
    tabBarPosition: 'bottom',
    
    });



export default class App extends Component{
  render() {
    return (
      <RootTab/>
    );
  }
}

