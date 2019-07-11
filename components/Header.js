import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>{ 'Header' }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  textStyle: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
  },
})