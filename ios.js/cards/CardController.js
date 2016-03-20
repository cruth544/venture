'use strict'


// Imports
var React = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')

// Custom Classes
var Card = require('./Card.js')
var styles         = require('../style/style.js')

var seededCards = [
  {name: "Pizza Hut",
    image: require("image!pizza-hut"),
    rating: 3},
  {name: "Dominos",
    image: require("image!dominos"),
    rating: 2},
  {name: "Papa Johns",
    image: require("image!papa-johns"),
    rating: 4},
  {name: "Cheesy Triangles",
    image: require("image!churchill"),
    rating: 5},
]

var {
  Text,
  View,
  Image,
  Modal,
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Animation
} = React

class CardController extends Modal {
  constructor(props) {
    super(props)
    this.state = {}
    this.allCards = []
    this.currentCards = []
    this.nextCardIndex = 0
    this.getAllCards()
  }
  getAllCards () {
    this.allCards = seededCards
    console.log("ALL: ", this.allCards)
    // this.allCards.push(API CALL)
  }

  cardThrown (cardThrown, direction) {
    console.log("HELLOOOOOOO")
    console.log(cardThrown)
    console.log("Direction: ", direction)
    //TODO: Set yes vs no based on direction
    // this.addNextCard(currentCards)
    console.log(cardThrown)
  }
  addNextCard (currentCards) {
    // currentCards.shift()
    // currentCards.push(this.allCards[this.nextCardIndex])
  }

  closeModal () {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: deviceHeight
    }).start(this.props.closeModal)
  }

  render () {
    for (var i = 0; i < 2; i++) {
      this.currentCards.push(this.allCards[this.nextCardIndex])
      this.nextCardIndex++
    }
    console.log("CURRENT CARDS: ", this.currentCards)
    var cardStack = this.currentCards.map((card, i) => {
      return (<Card key={i} cardInfo={card} cardThrown={this.cardThrown.bind(this)}></Card>)
    })
    console.log("CARD STACK: ", cardStack)

    return (
      <View style={styles.cardController}>
        <TouchableHighlight onPress={this.props.closeModal}>
          <Text>Close</Text>
        </TouchableHighlight>
        {cardStack}
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
