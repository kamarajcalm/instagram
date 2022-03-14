import React,{FC} from "react";
import { View, StyleSheet, Platform } from "react-native";

interface shadowProps {
  children:React.ReactNode,
  side:"top"|"bottom"
}
const Shadow: FC<shadowProps> = ({ children, side }) => {
  return (
    <View style={side == "top" ? styles.topShadow : styles.bottomShadow}>
      <View
        style={styles.container}
      >
          {
              children
          }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topShadow: {
    overflow: "hidden",
    paddingTop: 1,
  },
  bottomShadow: {
    overflow: "hidden",
    paddingBottom: 1,
  },
  container: {
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
      },
    }),
  },
});

export default Shadow;
