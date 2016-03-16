const React = require('react-native')
const { Stylesheet } = React

module.exports = StyleSheet.create({

  // INDEX.IOS
  wrapper: {
    flex: 1
  },

  // DASHBOARD
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },

  // CARD
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#000',
    padding: 10
  },
  cardImage: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLeft: {
    position: 'absolute',
    left:0,
    top:0
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0
  },

  // TBD
  cardContainer: {
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

})
