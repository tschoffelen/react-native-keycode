/**
 * React Native Keycode
 *
 * This file supports both iOS and Android.
 */

import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types'

export class KeycodeInput extends Component {
  static propTypes = {
    length: PropTypes.number,
    tintColor: PropTypes.string,
    onChange: PropTypes.func,
    onComplete: PropTypes.func,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    numeric: PropTypes.bool,
    value: PropTypes.string,
    style: PropTypes.any,
    ref: PropTypes.func
  }

  static defaultProps = {
    tintColor: '#007AFF',
    length: 4,
    autoFocus: true,
    numeric: false,
    defaultValue: '',
    value: ''
  }

  input = null

  constructor (props) {
    super(props)

    this.state = {
      value: props.defaultValue
    }
  }

  async componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if ('value' in nextProps && nextProps.value !== this.state.value) {
      await this.setState({value: nextProps.value})
    }

    if (this.state.value.length < this.props.length) {
      this.props.autoFocus && this.input.focus()
    } else {
      this.input.blur()
    }
  }

  async _changeText (value) {
    await this.setState({value})

    if (this.props.onChange) {
      await this.props.onChange(this.state.value)
    }

    if (this.state.value.length < this.props.length) {
      return
    }

    if (this.input) {
      this.input.blur()
    }

    if (this.props.onComplete) {
      setTimeout(() => {
        this.props.onComplete(this.state.value)
      }, 250)
    }
  }

  _renderBoxes () {
    let elements = []
    let i = 0
    let vals = this.state.value.split('')
    while (i < this.props.length) {
      let active = i === this.state.value.length
      let barStyles = [styles.bar, active ? [styles.barActive, {backgroundColor: this.props.tintColor}] : []]

      elements.push(
        <View style={styles.box} key={i}>
          <Text style={styles.text}>{vals[i] || ''}</Text>
          <View style={barStyles}/>
        </View>
      )

      i++
    }

    return elements
  }

  render () {
    let keyboardType = this.props.numeric ? 'numeric' : (Platform.OS === 'ios' ? 'ascii-capable' : 'default')

    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          ref={(component) => {
            this.input = component
            if (this.props.ref) {
              this.props.ref(component)
            }
          }}
          style={styles.input}
          autoFocus={this.props.autoFocus}
          autoCorrect={false}
          autoCapitalize='characters'
          value={this.state.value}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          maxLength={this.props.length}
          disableFullscreenUI
          clearButtonMode='never'
          spellCheck={false}
          returnKeyType='go'
          underlineColorAndroid='transparent'
          onChangeText={(text) => this._changeText(text)}
          caretHidden/>

        {this._renderBoxes()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 0,
    height: 0,
    opacity: 0
  },
  box: {
    width: 32,
    marginHorizontal: 5
  },
  bar: {
    backgroundColor: '#CED5DB',
    height: 1,
    width: 32
  },
  barActive: {
    height: 2,
    marginTop: -0.5
  },
  text: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 36,
    height: 36,
    textAlign: 'center',
    width: 32,
    marginBottom: 8
  }
})
