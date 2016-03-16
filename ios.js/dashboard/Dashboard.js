'use strict'
var React          = require('react-native')
var styles         = require("./style/style.js")
var CardController = require('../cards/CardController.js')

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

var ventures = [
                  {
                    id: 1,
                    date: new Date(2016, 1, 15),
                    title: "La's Birthday Party",
                    people: ["Chad", "Nick", "John"],
                    location: "The Roosevelt",
                    time: "15:00",
                    category: "Food",
                    reviews: [],
                    pictures: []
                  },
                  {
                    id: 2,
                    date: Date.now(),
                    title: "Chad's Beer Party",
                    people: ["La", "Nick", "John"],
                    location: "GA DTLA",
                    time: "15:00",
                    category: "Food",
                    reviews: [],
                    pictures: []
                  },
                ]

class Dashboard extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(ventures)
    }
  };

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <Text style={styles.text}>{rowData.people[0]}</Text>
            <Text style={styles.text} numberOfLines={1}>{rowData.title}</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}>
        <View style={styles.container}>
          <CardController></CardController>
          <Text style={styles.welcome}>
            Welcome to Venture!
          </Text>
        </View>
      </ListView>
    )
  };

}

module.exports = Dashboard;
