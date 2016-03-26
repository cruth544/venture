'use strict'
var React   = require('react-native')
var Dashboard = require('../dashboard/Dashboard.js')
var styles  = require('../style/style.js')

var {
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

class LoginController extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  login = () => {
    this.props.navigator.push({
      title: "Dashboard",
      component: Dashboard
    })
  };

  render () {


    return (
      <View>
        <TouchableHighlight style={{marginTop: 70}} onPress={this.login}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = LoginController
