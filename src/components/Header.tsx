import React ,{FC, useState}from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Shadow from "./Shadow";
const {height,width} = Dimensions.get("window");

interface HeaderProps{
  title:string
}
const Header: FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation()
  const [rippleColor,setRippleColor]= useState("gray");
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <Shadow side={"bottom"}>
      <View style={styles.main}>
        <TouchableNativeFeedback
          onPress={() => {
            setRippleColor(rippleColor);
            navigation.goBack();
             setRippleOverflow(!rippleOverflow);
          }}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            rippleOverflow
          )}
        >
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </TouchableNativeFeedback>
        <View
          style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{title}</Text>
        </View>
        <View
          style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
        ></View>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  main: {
    height: height * 0.07,
    backgroundColor: "#fff",
    flexDirection: "row",

  },
});
export default Header;