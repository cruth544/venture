'use strict'
var React = require('react-native')
var styles = require('../style/style.js')
var t = require('tcomb-form-native');

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
    console.log(this.props.venture)
    // // window.venture = this.props.venture
    // this.props.navigator.popToTop({
    //   passProps: {
    //     venture: this.props.venture
    //   }
    // });
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Register through email like a buster</Text>
        <Form ref="form" type={EmailRegister} options={options}/>
        <TouchableHighlight style={styles.detailsButton} onPress={this.save.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.detailsButtonText}>Register</Text>
        </TouchableHighlight>

        <Text>Login through FBAuth like a Nick</Text>
      </View>
    )
  };

}

module.exports = Login;
