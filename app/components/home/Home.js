import React from 'react';
import { View, Text } from 'react-native';
import LeftIconComponent from '../header/LeftIconComponent';

class Home extends React.Component {
  static navigationOptions = (navigation) => ({
    headerTitle: 'Home Screen',
    headerLeft: <LeftIconComponent {...navigation} />
  })

  render () {
    return(
      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <Text style={{fontSize: 20}}>Home Screen</Text>
      </View>
    )
  }
}

export default Home;
