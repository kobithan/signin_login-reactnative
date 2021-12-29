import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';


export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
			<Image 
            style={{width:210, height:70}}
            source={require('../components/images/logo.png')}/>
            <Text style={{fontSize:14}}>Welcome to huex</Text>
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems: 'center',
 
  },
  logoText : {
  	marginVertical: 30,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});



