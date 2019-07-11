import React from 'react';
import { View, StatusBar } from 'react-native'
import Header from './components/Header'
import Bananas from './components/Bananas'
import ButtonsAndText from './components/ButtonsAndText'
import FlatListStuff from './components/FlatListStuff'
import SectionListBasics from './components/SectionListBasics'
import InfoDisplay from './components/InfoDisplay'

import mainStyles from './styles/main-styles'

/* 
This is the main area where all components are displayed.
-- StatusBar -- sets the color of the native time, battery
life, network connection, etc.
 */

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      listView: false,
      firstButton: true,
      secondButton: true,
      thirdButton: true,
    }
  }

  disableFirstButton = () => {
    this.setState({ firstButton: false })
  }

  render() {
    const { listView, firstButton } = this.state
    return (
      <View style={mainStyles.mainBackground}>

        <StatusBar 
          backgroundColor='white'
          barStyle='light-content'
        />

        <View style={{ flex: 1 }}>
          <Header />

        </View>

        { firstButton && 
        <View style={{ flex: 4 }}>
          <InfoDisplay 
            selectText='OKAY'
            textInfo='This is gonna be the area where you read stuff. It is very important.'
            action={this.disableFirstButton}
          /> 
        </View> }

        { listView && <SectionListBasics /> }

      </View>
    );
  }
}