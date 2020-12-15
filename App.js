import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
console. disableYellowBox = true;

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Welcome/>
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
  container: { flex: 1,  backgroundColor:'#F8BE85', alignItems: 'center', justifyContent: 'center', }, });