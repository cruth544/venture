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
  cardModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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

// const styles = StyleSheet.create({
//   thumb: {
//     width: 58,
//     height: 58,
//     marginRight: 20,
//     borderRadius: 29,
//   },
//   textContainer: {
//     flex: 1
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#f7f7f7',
//     borderWidth: 0.1,
//     borderColor: '#f9f9f9'
//   },
//     separator2: {
//     height: 1,
//     backgroundColor: '#f7f7f7',
//     borderWidth: 1,
//     borderColor: '#f9f9f9',
//     flex: 2
//   },
//   title: {
//     fontSize: 12,
//     color: '#656565'
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     padding: 5,
//     alignItems: 'center'
//   },
//   container: {
//     flex: 1
//   },
//   text: {
//     fontSize: 17,
//     color: '#e54747'
//   },
//   heading: {
//     paddingTop: 3,
//     paddingLeft: 25,
//     paddingBottom: 3,
//     fontSize: 15,
//     color: '#0099ff',
//     borderColor: '#0099ff',
//     borderWidth: 0.1,
//   },
//   container: {
//     flexDirection: 'column',
//     flex: 1
//   }
// })
