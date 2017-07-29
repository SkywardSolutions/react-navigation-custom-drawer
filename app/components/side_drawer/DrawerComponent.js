import React, { PropTypes } from 'react';
import {
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
  Image,
  ListView,
} from 'react-native';
import styles from './style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.pressLink = this.pressLink.bind(this);
  }

  closeDrawer() {
    this.props.drawerMethods.closeDrawer();
  }

  pressLink(screen) {
    this.props.navigate(screen);
    this.props.drawerMethods.closeDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeContainer} onPress={this.closeDrawer}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => this.pressLink('Home')}>
            <Text style={styles.menus}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressLink('About')}>
            <Text style={styles.menus}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    navReducer: state.navReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
