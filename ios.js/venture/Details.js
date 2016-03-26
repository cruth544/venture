'use strict'
var React = require('react-native')
var t = require('tcomb-form-native');
var styles = require('../style/style.js')

var Form = t.form.Form;

var EventTypes = t.enums({
  Restaurant: 'Restaurant',
  Cafe: 'Cafe',
  Bar: 'Bar',
  Club: 'Club',
  Cafe: 'Cafe',
  Outing: 'Outing'
})

// Define your domain model
var Event = t.struct({
  category: t.String,
  details: t.maybe(t.String),
  location: t.maybe(t.Number),
  date: t.Date
});

var options = {
  fields: {
    location: {
      label: 'Zip Code (Defaults to current location)' // <= label for the name field
    }
  }
};


var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React


class CreateDetails extends Component {

  create = () => {
    console.log(this.props.venture)
    window.venture = this.props.venture
    this.props.venture.choices = this.send()
    this.props.navigator.popToTop({
      passProps: {
        venture: this.props.venture
      }
    })
  };

  async send() {
    fetch('http://venture-api.herokuapp.com/api/yelp/search', {
      method: 'POST',
      body: JSON.stringify({
        'term' : 'Korean',
        'category' : 'Restaurant',
        'location' : '90017',
        'limit' : '10',
      })
    }).then((res) => {
      var data = JSON.parse(res._bodyInit)
      var ventures = data.ventures
      console.log('API RESULT :', ventures)
      return ventures
    }).catch((err) => {
      console.log('API ERROR :', err)
    })
  }

  render(){
    return (
      <View style={styles.detailsContainer}>
        <Form
          ref="form"
          type={Event}
          options={options}/>
        <TouchableHighlight style={styles.detailsButton} onPress={this.create} underlayColor='#99d9f4'>
          <Text style={styles.detailsButtonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

module.exports = CreateDetails;
