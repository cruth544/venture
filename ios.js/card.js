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
  ActivityIndicatorIOS,
  Navigator,
  TouchableOpacity,
  Animation
} = React

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

var Card = React.createClass({

  getInitialState () {
    return {
      x: 0,
      y: 0
    }
  },

  setPosition (e) {
    this.setState({
      x: this.state.x + (e.nativeEvent.pageX - this.drag.x),
      y: this.state.y + (e.nativeEvent.pageY - this.drag.y)
    })

    this.drag.x = e.nativeEvent.pageX
    this.drag.y = e.nativeEvent.pageY
  },
  resetPostion (e) {
    this.dragging = false
    var left = e.nativeEvent.pageX < (screenSize.width/2)
    var displayText = left ? 'Released left' : 'Released right'
    this.setState({
      x: 0,
      y: 0,
      lastDragDirection: displayText
    })
  },

  _onStartShouldSetResponder (e) {
    this.dragging = true
    this.rotateTop = e.nativeEvent.locationY <= 150
    this.drag = {
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY
    }
    return true
  },
  _onMoveShouldSetResponder (e) {
    return true
  },

  getRotationDegree (rotateTop, x) {
    var rotation = x / screenSize.width * 100 / 3
    var rotate = rotateTop ? 1 : -1
    var rotateString = (rotation * rotate) + 'deg'

    return rotateString
  },
  getCardStyle () {
    var transform = [
      {translateX: this.state.x},
      {translateY: this.state.y}
    ]
    if (this.dragging) {
      transform.push({rotate:this.getRotationDegree(this.rotateTop, this.state.x)})
    }
    return {transform: transform}
  },

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.card, this.getCardStyle()]}
        onResponderMove={this.setPosition}
        onResponderRelease={this.resetPostion}
        onStartShouldSetResponder={this._onStartShouldSetResponder}
        onMoveShouldSetResponder={this._onMoveShouldSetResponder}
        >
        <Image source={require('../assets/churchill.jpg')} style={styles.cardImage}/>
          <View>
          <Text style={styles.textLeft}>Rabbit, 10</Text>
          <Text style={styles.textRight}>1 Connection</Text>
          </View>
        </View>
        <Text>{this.state.lastDragDirection}</Text>
      </View>
    )
  }
})

module.exports = Card
