import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import Routes from './Routes';

class Main extends Component<{}> {

	render() {
    const {authData} = this.props;
		return(
      <View style={styles.container}>
       
        <Routes isLoggedIn={authData ? authData.isLoggedIn: false} />
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Main)
