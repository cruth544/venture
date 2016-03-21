'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')
var CardController = require('../cards/CardController.js')
var Friends        = require('../venture/Friends.js')
var InvitedFriends = require('../dashboard/InvitedFriends.js')

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
    people: [
      {name: "Chad",
       picture: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/10259230_10152179779379580_958690940902267564_o.jpg'},
      {name: "Nick",
       picture: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/923477_10202392876877204_972724843_n.jpg?oh=984cb5b274707fc2f5de21b82fc41564&oe=579395EE'},
      {name: "John",
       picture: 'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/11828779_10206328166376389_2492425211872988089_n.jpg?oh=ff5c5e1c5a9fbb567513734f290cf337&oe=57530ACA'}
      ],
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
    people: [
      {name: "Chad",
       picture: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/10259230_10152179779379580_958690940902267564_o.jpg'},
      {name: "Nick",
       picture: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/923477_10202392876877204_972724843_n.jpg?oh=984cb5b274707fc2f5de21b82fc41564&oe=579395EE'},
      {name: "John",
       picture: 'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/11828779_10206328166376389_2492425211872988089_n.jpg?oh=ff5c5e1c5a9fbb567513734f290cf337&oe=57530ACA'}
      ],
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
    this.setState({
      modal: true
    })
  };

  showInvited(rowData) {
    // console.log(rowData);
    this.props.navigator.push({
      title: rowData.title,
      component: InvitedFriends,
      passProps: {rowData}
    });
  }

  renderRow(rowData, sectionID, rowID) {
    var invited = rowData.people.map(function(person, i){
      return <Image style={styles.invitedPicture} key={i} source={{ uri: person.picture}}/>
    })

    return (
      <TouchableHighlight>
        <View>
          <View style={styles.dashboardCell}>
            <View style={styles.dashRow}>
              <Text>{rowData.time}</Text>
              <Text style={styles.answerStatus}>✔Answered</Text>
            </View>
            <View style={styles.dashRow}>
              <Image style={styles.ventureThumb} source={{ uri: 'http://cdn.skim.gs/image/upload/c_fill,h_96,w_96,dpr_1.0/los-angeles-feature' }} />
              <View>
                <Text style={styles.ventureTitle}>{rowData.title}</Text>
                <Text style={styles.ventureTitle} numberOfLines={1}>@{rowData.location}</Text>
              </View>
            </View>
              <View style={styles.BottomRow}>
              <TouchableHighlight onPress={()=>this.showInvited(rowData)}>
                <View>
                  <Text>Invited {rowData.people.length}</Text>
                  <View style={styles.imgRow}>{invited}</View>
                </View>
              </TouchableHighlight>
                <Text style={styles.reviews}>Reviews {rowData.reviews.length}</Text>
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
        <TouchableHighlight onPress={this.createVenture.bind(this)}>
        <View style={styles.createVenture}>
        <Text>New Venture</Text>
        </View>
        </TouchableHighlight>

        {/* CardController must ALWAYS be at the bottom */}
        {this.state.modal ? <CardController closeModal={() => this.setState({modal: false}) }></CardController> : null}
      </View>
    )
  };

}

module.exports = Dashboard;
