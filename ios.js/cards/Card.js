'use strict'

var React = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')

var {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  PanResponder,
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Animation
} = React

const THRESHOLD = 50

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  setPosition (e) {
    this.setState({
      x: this.state.x + (e.nativeEvent.pageX - this.drag.x),
      y: this.state.y + (e.nativeEvent.pageY - this.drag.y)
    })

    this.drag.x = e.nativeEvent.pageX
    this.drag.y = e.nativeEvent.pageY
  }
  resetPostion (e) {
    this.dragging = false
    var thrown = Math.abs(e.nativeEvent.pageX - screenSize.width/2) > THRESHOLD
    // var displayText = left ? 'Released left' : 'Released right'
    if (thrown) {
      var left = e.nativeEvent.pageX < screenSize.width/2
      var direction
      left ? direction = 'left' : direction = 'right'
      this.props.fetchNewCard(this.props.currentCards, direction)
    }
    this.setState({
      x: 0,
      y: 0,
    })
  }

  // Responder
  _onStartShouldSetResponder (e) {
    this.dragging = true
    this.rotateTop = e.nativeEvent.locationY <= 150
    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    }
    return true
  }
  _onMoveShouldSetResponder (e) {
    return true
  }

  // Pan Handler
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.{x,y}0 will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    })
  }


  getRotationDegree (rotateTop, x) {
    var rotation = x / screenSize.width * 100 / 3
    var rotate = rotateTop ? 1 : -1
    var rotateString = (rotation * rotate) + 'deg'

    return rotateString
  }
  getCardStyle () {
    var transform = [
      {translateX: this.state.x},
      {translateY: this.state.y}
    ]
    if (this.dragging) {
      transform.push({rotate:this.getRotationDegree(this.rotateTop, this.state.x)})
    }
    return {transform: transform}
  }

  render () {
    return (
      <TouchableHighlight underlayColor={'aqua'}>
        <View style={[styles.card, this.getCardStyle()]}
          onResponderMove={this.setPosition.bind(this)}
          onResponderRelease={this.resetPostion.bind(this)}
          onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}
          onMoveShouldSetResponder={this._onMoveShouldSetResponder.bind(this)}
          >
          <Image source={require('../../assets/churchill.jpg')} style={styles.cardImage}/>
          <View>
          <Text style={styles.textLeft}>Rabbit, 10</Text>
          <Text style={styles.textRight}>
            1 Connection
          </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

module.exports = Card

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10
  },
  cardImage: {
    height: 260,
    alignItems: 'center'
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
  }
})
