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
    var friends = venture.people.map(function(friend, i){
      return <Text key={i}>{friend.name}</Text>
    })
    console.log(friends);
    return (
      <View style={styles.wrapper}>
        {friends}
      </View>
    )
  }

}

module.exports = InvitedFriends;
