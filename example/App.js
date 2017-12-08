import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { KeycodeInput } from 'react-native-keycode'

export default class App extends Component {
  state = {
    value: ''
  }

  render () {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Enter your access code.</Text>

        <KeycodeInput
          value={this.state.value}
          onChange={(value) => this.setState({value})}
          onComplete={(value) => {
            alert('Completed! Value: ' + value)
          }}/>

        <View style={styles.button}>
          <Button
            color='#9b9b9b'
            title='Set value'
            onPress={() => this.setState({value: '3F'})}/>
          <Button
            color='#9b9b9b'
            title='Reset value'
            onPress={() => this.setState({value: ''})}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 200
  },
  text: {
    fontSize: 18,
    marginBottom: 32
  },
  button: {
    marginTop: 96
  }
})
