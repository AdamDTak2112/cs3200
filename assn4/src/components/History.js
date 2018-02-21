import React, { Component } from 'react';
import{
    FlatList,
    Text,
    View
} from 'react-native';

import styles from '../styles/Style'

export default class History extends Component {
    constructor(props){
        super(props);

        this.data= [];
       // this._initData();
       
    }

    /**_initData(){
        
            
              this.data.push({
                              // key: i,
                              id: 'ABC',
                              
                              value: 50
                            });
            
          
    }*/
    _addData(newData){
       this.data.push(newData);
       
    }

    render(){
        return (
            <FlatList 
                data={this.data}
                renderItem = {this._renderItem}
                style={{alignSelf: 'stretch'}}
                keyExtractor={(item, index) => item.id}
                ref={component => this._list = component}
            >
            </FlatList>

        );


    }

    _renderItem = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                <Text onPress={() => {this.props.recallValue()}} style={styles.textItem}>{item.id}</Text>
                <Text style={styles.textItem}>{item.value}</Text>
            </View>    
            
        );
    }


}