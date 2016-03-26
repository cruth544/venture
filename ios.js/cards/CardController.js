'use strict'

// Imports
var React          = require('react-native')

// Custom Classes
var Card           = require('./Card.js')
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
var screenSize = Dimensions.get('window')

class CardController extends Component {
  constructor(props) {
    super(props)
    this.state ={
      cardsInView: this.props.cards.slice(0,3).reverse(),
      nextCard: 3,
      offset: new Animated.Value(deviceHeight)
    }
  }

  cardThrown = (card, direction) => {
    // console.log(card)
    // console.log("Direction: ", direction)
    if (this.state.nextCard >= this.props.cards.length) {
      var flag = true
      // return this.closeModal()
    }
    //TODO: Set yes vs no based on direction

    this.addNextCard(card, flag)
    if (this.state.cardsInView.length < 1) {
      this.closeModal()
    }
  };

  addNextCard = (card, endOfStack) => {
    var currentCards = this.state.cardsInView
    var nextCard = this.state.nextCard
    currentCards.splice(currentCards.indexOf(card.props.cardInfo), 1)
    if (!endOfStack) {
      currentCards.unshift(this.props.cards[nextCard])
      nextCard++
    }
    this.setState({
      cardsInView: currentCards,
      nextCard: nextCard
    })
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
    var cardStack = this.state.cardsInView.map((card, i) => {
      var topCard = false
      if (this.state.nextCard >= this.props.cards.length) {
        topCard = true
      } else if (i === this.state.cardsInView.length - 1) {
        topCard = true
      }
      return (<Card key={i} topCard={topCard} cardInfo={card} cardThrown={this.cardThrown.bind(this)}></Card>)
    })
    console.log("CARD STACK: ", cardStack)

    return (
      <Animated.View style={styles.cardController}>
        {cardStack}
      </Animated.View>
    )
  }
}

module.exports = CardController
