

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
    MovieDetails:{
      screen: MovieDetails
    }
})

const RootTab = TabNavigator({
    BrowseTab: {
      screen: RootBrowse,
      navigationOptions:{
        title: 'Browse',

      } 
    },
    SearchTab: {
      screen: RootSearch,
      navigationOptions:{
        title: 'Search'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
