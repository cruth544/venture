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
    rating: 3, location: "1234 Something St. Los Angeles, CA 900123", description: "Greasy, deep-dish Pizza... Mm~"},
  {name: "Dominos",
    image: require("image!dominos"),
    rating: 2, location: "1234 Something St. Los Angeles, CA 900123", description: "Nasty, ugly-ass Pizza. Blech."},
  {name: "Papa Johns",
    image: require("image!papa-johns"),
    rating: 4, location: "1234 Something St. Los Angeles, CA 900123", description: "Greaseless pizza, but that GARLIC SAUCE MM"},
  {name: "Cheesy Triangles",
    image: require("image!churchill"),
    rating: 5, location: "1234 Something St. Los Angeles, CA 900123", description: "Magical triangles that don't do nothing for nobody."},
]

var {
  Text,
  View,
  Image,
  Component,
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  Dimensions
} = React

var {
  height: deviceHeight
} = Dimensions.get('window');

class CardController extends Component {
  constructor(props) {
    console.log("CARD CONTROLLER CREATED")
    super(props)
    this.allCards = []
    this.currentCards = []
    this.nextCardIndex = 0
    this.getAllCards()
    this.state ={
      offset: new Animated.Value(deviceHeight)
    }
  }
  getAllCards () {
    this.allCards = this.props.cards
    this.nextCardIndex = 0
    console.log("ALL: ", this.allCards)
    // this.allCards.push(API CALL)
  }

  cardThrown (cardThrown, direction) {
    console.log("HELLOOOOOOO")
    console.log(cardThrown)
    console.log("Direction: ", direction)
    //TODO: Set yes vs no based on direction
    // this.addNextCard(currentCards)
    var cardIndex = this.allCards.indexOf(cardThrown.props.cardInfo)
    this.allCards[cardIndex] = null
    console.log("INDEX: ", cardIndex)
    if (!this.allCards[this.allCards.length - 1]) {
      this.closeModal()
    }
  }
  addNextCard (currentCards) {
    // currentCards.shift()
    // currentCards.push(this.allCards[this.nextCardIndex])
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  }

  closeModal () {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: screenSize.height
    }).start(this.props.closeModal)
  }

  render () {
    for (var i = 0; i < this.allCards.length; i++) {
      this.currentCards.unshift(this.allCards[this.nextCardIndex])
      this.nextCardIndex++
    }
    console.log("CURRENT CARDS: ", this.currentCards)
    var cardStack = this.currentCards.map((card, i) => {
      return (<Card style={{marginTop: 10 + (i*10)}} key={i} cardInfo={card} cardThrown={this.cardThrown.bind(this)}></Card>)
    })
    console.log("CARD STACK: ", cardStack)

    return (
      <Animated.View style={styles.cardController}>
        {cardStack}
        <TouchableOpacity onPress={this.closeModal.bind(this)}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
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
