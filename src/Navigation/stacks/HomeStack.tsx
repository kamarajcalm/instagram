import React ,{FC}from 'react'
import {View,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
const Stack = createNativeStackNavigator();
const HomeStack:FC = ()=>{
  return(
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false,}}/>
      </Stack.Navigator>
  )
}


export default HomeStack