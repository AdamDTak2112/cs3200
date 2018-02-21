import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        //alignItems: 'stretch',
        
        padding: 20
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent : 'space-around',
        alignSelf: 'stretch',
    },
    textItem: {
        flex:1,
        textAlign: 'center'
    },
});