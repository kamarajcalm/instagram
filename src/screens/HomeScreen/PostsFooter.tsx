import React, { FC, useEffect, useRef, useState } from "react";

import { View, StyleSheet, Dimensions, Image, Text ,TouchableOpacity, FlatList,FlatListProps} from "react-native";
const { height, width } = Dimensions.get("window");
import {
  Entypo,
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Fontisto,
  Feather,
  Foundation,
} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";

interface PostsFooterProps{
  total:number,
  activeIndex:number
}
const PostsFooter: FC<PostsFooterProps> = ({total,activeIndex}) => {
  const indicatorRef = useRef<FlatList>(null)
  const navigation= useNavigation<any>()
  const [liked,setLiked] = useState(false)
  useEffect(() => {
    if(activeIndex){
  indicatorRef.current?.scrollToIndex({
    index: activeIndex - 1,
    animated: true,
    viewOffset:5
  });
    }
  

  }, [activeIndex]);
  return (
    <View
      style={{
        height: height * 0.05,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 0.3 ,alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
        
          {!liked ? (
            <Animatable.View animation={"zoomIn"}>
              <TouchableOpacity
                onPress={() => {
                  setLiked(!liked);
                }}
              >
                <AntDesign name="hearto" size={20} color="black" />
              </TouchableOpacity>
            </Animatable.View>
          ) : (
            <Animatable.View animation={"bounceIn"}>
              <TouchableOpacity
                onPress={() => {
                  setLiked(!liked);
                }}
              >
                <AntDesign name="heart" size={20} color="red" />
              </TouchableOpacity>
            </Animatable.View>
          )}
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate("CommentScreen");
            }}
          >
            <AntDesign name="message1" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Feather name="send" size={20} color="black" />
          </TouchableOpacity>
        </View>

      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
         <View style={{width:width*0.085,}}>
              <FlatList 
                ref={indicatorRef}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Array(total).fill("p")}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>{
                    let backgroundColor = activeIndex-1==index?"blue":"gray"
                    return(
                      <View style={{height:4,width:4,borderRadius:2,backgroundColor,marginLeft:5}}>

                      </View>
                    )
                }}
              />
         </View>
      </View>
      <View style={{ flex: 0.3 }}>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    height: height * 0.05,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
export default PostsFooter;
