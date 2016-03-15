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

class VentureApp extends Component {
  render() {
    return (
      <NavigatorIOS initialRoute={{
        title: 'Dashboard',
        component: Dashboard,
      }}/>
    )
  }
}

AppRegistry.registerComponent('venture', () => VentureApp);
