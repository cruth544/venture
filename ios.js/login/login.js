'use strict'
var React = require('react-native')
var styles = require('../style/style.js')
var t = require('tcomb-form-native');

var Dashboard = require("../dashboard/Dashboard.js")


var Firebase = require('firebase');
var database = new Firebase("https://ventureus.firebaseio.com/");

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React

var Form = t.form.Form;

var EmailLogin = t.struct({
  email: t.String,
  pdub: t.String
});

var options = {}

class Login extends Component {

  constructor(props) {
    super(props)
    // var ds = new ListView.DataSource(
    //   {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      modal: false,
      // dataSource: ds.cloneWithRows(ventures)
    }
  }

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


  save(email, pw){
    console.log("save method")
    database.authWithPassword({
      email    : "npcastaneda@gmail.com",
      password : 'pw'
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("uID: " + authData.uid);
        console.log("Token: " + authData.token);
      }
    });
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Register through email like a buster</Text>
        <Form ref="form" type={EmailLogin} options={options}/>
        <TouchableHighlight style={styles.detailsButton} onPress={this.save} underlayColor='#99d9f4'>
          <Text style={styles.detailsButtonText}>Register</Text>
        </TouchableHighlight>

        <Text>Login through FBAuth like a Nick</Text>
      </View>
    )
  };

}

module.exports = Login;
