import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import Drawer from 'react-native-drawer';
import DrawerComponent from '../components/side_drawer/DrawerComponent';

import MainStack from './MainStack';

class AppWithNavigationState extends Component {
  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  render() {
    const drawerMethods = {
      openDrawer: this.openDrawer,
      closeDrawer: this.closeDrawer,
    };
    return (
        <Drawer
          ref={ref => (this.drawer = ref)}
          type="overlay"
          content={<DrawerComponent drawerMethods={drawerMethods} />}
          tapToClose
          openDrawerOffset={0.25}
          panOpenMask={-1}
          tweenHandler={ratio => ({
            main: { opacity: (2 - ratio) / 2 },
          })}
        >
        <MainStack
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navReducer,
          })}
          screenProps={drawerMethods}
        />
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  navReducer: state.navReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);
