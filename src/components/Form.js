import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image,
   TextInput,
   TouchableOpacity
} from 'react-native';



export default class Form extends Component<{}> {
	render(){
		return(
			<View    style={styles.container}>
                <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Email'
                placeholderTextColor='white'
                selectionColor='white'
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                placeholderTextColor='white'
                secureTextEntry={true}
                ref={(input) => this.password = input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
              
  			</View>
			)
	 }
 }

 const styles = StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'center',
    alignItems: 'center',
    top: -30
    //backgroundColor: '#E53935'
  },
  
  inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal:16,
      marginVertical: 10
  },
  buttonText: {
      //fontsize:'16',
      fontWeight:'500',
      color:'white',
      textAlign:'center'
     
  },
  button: {
    backgroundColor:'#EF9A9A',
    borderRadius: 25,
    width:300,
    marginVertical: 10,
    paddingVertical: 16
  }
});