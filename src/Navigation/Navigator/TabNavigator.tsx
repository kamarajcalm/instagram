import React ,{FC}from 'react'
import {View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
 import { Foundation ,Ionicons} from "@expo/vector-icons";
import ProfileStack from '../stacks/ProfileStack';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, TabNavigatorParamList } from '../types';
type Props = NativeStackScreenProps<RootStackParamList, "TabNavigator">;
const Tab = createBottomTabNavigator<TabNavigatorParamList>();
const TabNavigator:FC = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Ionicons name="person-circle" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default TabNavigator