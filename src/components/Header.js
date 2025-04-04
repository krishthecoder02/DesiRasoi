import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
        <FontAwesome
          name="arrow-left"
          size={20}
          color="#fff"
          style={styles.fontAwesome}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D84040",
    height: wp(25),
    flexDirection: "row",
  },
  text: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "#f2f2f2",
    top: wp(15),
    left: wp(30),
  },
  fontAwesome: {
    top: wp(16),
    left: wp(5),
  },
});
