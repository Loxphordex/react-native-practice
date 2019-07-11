import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class InfoDisplay extends React.Component {
  
  render() {
    const { selectText, action, textInfo } = this.props
    return(
      <View style={styles.main}>

        <Text style={styles.info}>
          { textInfo }
        </Text>

        <Button 
          onPress={() => action()}
          title={selectText}
          color='rgb(237, 239, 242)' // Off-White
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(79, 83, 89)',  // Mid-Dark Gray
    minHeight: 200,
    margin: 15,
  },
  info: {
    color: 'rgb(237, 239, 242)',  // Off-White
    backgroundColor: 'rgb(99, 101, 105)',  // Mid-Gray
    minHeight: 60,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})