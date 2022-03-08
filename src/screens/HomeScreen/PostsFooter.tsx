import React, { FC, useState } from "react";

import { View, StyleSheet, Dimensions, Image, Text ,TouchableOpacity} from "react-native";
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
const PostsFooter: FC = () => {
  const [liked,setLiked] = useState(false)
  return (
    <View style={{ height: height * 0.05 ,justifyContent:"center"}}>
      <View
        style={{ marginLeft: 20, alignItems: "center", flexDirection: "row" }}
      >
        {!liked ? (
          <Animatable.View animation={"fadeIn"}>
            <TouchableOpacity
              onPress={() => {
                setLiked(!liked);
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </Animatable.View>
        ) : (
          <Animatable.View animation={"bounceIn"}>
            <TouchableOpacity
              onPress={() => {
                setLiked(!liked);
              }}
            >
              <AntDesign name="heart" size={24} color="red" />
            </TouchableOpacity>
          </Animatable.View>
        )}
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <AntDesign name="message1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
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
