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
  TextInput,
  Alert
} from 'react-native';
import Input from './Input';
import History from './History';
import styles from '../styles/Style';





export default class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      numOfCalculations: 0,
      value: 0
    };

  }

  recallValue(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <History
          ref={history => this._historyItem = history}
          recallValue={() => this.recallValue()}
        />
        <Input
          //ref={component => this._textInput = component}
          calculate={(text) => this.calculateNumbers(text)}
        />
      </View>
    );
  }

 

  calculateNumbers(text){
    
    let tokens = text.split('')
    let numStack = [];
    let opStack = [];

    if (tokens.length == 0){
      alert("Nothing entered, try again");
      return;
    }

    for(i = 0; i < tokens.length; i++){
      console.log(tokens[i]);
      //if whitespace, skip

      if (tokens[i] == ' '){
        continue;
      }

      //if number, read in all digits and store on numstack
      else if(tokens[i]>='0' && tokens[i] <= '9'){
        let temp = '';
        if(tokens[i+1]>='0' && tokens[i+1] <='9'){
          while(i < tokens.length && tokens[i]>='0' && tokens[i] <= '9'){
            temp += tokens[i];
            i++;
          }
        } 
        else{
          temp = tokens[i];
        }
        console.log('reading number..')
        numStack.push(parseInt(temp, 10));
      }

      //Else if token is left paren, push on stack
      else if(tokens[i] == '('){
        console.log('reading left paren..')
        opStack.push(tokens[i]);
      }

      //Else if token is right paren, push on stack, solve whole brace
      else if(tokens[i] == ')'){
        
        while(opStack[opStack.length - 1] != '('){
          numStack.push(applyOp(opStack.pop(), numStack.pop(), numStack.pop()));
          
        }
        opStack.pop();
      }

      //Else if operator,
      else if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){
        console.log('reading op..')
        while(opStack.length != 0 && hasPrecedence(tokens[i], opStack[opStack.length - 1])){
          numStack.push(applyOp(opStack.pop(), numStack.pop(), numStack.pop()));
        }
        opStack.push(tokens[i]);

      }
    }
      for(i = 0; i < opStack.length; i++){
        console.log(opStack[i])
      }
      for(i = 0; i < opStack.length; i++){
        console.log(numStack[i])
      }
      while(opStack.length > 0){
        console.log('cleanup!');
        numStack.push(applyOp(opStack.pop(), numStack.pop(), numStack.pop()));
      }
      
     console.log(numStack[numStack.length-1]);
     this.setState((prevState) => {
      return{
        //value: numStack.pop(),
        numOfCalculations: prevState.numOfCalculations + 1
      }

    }
  );
    
    this._historyItem._addData({
      id: 'r' + this.state.numOfCalculations,
      value: numStack.pop()
    })

    function hasPrecedence(op1, op2){
      if (op2 == '(' || op2==')'){
        return false;
      }
      if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-')){
        return false;
      }
      else{
        return true;
      }
    }

    //return arithmetic between two operands
    function applyOp(op, b, a){
      switch(op){
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          if(b == 0){
            
          }
          return a / b;

      }
    }

   

        
    
  }



}


