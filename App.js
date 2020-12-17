import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ExchangeScreen from './screens/Exchange';
console. disableYellowBox = true;

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const AppTabNavigator = createBottomTabNavigator({
  Exchange:{
    screen:ExchangeScreen,
    navigationOptions:{
      tabBarIcon:<Image source = {require('./assets/request-list.png')} style = {{width:20,height:20}}/>,
      tabBarLabel:'Exchange items'
    }
  },
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarIcon:<Image source = {require('./assets/request-book.png')} style = {{width:20,height:20}}/>,
      tabBarLabel:'Home'
    }
  }
})
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)