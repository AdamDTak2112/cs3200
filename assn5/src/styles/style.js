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
        marginTop:40
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