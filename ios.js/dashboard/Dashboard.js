'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')
var CardController = require('../cards/CardController.js')

var {
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
                    time: "18:00",
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
          <View style={styles.dashboardCell}>
            <View style={styles.dashRow}>
              <Text>{rowData.time}</Text>
              <Text style={styles.answerStatus}>Answered?</Text>
            </View>
            <View style={styles.dashRow}>
              <Image style={styles.thumb} source={{ uri: 'http://cdn.skim.gs/image/upload/c_fill,h_96,w_96,dpr_1.0/los-angeles-feature' }} />
              <View>
                <Text style={styles.ventureTitle}>{rowData.title}</Text>
                <Text style={styles.ventureTitle} numberOfLines={1}>@{rowData.location}</Text>
              </View>
            </View>
            <View style={styles.dashRow}>
              <Text>{rowData.people.length} Invited</Text>
              <Text style={styles.reviews}>{rowData.reviews.length} Reviews</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <View>
        <CardController
          style={styles.cardLightBox}>
        </CardController>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Venture!
            </Text>
          </View>
        </ListView>
      </View>
    )
  };

}

module.exports = Dashboard;
