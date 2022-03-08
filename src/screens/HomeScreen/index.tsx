import React ,{FC,useRef, useState}from 'react'
import {View,Text, FlatList,Animated, Platform} from 'react-native'
import { dumyData } from './dumyData'
import Header from './Header'
import ImagePosts from "./ImagePosts";
import Constants from 'expo-constants';
import VideoPosts from './VideoPosts';
const HomeScreen:FC<any> = ({navigation})=>{
  const [currentItem,setCurrentItem] = useState(null)
  const [focus,setFocus] = useState(true)
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
   React.useEffect(() => {
     const unsubscribe = navigation.addListener("blur", () => {
      
       // do something
       setFocus(false)
     });

     return unsubscribe;
   }, [navigation]);
   React.useEffect(() => {
     const unsubscribe = navigation.addListener("focus", () => {
       // do something
       setFocus(true)
     });

     return unsubscribe;
   }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
       
      }}
    >
      <Header />
      <FlatList
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        showsVerticalScrollIndicator={false}
        data={dumyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if (item.type == "image") {
            return <ImagePosts 
            item={item} 
            
            />;
          }
   
          return (
            <VideoPosts item={item} index={index} currentItem={currentItem} focus={focus}/>
          );
        }}
      />
    </View>
  );
}


export default HomeScreen