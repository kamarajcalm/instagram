import React ,{FC}from 'react'
import {View,Text,StyleSheet, Dimensions} from 'react-native'
import Shadow from '../../components/Shadow'
 const { height,width}  = Dimensions.get("window")
const Header:FC = ()=>{
  return (
    <Shadow 
     side={"bottom"}
    >
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>HOME</Text>
        </View>
        <View></View>
      </View>
    </Shadow>
  );
}

const styles =StyleSheet.create({
    container:{
       height:height*0.08,
       backgroundColor:"#fff",
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:20,
       
    }
})

export default Header