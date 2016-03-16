var React = require('react-native')

module.exports = React.StyleSheet.create({

  // INDEX.IOS
  wrapper: {
    flex: 1
  },

  // DASHBOARD
  dashboardCell: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 10,
    margin: 10,
  },
  dashRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  ventureTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
  },
  answerStatus: {
    left: 225,
  },
  reviews: {
    left: 210,
  },

  // CARD
  cardLightBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
