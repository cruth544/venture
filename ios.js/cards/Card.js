'use strict'

var React      = require('react-native')
var Dimensions = require('Dimensions')
var screenSize = Dimensions.get('window')
var styles     = require('../style/style.js')

var {
  Text,
  View,
  Image,
  Component,
  PanResponder,
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Animated
} = React

const SWIPE_THRESHOLD = 120

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      width: props.width ?
        props.width : (screenSize.width * props.width) * screenSize.scale,
      height: props.height ?
        props.height : (screenSize.height * props.height) * screenSize.scale,
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5)
    }
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

// TODO: Add top and bottom rotation
        // console.log("THIS: ", this.refs)
        // if (evt.nativeEvent.locationY < this.)
        // gestureState.{x,y}0 will be set to zero now
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        })
        this.state.pan.setValue({x: 0, y: 0})
      },
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      // onPanResponderMove: (evt, gestureState) => {
      //   // The most recent move distance is gestureState.move{X,Y}
      //
      //   // The accumulated gesture distance since becoming responder is
      //   // gestureState.d{x,y}
      // },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, {vx, vy}) => {
        console.log("NAME: ", this.props.cardInfo.name)
        function clamp(value, a, b) {
          if (value > a && value < b) return value
          if (value < a) return a
          if (value > b) return b
        }
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.state.pan.flattenOffset();
        var velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          let direction
          this.state.pan.x._value > 0
            ? direction = 'right'
            : direction = 'left'

          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this._removeCard.bind(this, direction))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 10
          }).start()
        }
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
  _resetState() {
    this.state.pan.setValue({x: 0, y: 0})
    // this.state.enter.setValue(0)
    // this._goToNextCard();
    // this._animateEntrance();
  }

  _removeCard(direction) {
    this.props.cardThrown(this, direction)
    console.log("REMOVING")
    // this.props.cardRemoved
    //   ? this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
    //   : null
    delete this
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
    let { pan, enter, } = this.state
    let [translateX, translateY] = [pan.x, pan.y]

    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]})
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]})
    let scale = enter

    let animatedCardstyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity}

    console.log(this.props)

    return (
      <Animated.View style={[styles.cardcontainer, animatedCardstyles]} {...this._panResponder.panHandlers}>
        <View style={[styles.card, {width: 500}, {height: 560}]}>

          <Image source={this.props.cardInfo.image} style={styles.cardImage}/>
        </View>
      </Animated.View>
    )
  }
}

module.exports = Card
