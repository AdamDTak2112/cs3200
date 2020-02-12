import{ StyleSheet } from 'react-native';


export default StyleSheet.create({
   activeButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    width: 65,
    height: 65,
    alignItems: 'center',
    margin: 5
   },

   inactiveButton: {
    backgroundColor: '#F5FCFF',
   },

   container: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  beginningScreen: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 55,
    
  },

  beginningContainer: {
    flex: 1,
    alignItems: 'center',
    
  },

  beginningTitle: {
    fontSize: 42,
    textAlign: 'center'  
  },

  scoreboard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    alignItems: 'center'
  },

  timer:{
    
  },

  score: {
    fontSize: 44,
  },

  startButton:{
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
    width: 50,
    height: 30,
    alignItems: 'center',
    margin: 5
  }

  


});