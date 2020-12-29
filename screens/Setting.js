import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableOpacity,TextInput, Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import { registerCustomIconType } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config'
export default class Setting extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId:'',
            isModalVisible:false,
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
        }
    }
    updateData(){
        var user = firebase.auth().currentUser
        var email = firebase.auth().currentUser.email
        db.collection('users').where('emailId','==',email).get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                var data = doc.data()
                this.setState({
                    emailId:data.emailId,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    address:data.address,
                    contact:data.contact,
                })
            })
        })
    }
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
               <MyHeader title = {'Settings'}/>
               <View style = {{flex:1,width:'100%',alignItems:'center'}}>
               <TextInput style = {styles.formTextInput} placeholder = {'First Name'} maxLength = {8} value = {this.state.firstName} onChangeText = {(text)=>{
                   this.setState({
                     firstName:text
                   })
               }}/>
                <TextInput style = {styles.formTextInput} placeholder = {'Last Name'} maxLength = {8} value = {this.state.lastName} onChangeText = {(text)=>{
                   this.setState({
                    lastName:text
                   })
               }}/>
                <TextInput style = {styles.formTextInput} placeholder = {'Contact'} maxLength = {10} value = {this.state.contact} onChangeText = {(text)=>{
                   this.setState({
                     contact:text
                   })
               }} keyboardType = {'numeric'}/>
                <TextInput style = {styles.formTextInput} placeholder = {'Address'} multiline = {true} value = {this.state.address} onChangeText = {(text)=>{
                   this.setState({
                    address:text
                   })
               }}/>
                <TextInput style = {styles.formTextInput} placeholder = {'abc@example.com'}  value = {this.state.emailId} onChangeText = {(text)=>{
                   this.setState({
                     emailId:text
                   })
               }} keyboardType = {'email-address'}/>
               <View style = {styles.modalBackButton}>
                 <TouchableOpacity style = {styles.registerButton} onPress = {()=>{
                   this.updateData();
                 }}>
                   <Text style = {styles.registerButtonText}>
                    Save
                   </Text>
                 </TouchableOpacity>
               </View>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })