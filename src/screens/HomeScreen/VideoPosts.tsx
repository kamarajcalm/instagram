import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  FlatListProps,
  ViewToken,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");
import {
  Entypo,
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
import PostHeader from "./PostHeader";
import PostsFooter from "./PostsFooter";
import { Video, AVPlaybackStatus } from "expo-av";


interface VideoProps {
  item: {
    userImage: string;
    userName: string;
    video:string;
    Images:string[]
  },
  index:number,
  currentItem:number|null
}
const VideoPosts: FC<VideoProps> = ({ item,currentItem,index }) => {
  const [play,setPlay]= useState(false)
  const videoRef= useRef<Video>(null)

  useEffect(()=>{
    if(currentItem===index){
      videoRef.current?.playAsync()
    }else{
      videoRef.current?.pauseAsync();
    }
   
  },[currentItem,index])
  
  return (
    <View style={styles.container}>
      <PostHeader item={item} />
      <View style={{ flex: 1,backgroundColor:"#000" }}>
        <Video
          ref={videoRef}
          isLooping
          style={{height:"100%",width}}
          source={{
            uri: item.video,
          }}
          
          resizeMode="contain"
 
        />
      </View>
      <PostsFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.6,
  },
});

export default VideoPosts;
