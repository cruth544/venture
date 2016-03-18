'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')
var CardController = require('../cards/CardController.js')
var Friends        = require('../venture/Friends.js')

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
      modal: false,
      dataSource: ds.cloneWithRows(ventures)
    }
  };

  openModal() {
    console.log("OPENNNNN")
    this.setState({
      modal: true
    })
  };

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.dashboardCell}>
            <View style={styles.dashRow}>
              <Text style={styles.time}>{rowData.time}</Text>
              <Text style={styles.answerStatus}>Answered?</Text>
            </View>
            <View style={styles.dashRow}>
              <Image style={styles.ventureThumb} source={{ uri: 'http://cdn.skim.gs/image/upload/c_fill,h_96,w_96,dpr_1.0/los-angeles-feature' }} />
              <View>
                <Text style={styles.ventureTitle}>{rowData.title}</Text>
                <Text style={styles.ventureTitle} numberOfLines={1}>@{rowData.location}</Text>
              </View>
            </View>
            <View style={styles.dashRow}>
              <TouchableHighlight onPress={}>
                <Text>{rowData.people.length} Invited</Text>
              </TouchableHighlight>
              <Text style={styles.reviews}>{rowData.reviews.length} Reviews</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  createVenture() {
    this.props.navigator.push({
      title: "Choose Your Friends",
      component: Friends
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.separator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to Venture!
            </Text>
          </View>
        </ListView>
        <TouchableHighlight onPress={this.openModal.bind(this)}>
          <Text>Open</Text>
        </TouchableHighlight>
        {this.state.modal ? <CardController closeModal={() => this.setState({modal: false}) }></CardController> : null}
        <TouchableHighlight onPress={this.createVenture.bind(this)}>
          <View style={styles.createVenture}>
            <Text style={styles.newventure}>New!</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  };

}

module.exports = Dashboard;
