'use strict'
var React          = require('react-native')
var CardController = require("../cards/CardController.js")

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


class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.ventures = [
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
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.ventures)
    }
  };

  // renderRow(rowData, sectionID, rowID) {
  //   return (
  //     <TouchableHighlight>
  //       <View>
  //         <View style={styles.separator}/>
  //         <View style={styles.container}>
  //           <Text style={styles.text}>{rowData.people[0]}</Text>
  //           <Text style={styles.text} numberOfLines={1}>{rowData.title}</Text>
  //         </View>
  //         <View style={styles.separator}/>
  //       </View>
  //     </TouchableHighlight>
  //   )
  // };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <CardController></CardController>
          <Text style={styles.welcome}>
            Welcome to Venture!
          </Text>
        </View>
      </View>
    )
  };

}

module.exports = Dashboard;
