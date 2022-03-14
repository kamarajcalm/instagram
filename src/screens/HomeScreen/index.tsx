import React, { FC, useRef, useState ,useEffect} from "react";
import { View, Text, FlatList, Animated, Platform, TouchableOpacity } from "react-native";
import { dumyData } from "./dumyData";
import Header from "./Header";
import ImagePosts from "./ImagePosts";
import Constants from "expo-constants";
import VideoPosts from "./VideoPosts";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useActions } from "../../hooks/useActions";
type NavigationType = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;
interface HomeScreen extends NavigationType {}
const HomeScreen: FC<HomeScreen> = ({navigation}) => {

  const [currentItem, setCurrentItem] = useState(null);
  const [focus, setFocus] = useState(true);
  const onViewableItemsChanged = React.useCallback(
    (info: { viewableItems: any }): void => {
      const { viewableItems } = info;

      const [viewableItem] = viewableItems;

      if (viewableItem) {
        const { index } = viewableItem;

        setCurrentItem(index);
      }
    },
    []
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setFocus(false);
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setFocus(true);
    });

    return unsubscribe;
  }, [navigation]);
  const separator = ()=>{
    return(
      <View style={{height:1,backgroundColor:"#fafafa"}}>

      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop:Constants.statusBarHeight
      }}
    >
      <StatusBar backgroundColor="#fff"/>
      <Header />
 
      <FlatList
        ItemSeparatorComponent={separator}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        showsVerticalScrollIndicator={false}
        data={dumyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (item.type == "image") {
            return (
              <ImagePosts
                item={item}
          
              />
            );
          }
          return null
          return (
            <VideoPosts
              item={item}
              index={index}
              currentItem={currentItem}
              focus={focus}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
