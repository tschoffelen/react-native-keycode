# React Native Keycode

Show the user a input form for a fixed-length code or password.

<table><tr><td>
    <img src="./screenshot.png" height="320" />
</td></tr></table>


## Installation

```
npm i -S react-native-keycode         # or: yarn add react-native-keycode
```


## Usage

```
// import statement:
import { KeycodeInput } from 'react-native-keycode'

// in your render function:
<KeycodeInput
  onComplete={(value) => {
    alert(value)
  }}
/>
```

### Complete example
View a more complex example here: [example/App.js](example/App.js).

### Props
* number `length`: number of characters in input (default: 4)
* string `textColor`: color string for the color of the characters (default: black)
* string `tintColor`: color string for the color of the active bottom bar (default: iOS blue)
* string `defaultValue`: default ''
* string `value`: default ''
* boolean `uppercase`: default true
* boolean `autoFocus`: default true
* boolean `alphaNumeric`: default true, set to false to allow other characters than 0-9, A-Z
* boolean `numberic`: default false
* object `style`
* function `onComplete`
* function `onChange`
* function `ref`


## Authors

This library is developed by [Includable](https://includable.com/), a creative app and web platform
development agency based in Amsterdam, The Netherlands.

* Thomas Schoffelen, [@tschoffelen](https://twitter.com/tschoffelen)
