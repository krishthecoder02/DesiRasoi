import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Nasta = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        नाश्ता <Text style={{ fontSize: 16 }}>(हालके भोजन के लिए)</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: wp(5),
    fontWeight: "bold",
    paddingHorizontal: wp(3),
  },
  container: {
    backgroundColor: "#B2BEB5",

    padding: wp(1 / 2),
  },
});

export default Nasta;
