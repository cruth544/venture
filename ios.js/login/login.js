'use strict'
var React = require('react-native')
var styles = require('../style/style.js')
var t = require('tcomb-form-native');

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

var EmailRegister = t.struct({
  email: t.String,
  pdub: t.String
});

var options = {}

class Login extends Component {

  save(){
    console.log("saved")
    database.createUser({
      email    : "testadfasdfasdfasdfa@gmail.com",
      password : 'pw'
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("SCORE!")
      }
    });
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Register through email like a buster</Text>
        <Form ref="form" type={EmailRegister} options={options}/>
        <TouchableHighlight style={styles.detailsButton} onPress={this.save} underlayColor='#99d9f4'>
          <Text style={styles.detailsButtonText}>Register</Text>
        </TouchableHighlight>

        <Text>Login through FBAuth like a Nick</Text>
      </View>
    )
  };

}

module.exports = Login;
