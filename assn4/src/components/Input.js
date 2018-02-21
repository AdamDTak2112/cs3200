import React, { Component } from 'react';
import {
    TextInput,

} from 'react-native';


export default class Input extends Component {
    constructor(props){
        super(props);

        this.state={
            text: ''
        };
    }

    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render(){
        
        return(
            <TextInput
                ref={component => this._textInput = component}
                keyboardType='default'
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing= {() => {
                    
                    
                    this.props.calculate(this.state.text);
                    this.clearText();
                
                }}
            />
        );
    }
}