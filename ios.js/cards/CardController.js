'use strict'

// Imports
var React = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')

// Custom Classes
var Card = require('./Card.js')
var styles         = require('../style/style.js')

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
    super(props)
    this.allCards = []
    this.nextCardIndex = 3
    this.getAllCards()
    this.state ={
      cardsInView: this.allCards.slice(0,3).reverse(),
      offset: new Animated.Value(deviceHeight)
    }
  }

  getAllCards = () => {
    this.allCards = this.props.cards
    // this.nextCardIndex = 0
    console.log("ALL: ", this.allCards)
    // this.allCards.push(API CALL)
  };

  cardThrown = (card, direction) => {
    console.log(card)
    console.log("Direction: ", direction)
    if (this.nextCardIndex >= this.allCards.length) {
      return this.closeModal()
    }
    //TODO: Set yes vs no based on direction
    this.addNextCard()
  };

  addNextCard = () => {
    var currentCards = this.state.cardsInView
    currentCards.pop()
    currentCards.unshift(this.allCards[this.nextCardIndex])
    this.nextCardIndex++
    this.setState({cardsInView: currentCards})
  };

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: 0
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.offset, {
      duration: 100,
      toValue: screenSize.height
    }).start(this.props.closeModal)
  };

  render () {
    // for (var i = 0; i < this.allCards.length; i++) {
    //   this.currentCards.unshift(this.allCards[this.nextCardIndex])
    //   this.nextCardIndex++
    // }
    var cardStack = this.state.cardsInView.map((card, i) => {
      return (<Card key={i} cardInfo={card} cardThrown={this.cardThrown.bind(this)}></Card>)
    })
    console.log("CARD STACK: ", cardStack)

    return (
      <Animated.View style={styles.cardController}>
        {cardStack}
        <TouchableOpacity onPress={this.closeModal}>
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
