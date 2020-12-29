import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from '../components/customSideBarMenu';
import {AppTabNavigator} from '../components/AppNavigator'
import Setting from '../screens/Setting';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Settings:{screen:Setting}
    
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})