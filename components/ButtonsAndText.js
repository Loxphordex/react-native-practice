import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';

export default class ButtonsAndText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{ 
          flex: 1, 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>

          <View style={{ flex: 2, backgroundColor: 'powderblue' }}>
            <TextInput 
              style={{ height: 40 }}
              placeholder='type some stuff here'
              onChangeText={(text) => this.setState({ text })}
              style={styles.centered}
            />
          </View>
          
          <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <Button 
              title='Button'
              style={styles.centered}
              onPress={() => {
                Alert.alert('You pressed the button')
              }}
            />
          </View>
          <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'orange',
  },
  centered: {
    margin: 'auto',
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});