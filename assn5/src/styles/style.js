import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 20
    }, 
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        flex: 1
      },
    itemContainer: {
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignSelf: 'stretch',
      },
      textItem: {
        flex:1,
        textAlign: 'center'
      },
    detailContainer: {
        flexDirection: 'column',
        flex: 1,
        
        
    },
    detailText: {
        margin: 10,
        padding: 10,
        textAlign: 'left',
        flex: 2,
    },
});