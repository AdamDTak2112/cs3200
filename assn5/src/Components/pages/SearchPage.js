import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    
    TouchableOpacity,
    View
} from 'react-native';

import{
    Picker,
    Form,
    Container,
    Content,
    Item,
    Button,
    Text,
    Header,
    Body,
    Right,
    Left,
    Input
} from 'native-base';

import styles from '../../styles/style';

export default class SearchPage extends Component{
    constructor(props){
        super(props);

        this.state={
            input: '',
            selectedChoice: 'key0'
        };
    }

    

    onValueChange(value){
        this.setState({
            selectedChoice: value
        });
    }

    onPress(){
        let tempInput = this.state.input;
        this.setState({
            input: ''
        });
        this._textInput.setNativeProps({text: ''});
        if(tempInput === ''){
            alert("Empty Search! \nPlease enter a valid Search...");
        }
        else {
            let path = this.state.selectedChoice == 'key0' ? 'SearchResultsPage' : 'SearchPersonResultPage';
            this.props.navigation.navigate(path, tempInput);
        }
    }

    render(){
        return(
            <Container>
                <Header>
                    <Text style={styles.title}>Search</Text>
                </Header>
                    <Content>
                    <Body>
                        <Form style={{width: 300}}>
                        <Item rounded>
                            <Input
                            ref={component => this._textInput = component} 
                            onChangeText={(text) => this.setState({input: text}) } placeholder='Enter Search Terms'/>
                        </Item>
                        
                        <Picker
                        mode="dropdown"
                        selectedValue={this.state.selectedChoice}
                        onValueChange={(value) => this.onValueChange(value)}
                        >
                            <Item label="Movie" value='key0'/>
                            <Item label="Person" value='key1'/>
                        </Picker>
                        
                        <Item>
                            <Button 
                                onPress={() => { this.onPress() }}
                                
                            >
                                <Text>Go</Text>

                           </Button>
                        </Item>
                        </Form>
                        
                    </Body>
                    
                    </Content>
                
            </Container>
        );
    }


}