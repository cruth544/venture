'use strict'
var React   = require('react-native')
var Dashboard = require('../dashboard/Dashboard.js')
var styles  = require('../style/style.js')
var FBLogin = require('react-native-facebook-login');


var {
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

var Login = React.createClass({
  render: function() {
    return (
      <FBLogin />
    );
  }
})

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
      <View style={{marginTop: 70}}>
        <Login></Login>
      </View>
    )
  }
}

module.exports = LoginController
