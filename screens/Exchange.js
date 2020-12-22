import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableOpacity,TextInput} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';



export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            itemName:'',
            description:'',
            userId:firebase.auth().currentUser.email
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
      }
      addRequest=(bookName,reasonToRequest)=>{
          var userId = this.state.userId;
          var randomRequestId = this.createUniqueId();
          db.collection('requestedBooks').add({
              userId:userId,
              bookName:bookName,
              reasonToRequest:reasonToRequest,
              requestId:randomRequestId
          })
          this.setState({
              bookName:'',
              reasonToRequest:''
          })
          return Alert.alert('Book requested')
      }
    render() {
        return(
            <View style = {{flex:1}}>
                <MyHeader title = {'Add Item'}/>
                <KeyboardAvoidingView style = {styles.keyBoardStyle}>
                   <TextInput style = {styles.formTextInput} placeholder = {'Item Name'} onChangeText = {(text)=>{
                    this.setState({
                        itemName:text
                    })
                   }}/>
                    <TextInput style = {styles.formTextInput} placeholder = {'Description'} onChangeText = {(text)=>{
                    this.setState({
                        description:text
                    })
                   }}/>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{
                        this.addRequest(this.state.bookName,this.state.reasonToRequest)
                    }}>
                       <Text>
                           Exchange
                       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  