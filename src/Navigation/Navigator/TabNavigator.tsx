import React ,{FC}from 'react'
import {View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
 import { Foundation } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabNavigator:FC = ()=>{
  return(
    <Tab.Navigator >
        <Tab.Screen name="HomeStack" component={HomeStack}  options={{headerShown:false,tabBarLabel:"",tabBarIcon:()=><Foundation name="home" size={24} color="black" />}} />
      </Tab.Navigator>
  )
}


export default TabNavigator