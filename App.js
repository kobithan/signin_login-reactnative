import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image,
   LogBox 
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/Routes';
import store from './src/config/Store'
import Main from './src/Main'
import persist from './src/config/Store'


//LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const persistStore = persist();

export default class App extends Component<Props> {
	render(){
		return(
      <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
			   <View style={{ flex: 1 }}>
             <Main />
  			</View>
        </PersistGate>
        </Provider>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#E53935'
  },
  logoText : {
  	marginVertical: 30,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});