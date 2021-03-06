'use strict'
var React          = require('react-native')
var styles         = require('../style/style.js')
var CardController = require('../cards/CardController.js')
var Friends        = require('../venture/Friends.js')
var InvitedFriends = require('../dashboard/InvitedFriends.js')

// Venture Model
var Venture = require('../models/VentureEvent.js')

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
    answered: 1,
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
    answered: 0,
    choices: [
      {name: "Pizza Hut",
        image: require("image!pizza-hut"),
        rating: 3, location: "1234 Something St. Los Angeles, CA 900123", description: "Greasy, deep-dish Pizza... Mm~"},
      {name: "Dominos",
        image: require("image!dominos"),
        rating: 2, location: "1234 Something St. Los Angeles, CA 900123", description: "Nasty, ugly-ass Pizza. Blech."},
      {name: "Papa Johns",
        image: require("image!papa-johns"),
        rating: 4, location: "1234 Something St. Los Angeles, CA 900123", description: "Greaseless pizza, but that GARLIC SAUCE MM"},
      {name: "Cheesy Triangles",
        image: require("image!churchill"),
        rating: 5, location: "1234 Something St. Los Angeles, CA 900123", description: "Magical triangles that don't do nothing for nobody."},
      {name: "Mickey",
        image: require("image!mickey"),
        rating: 5, location: "1234 Something St. Los Angeles, CA 900123", description: "Mickey Mouse!!"},
    ],
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
  }

  // updateRowsWith(newRow) {
  //   var ds = new ListView.DataSource(
  //     {rowHasChanged:}
  //   )
  // }

  componentWillReceiveProps(nextProps) {
    console.log("PROPS: ", nextProps)
    console.log("WINDOW: ", window.venture)
    if (window.venture) {
      if (ventures.indexOf(window.venture) < 0) {
        ventures.push(window.venture)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(ventures)
        })
      }
    }
    console.log("VENTURES: ", ventures)
  }

  openModal(choices) {
    console.log("CHOICES: ", choices)
    this.passedCards = choices
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

  handlePress(rowData) {
    if(rowData.answered > 0) {
      this.showInvited(rowData)
    } else {
      var choices = rowData.choices
      this.openModal(choices)
    }
  }

  renderRow(rowData, sectionID, rowID) {
    var invited = rowData.people.map(function(person, i){
      if (person) {
        return <Image style={styles.invitedPicture} key={i} source={{ uri: person.picture}}/>
      }
    })

    var checkStatus = function(rowData) {
      if (rowData.answered) return <Text style={styles.answerStatus}>✔Answered</Text>
    }

    return (
      <TouchableHighlight onPress={()=>this.handlePress(rowData)}>
        <View>
          <View style={styles.dashboardCell}>
            <View style={styles.dashRow2}>
              <Text style={styles.date}>Monday, June 5th</Text>
              <Text>{checkStatus(rowData)}</Text>
            </View>
            <View style={styles.dashRow}>
              <Image style={styles.ventureThumb} source={{ uri: 'http://cdn.skim.gs/image/upload/c_fill,h_96,w_96,dpr_1.0/los-angeles-feature' }} />
              <View style={styles.ventureData}>
                <Text style={styles.ventureTitle}>{rowData.title}</Text>
                <Text style={styles.ventureLocation} numberOfLines={1}>@{rowData.location}</Text>
                <Text style={styles.ventureTime}>{rowData.time}</Text>
                <Text style={styles.invited}>Venturists: {rowData.people.length}</Text>
                <View style={styles.venturists}>
                  <View style={styles.imgRow}>{invited}</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  createVenture() {
    this.props.navigator.push({
      title: "Venturists",
      component: Friends,
      passProps: {
        venture: new Venture(
          3, new Date(2016, 3, 15), "John's Dunken Brawl", "Diamond Bar", "18:00", "drinks")
      }
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
        <TouchableHighlight onPress={this.createVenture.bind(this)}>
        <View style={styles.createVenture}>
        <Text style={styles.newventure}>+Venture</Text>
        </View>
        </TouchableHighlight>

        {/* CardController must ALWAYS be at the bottom */}
        {this.state.modal ? <CardController cards={this.passedCards} closeModal={() => this.setState({modal: false}) }></CardController> : null}
      </View>
    )
  };

}

module.exports = Dashboard;
