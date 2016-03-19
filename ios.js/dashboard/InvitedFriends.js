'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')

var {
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

class InvitedFriends extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <View style={styles.wrapper}>
        <Text>Hi Everyone</Text>
      </View>
    )
  }

}

module.exports = InvitedFriends;
