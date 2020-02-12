/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Button from './Button';
import styles from '../styles/Styles'
import Score from '../components/Score'
import Timer from '../components/Timer'



export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
      isBeginning: true,
      hasWon: false,
      scoreValue: 0,
      time: 10
    };


    
  }

  

  render() {
    const beginningScreen = 
    
      <View style={styles.beginningScreen}>

        <View style={styles.beginningContainer}>
        
          <Text style={styles.beginningTitle}>Welcome to Tapit!</Text>
          <Text>Press the button to begin</Text>
          <TouchableOpacity style={styles.startButton} onPress={() => this.startGame()}>
            <Text>start</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    
    const playingScreen = 
    <View>
      <View style={styles.scoreboard}>
       <Text style={styles.score}>
        score: {this.state.scoreValue}
       </Text>
       <Text style ={styles.score}>
         time: {this.state.time}
         
       </Text>
       
      </View>
      <View>
      {this.createWithLoop()}
      </View>
    </View>

    const endingScreen = <Text style={{textAlign: 'center'}}>End!</Text>;

    

   if(this.state.isPlaying){
      screen = playingScreen;
    }
    else if (this.state.isBeginning){
      screen = beginningScreen;
      
    }
    else{
      screen = endingScreen;
    }

    return (
      <View style={styles.container}>{screen}</View>
     
      
    );
  }

  startGame(){
    this.updateStateRightWay();
    this.setState((prevState) => {
      return{
        isPlaying: true,
        isBeginning:false
      }
    }
  );
  }

  createWithLoop() {
    let rowKey = [0, 1, 2, 3, 4, 5, 6, 7];
    let colKey = [0, 1, 2, 3, 4];
    let results = [];
    //for(let j = 0; j < 8; j++){
      
      
    for(let i = 0; i < 40; i++) {
      let temp = <Button style={styles.activeButton} id={i} key={i}/>; 
      results.push(temp); //only use the index as a key if list will not change
    }
  //}
    return (<View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>{results}</View>);
  }
  updateStateRightWay() {
    // change the state every second
    setInterval(() => {
      this.setState((prevState) => {
        return{
          time: prevState.time - 1
        }
      });
    }, 1000);
  }
}






