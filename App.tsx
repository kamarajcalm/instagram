import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigation/Navigator/TabNavigator';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"#fff",marginTop:20}}>
    <NavigationContainer >
      <Stack.Navigator   >
           <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
