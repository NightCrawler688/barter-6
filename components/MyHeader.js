import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

const MyHeader = (props)=>{
return(
<Header centerComponent = {{text:props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:'bold'}}} backgroundColor = {'#eaf8fe'}/>
)
}
export default MyHeader

