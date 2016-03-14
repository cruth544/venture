'use strict'


// Imports
var React = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')

// Custom Classes
var Card = require('./Card.js')

var {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  Animation
} = React

class CardController extends Modal {
  constructor(props) {
    super(props)
    this.state = {}
    this.allCards = []
  }
  getAllCards () {
    // this.allCards.push(API CALL)
  }

  fetchNewCard (currentCards) {
    // if (completed) {
    //   var nextCard = new Card(this.allCards.pop())
    //   currentCards.push(this.allCards.pop())
    // }
  }

  render () {
    var currentCards = []

    return (
      <View>
        <Card></Card>
      </View>
    )
  }
}

CardController.propTypes = {
  allCards: React.PropTypes.array
}
CardController.defaultProps = {
  allCards: []
}

module.exports = CardController
