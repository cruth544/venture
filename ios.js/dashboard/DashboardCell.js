'use strict'
var React = require('react-native')

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  }
})


class DashboardCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    <View style={styles.container}>
      <Text style={styles.text}>{this.props.people}</Text>
      <Text style={styles.text} numberOfLines={1}>{this.props.title}</Text>
    </View>
  }

}

module.exports = DashboardCell;
