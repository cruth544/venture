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
  },
  time: {
    marginLeft: 10,
    fontSize: 19,
    color: 'red',
    fontFamily: 'arial'
  },
  dashRow: {
    padding: 10,
    marginTop: -5,
    marginBottom: -11,
    // marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    paddingVertical: 5,
    flex: 1,
  },
    dashRow2: {
    flexDirection: 'row',
    height: 30,
    flex: 1,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    borderRadius: 1
  },
  date: {
    color: 'white',
    marginLeft: 20,
    paddingRight: 110,
    fontSize: 16
  },
  ventureData: {
    padding: 5,
  },
  ventureThumb: {
    width: 130,
    height: 130,
    marginRight: 5,
    marginLeft: -11,
  },
  ventureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#48BBEC',
    paddingBottom: 3,
  },
  ventureLocation: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 3,
  },
  ventureTime: {
    fontWeight: 'bold',
  },
  answerStatus: {
    color: 'green'
  },
  reviews: {
    left: 135,
    color: 'grey',
  },
  invited: {
    color: '#48BBEC',
    marginLeft: 10
  },
  invitedPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  createVenture: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 72,
    height: 72,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#f7f2f2',
    backgroundColor: '#4bdd2a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newventure: {
    color: 'white',
    fontWeight: 'bold'
  },
  imgRow: {
    flexDirection: 'row',
    margin: 2,
  },
  invited: {
    paddingBottom: 3,
    marginLeft: 140,
    color: 'grey'
  },
  venturists: {
    marginLeft: 100
  },

  // CARD
  cardController: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: -800,
    left: -132,
    bottom: 0,
    right: 0,
  },
  closeButton: {
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,1)',
    bottom: 0,
    left: -100,
  },
  cardcontainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey'
  },
  card: {
    borderWidth: 3,
    borderRadius: 12,
    borderColor: 'white',
    padding: 10,
    alignItems: 'center'
  },
  cardImage: {
    height: 270,
    width: 270,
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
  rating: {
    fontSize: 40,
    color: '#30BDFF',
    padding: 5,
  },
  cardName: {
    fontSize: 45,
    color: '#30BDFF',
    padding: 10,

  },
  cardLocation: {
    fontSize: 25,
    padding: 10,
  },
  cardDescription: {
    fontSize: 30,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 40,
  },
  buttonNo: {
    borderWidth: 10,
    borderColor: 'red',
    height: 140,
    width: 140,
    borderRadius: 70,
    justifyContent: 'center',
    marginRight: 40,
  },
  buttonYes: {
    borderWidth: 10,
    borderColor: '#4bdd2a',
    height: 140,
    width: 140,
    borderRadius: 70,
    justifyContent: 'center',
  },
  buttonTextNo: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'red',
  },
    buttonTextYes: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#4bdd2a',
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
    alignItems: 'center',
  },
  containerFriend: {
    flex: 1,
    marginTop: 64,
  },
  text: {
    fontSize: 14,
    color: '#e54747'
  },
  heading: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingLeft: 25,
    paddingBottom: 3,
    fontSize: 12,
    color: '#0099ff',
    // borderColor: '#0099ff',
    borderWidth: 0.1,
  },
    heading2: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingLeft: 25,
    paddingBottom: 3,
    fontSize: 12,
    color: '#0099ff',
    marginTop: -8,
    borderWidth: 0.1,
  },
  container: {
    flexDirection: 'column',
    flex: 1
  },
  friendGroup: {
    marginTop: -60
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 10,
    flex: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    color: '#48BBEC',
  },
  button: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  // Details
  detailsContainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  detailsTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  detailsButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  detailsButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
