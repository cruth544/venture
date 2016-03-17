'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

const styles = StyleSheet.create({
  thumb: {
    width: 58,
    height: 58,
    marginRight: 20,
    borderRadius: 29,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#f7f7f7',
    borderWidth: 0.1,
    borderColor: '#f9f9f9'
  },
    separator2: {
    height: 1,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#f9f9f9',
    flex: 2
  },
  title: {
    fontSize: 12,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  text: {
    fontSize: 17,
    color: '#e54747'
  },
  heading: {
    paddingTop: 3,
    paddingLeft: 25,
    paddingBottom: 3,
    fontSize: 15,
    color: '#0099ff',
    borderColor: '#0099ff',
    borderWidth: 0.1,
  },
  container: {
    flexDirection: 'column',
    flex: 1
  }
});

var friend = [
  {
    id: 1,
    name: "Brendan Kim",
    picture: {thumbnail: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/10259230_10152179779379580_958690940902267564_o.jpg'}
  },
  {
    id: 2,
    name: "James Choi",
    picture: {thumbnail: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10978536_10155139961450142_5475285054787514820_n.jpg?oh=598c12b168019c7a7a3b9b26217cd992&oe=5796EB5D'}
  },

  {
    id: 3,
    name: "La Baik",
    picture: {thumbnail: 'http://baik.la/images/la_baik.png'}
  },

  {
    id: 4,
    name: "Nick Castenada",
    picture: {thumbnail: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/923477_10202392876877204_972724843_n.jpg?oh=984cb5b274707fc2f5de21b82fc41564&oe=579395EE'}
  },

  {
    id: 5,
    name: "Chad Rutherford",
    picture: {thumbnail: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12049166_10153024171810378_7102802117333495420_n.jpg?oh=3a47baf8b52a9c4d8223f037ef212bb6&oe=5751A8D3'}
  },
  {
    id: 6,
    name: "Gamaur Landrum",
    picture: {thumbnail: 'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12509294_10153967047666458_2093129242731861501_n.jpg?oh=d6f2b1adfef432833f6e3e8a4774b13f&oe=574FF5D7'}
  },
  {
    id: 7,
    name: "John Kwak",
    picture: {thumbnail: 'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/11828779_10206328166376389_2492425211872988089_n.jpg?oh=ff5c5e1c5a9fbb567513734f290cf337&oe=57530ACA'}
  },
  {
    id: 8,
    name: "Fran Budiman",
    picture: {thumbnail: 'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/12348015_10153091633032470_2124804016743046236_n.jpg?oh=388ec09f8bd76a3b7773b1d0aa8fbc06&oe=57563254'}
  }
]


class Friends extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: dataSource.cloneWithRows(friend)
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.friend)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: rowData.picture.thumbnail}} />
              <View style={styles.textContainer}>
              <Text style={styles.text}>{rowData.name}</Text>
              </View>
          </View>
          <View style={styles.separator2}/>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.separator}/>
      <Text style={styles.heading}>Favorites</Text>
      <View style={styles.separator}/>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
        <View style={styles.separator}/>
      <Text style={styles.heading}>Friends</Text>
      <View style={styles.separator}/>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }

}

module.exports = Friends;
