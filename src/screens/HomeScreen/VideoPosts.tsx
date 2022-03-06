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
  const [mute,setMute] = useState(false)
  const [status,setStatus] = useState<any>()
  const videoRef= useRef<Video>(null)
  const  milliconverter = (millis:number) => {
      if (millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds:any = ((millis % 60000) / 1000).toFixed();
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      }
    };
  useEffect(()=>{

    if(currentItem===index){
      videoRef.current?.playAsync()
    }else{
      videoRef.current?.pauseAsync();
    }
   
  },[currentItem,index])
  const onPlaybackStatusUpdate =(status:any)=>{
     setStatus(status);
  }
  return (
    <View style={styles.container}>
      <PostHeader item={item} />
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <Video
          isMuted={mute}
          ref={videoRef}
          isLooping
          style={{ height: "100%", width }}
          source={{
            uri: item.video,
          }}
          resizeMode="cover"
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
        <TouchableOpacity
          onPress={() => setMute(!mute)}
          style={{
            position: "absolute",
            bottom: 20,
            borderRadius: 10,
            height: 20,
            width: 20,
            backgroundColor: "#fff",
            right: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather
            name={mute ? "volume-x" : "volume-2"}
            size={10}
            color="black"
          />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <Text style={{ color: "#fff" }}>
            {milliconverter(status?.positionMillis)||"0:00"}/
            {milliconverter(status?.playableDurationMillis)}
          </Text>
        </View>
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
