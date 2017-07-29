import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomIcon from '../customIcon/CustomIcon';

const styles = StyleSheet.create({
  rightIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});

class RightIconComponent extends React.Component {
  constructor() {
    super();
    this.pressIcon = this.pressIcon.bind(this);
  }

  pressIcon() {}

  render() {
    const { name, color } = this.props;

    return (
      <TouchableOpacity style={styles.rightIcon} onPress={this.pressIcon}>
        <CustomIcon name={name} color={color} />
      </TouchableOpacity>
    );
  }
}

export default RightIconComponent;
