import React, { FC, useState } from 'react';
import {View,Text, SafeAreaView, TouchableOpacity, Dimensions, FlatList,TextInput,Image} from 'react-native'
import Header from '../../components/Header';
import Constants from 'expo-constants';
import * as Animatable from "react-native-animatable";
import {

  AntDesign,

} from "@expo/vector-icons";
const dataa = [
  {
    img: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "sweet",
    time: "1d",
    like: 1,
    comment: "really good awesome",
    liked: false,
  },
  {
    img: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "sweet",
    time: "1d",
    like: 1,
    comment: "really good awesome",
    liked: false,
  },
  {
    img: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "sweet",
    time: "1d",
    like: 1,
    comment: "really good awesome",
    liked: false,
  },
];
const {height,width} = Dimensions.get("window")
const seperator = ()=>{
    return (
        <View style={{height:1,backgroundColor:"#fafafa"}}>

        </View>
    )
}
const CommentScreen :FC =()=>{
    const [data,setData] = useState(dataa)
    const like = (item:any,index:number)=>{
      let dataa = data
      dataa[index].liked = !dataa[index].liked;
      setData([...dataa])
    }

    return (
      <View
        style={{ marginTop: Constants.statusBarHeight ,flex:1,flexDirection:"column"}}
       
      >
        <Header title="Comments" />
     
          <FlatList 
            style={{backgroundColor:"#fff"}}
            ItemSeparatorComponent={seperator}
            data={data}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>{
                return (
                  <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                    <View
                      style={{
                        flex: 0.2,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{ height: 30, width: 30, borderRadius: 15 }}
                        source={{ uri: item.img }}
                      />
                    </View>
                    <View style={{ flex: 0.6 }}>
                      <View>
                        <Text>{item.name}</Text>
                      </View>
                      <View>
                        <Text>{item.comment}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 0.2 ,alignItems:"center",justifyContent:"center"}}>
                      {!item.liked ? (
                        <Animatable.View animation={"zoomIn"}>
                          <TouchableOpacity
                            onPress={() => {
                              like(item,index)
                            }}
                          >
                            <AntDesign name="hearto" size={15} color="black" />
                          </TouchableOpacity>
                        </Animatable.View>
                      ) : (
                        <Animatable.View animation={"bounceIn"}>
                          <TouchableOpacity
                            onPress={() => {
                            like(item, index);
                            }}
                          >
                            <AntDesign name="heart" size={15} color="red" />
                          </TouchableOpacity>
                        </Animatable.View>
                      )}
                    </View>
                  </View>
                );
            }}
          />
          <View style={{ height:height*0.07, flexDirection: "row",backgroundColor:"#fff"}}>
            <View style={{ flex: 0.7 }}>
              <TextInput 
               style={{flex:1}}
              />
            </View>
            <TouchableOpacity style={{flex:0.3,alignItems:"center",justifyContent:"center"}}>
              <Text style={{ color: "blue" }}>Post</Text>
            </TouchableOpacity>
          </View>
       
      </View>
    );
}



export default CommentScreen