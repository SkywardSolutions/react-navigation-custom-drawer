import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});

class LeftIconComponent extends React.Component {
  constructor() {
    super();
    this.pressMenu = this.pressMenu.bind(this);
  }

  pressMenu() {
    this.props.screenProps.openDrawer();
  }

  render() {
    return (
      <TouchableOpacity style={styles.menuIcon} onPress={this.pressMenu}>
        <Image source={require('../../assets/images/mobile_menu.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20}} />
      </TouchableOpacity>
    );
  }
}

export default LeftIconComponent;
