import React, { FC, useState } from "react";
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
import { PinchGestureHandler, State } from "react-native-gesture-handler";
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
import { HomeStackParamList } from "../../Navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface PostProps {
  item: {
    userImage: string;
    userName: string;
    Images: string[];
  };

}
const ImagePosts: FC<PostProps> = ({ item }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const onViewableItemsChanged = React.useCallback(
    (info: { viewableItems: any }): void => {
      const { viewableItems } = info;

      const [viewableItem] = viewableItems;

      if (viewableItem) {
        const { index } = viewableItem;

        setCurrentItem(index + 1);
      }
    },
    []
  );
  return (
    <View style={styles.container}>
      <PostHeader item={item} />
      <FlatList
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal={true}
        data={item.Images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image source={{ uri: item }} style={styles.image} />
            </View>
          );
        }}
      />

      <View style={styles.indicator}>
        <Text style={{ color: "#fff", fontSize: 12, elevation: 5 }}>
          {currentItem}/{item.Images.length}
        </Text>
      </View>
      <PostsFooter total={item.Images.length} activeIndex={currentItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.6,
  },

  image: {
    height: width,
    width: width,
    resizeMode: "cover",
  },
  indicator: {
    position: "absolute",
    top: height * 0.1,
    right: 20,
    backgroundColor: "#333",
    height: height * 0.03,
    borderRadius: 15,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePosts;
