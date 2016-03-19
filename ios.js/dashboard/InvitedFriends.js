'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')

var {
  Image,
  View,
  Text,
  Component
} = React

class InvitedFriends extends Component {

  render(){
    // console.log(this.props.rowData)
    var venture = this.props.rowData
    var friendsName = venture.people.name
    return (
      <View style={styles.wrapper}>
        <Text>{friendsName}</Text>
      </View>
    )
  }

}

module.exports = InvitedFriends;
