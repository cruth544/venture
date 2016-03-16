'use strict'


// Imports
var React = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')

// Custom Classes
var Card = require('./Card.js')

var seededCards = [
  {name: "Pizza Hut",
    image: "../../assets/churchill.jpg",
    rating: 3},
  {name: "Dominoes",
    image: "../../assets/churchill.jpg",
    rating: 2},
  {name: "Papa Johns",
    image: "../../assets/churchill.jpg",
    rating: 4},
  {name: "Cheesy Triangles",
    image: "../../assets/churchill.jpg",
    rating: 5},
]

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
    this.nextCardIndex = 0
    this.getAllCards()
  }
  getAllCards () {
    this.allCards = seededCards
    console.log("ALL: ", this.allCards)
    // this.allCards.push(API CALL)
  }

  cardThrown (currentCards, direction) {
    console.log("HELLOOOOOOO")
    console.log(currentCards)
    console.log("Direction: ", direction)
    //TODO: Set yes vs no based on direction
    // this.addNextCard(currentCards)
    console.log(currentCards)
  }
  addNextCard (currentCards) {
    // currentCards.shift()
    // currentCards.push(this.allCards[this.nextCardIndex])
  }

  render () {
    var currentCards = []
    for (var i = 0; i < 3; i++) {
      currentCards.push(this.allCards[this.nextCardIndex])
      this.nextCardIndex++
    }
    console.log(currentCards)

    return (
      <View>
        <Card currentCards={currentCards} cardThrown={this.cardThrown}></Card>
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
