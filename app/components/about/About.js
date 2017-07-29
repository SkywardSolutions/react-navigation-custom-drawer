import React from 'react';
import { View, Text } from 'react-native';

class About extends React.Component {
  render () {
    return(
      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <Text style={{fontSize: 20}}>About Screen</Text>
      </View>
    )
  }
}

export default About;
