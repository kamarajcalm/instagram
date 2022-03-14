import React ,{FC}from 'react'
import {View,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import { HomeStackParamList } from '../types';
import CommentScreen from '../../screens/comments';
const Stack = createNativeStackNavigator<HomeStackParamList>();
const HomeStack:FC = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack