import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ExchangeScreen from './screens/Exchange';
console. disableYellowBox = true;
import {AppTabNavigator} from './components/AppNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)