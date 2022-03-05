import React, { FC } from "react";

import { View, StyleSheet, Dimensions, Image, Text ,TouchableOpacity} from "react-native";
const { height, width } = Dimensions.get("window");
import {
  Entypo,
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Fontisto,
  Feather,
} from "@expo/vector-icons";

const PostsFooter: FC = () => {
  return (
    <View style={{height:height*0.05,justifyContent:"center"}}>
      <View
        style={{ marginLeft: 20, alignItems: "center", flexDirection: "row" }}
      >
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Fontisto name="comment" size={24} color="black" />
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
