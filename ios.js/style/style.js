var React = require('react-native')

module.exports = React.StyleSheet.create({

  // INDEX.IOS
  wrapper: {
    flex: 1
  },

  // DASHBOARD
  dashboardCell: {
    // borderWidth: 2,
    // borderRadius: 5,
    borderColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -10,
    height: 160
  },
  time: {
    marginLeft: 10,
    fontSize: 19,
    color: 'red',
    fontFamily: 'arial'
  },
  dashRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  ventureThumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  ventureTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#48BBEC',
    marginLeft: 5
  },
  answerStatus: {
    left: 200,
    color: 'green'

  },
  reviews: {
    left: 210,
    color: 'grey',
  },
  invited: {
    color: '#48BBEC',
    marginLeft: 10
  },
  createVenture: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#f7f2f2',
    backgroundColor: '#4bdd2a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newventure: {
    color: 'white'
  },

  // CARD
  cardModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#000',
    padding: 10,
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

  // FRIEND CHOOSE
  thumb: {
    width: 58,
    height: 58,
    marginRight: 20,
    borderRadius: 29,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#f7f7f7',
    borderWidth: 0.1,
    borderColor: '#f9f9f9'
  },
  separator2: {
    height: 1,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#f9f9f9',
    flex: 2
  },
  title: {
    fontSize: 12,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  text: {
    fontSize: 14,
    color: '#e54747'
  },
  heading: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5,
    // marginTop: 10,
    position: 'absolute',
    paddingLeft: 25,
    paddingBottom: 3,
    fontSize: 12,
    color: '#0099ff',
    backgroundColor: '#eaeaea',
    // borderColor: '#0099ff',
    borderWidth: 0.1,
  },
    heading2: {
    // flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 25,
    paddingBottom: 3,
    fontSize: 12,
    color: '#0099ff',
    backgroundColor: '#eaeaea',
    // borderColor: '#0099ff',
    borderWidth: 0.1,
  },
  container: {
    flexDirection: 'column',
    flex: 1
  },
})
