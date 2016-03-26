'use strict'

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native'

var Dashboard = require("./ios.js/dashboard/Dashboard.js")
var Login     = require("./ios.js/login/LoginController.js")
var styles    = require("./ios.js/style/style.js")

class VentureApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
        title: 'Login',
        component: Login
      }}/>
    )
  }
}

AppRegistry.registerComponent('venture', () => VentureApp);
