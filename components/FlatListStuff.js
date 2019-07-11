import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

export default class FlatListStuff extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'first data'},
            {key: 'seconds data'},
            {key: 'third data'}
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{ item.key }</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'center',
  },
})