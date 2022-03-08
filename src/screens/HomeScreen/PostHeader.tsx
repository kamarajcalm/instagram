import React ,{FC} from 'react'

import { View, StyleSheet, Dimensions, Image ,Text} from "react-native";
const { height, width } = Dimensions.get("window");
import {
  Entypo,
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Fontisto,
  Feather,
} from "@expo/vector-icons";
interface PostHeaderProps {
  item: {
    userImage: string;
    userName: string;
    Images: string[];
  };
}
const PostHeader:FC<PostHeaderProps> = ({item})=>{
  return (
    <View style={styles.head}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
        
            style={styles.headImage}
            source={{ uri: item.userImage }}
          />
        </View>
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text>{item.userName}</Text>
        </View>
      </View>
      <View>
        <Entypo name="dots-three-vertical" size={15} color="black" />
      </View>
    </View>
  );
}
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
export default PostHeader;