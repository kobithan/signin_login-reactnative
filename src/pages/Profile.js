import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable
} from 'react-native';


import {connect} from "react-redux";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {logoutUser} from "../actions/auth.actions";

const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flexGrow: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  textStyle: {
      color: "#fff",
      fontSize: 18
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 60,
    alignItems: "center",
    shadowColor: "#000",
    
    shadowOffset: {
      width: 9,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 9,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold'
  },
  linearGradient: {
    //flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

class Profile extends Component<{}> {

  logoutUser = () => {
      this.props.dispatch(logoutUser());
  }

  

	render() {
    
    const {getUser: {userDetails}} = this.props;

		return(
			<View style={styles.container}>
			     <View style={styles.centeredView}>
          
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
         
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
           
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Feather 
                    name="check-circle"
                    color="green"
                    size={30}/>
              <Text style={styles.modalText}> <Text>successfully signin{userDetails.name}</Text></Text>
              <TouchableOpacity  onPress={this.logoutUser} >
              <LinearGradient colors={['#074603', '#52eb09', '#0bf54b']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>Log out</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
       
      </View>
			</View>
			)
	}
}

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
