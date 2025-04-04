import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../../assets/images/welcomeScreenimg.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4), color: "#f2f2f2" }}>
        380+ Indian Recipe
      </Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "#f2f2f2", fontWeight: "bold", fontSize: 16 }}>
          Let's Start Cooking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D84040",
  },
  text: {
    fontSize: hp(5),
    fontWeight: "bold",
    color: "white",
    marginBottom: wp(20),
  },
  image: {
    width: wp(100),
    height: wp(100),
    resizeMode: "cover",
  },
  mainButton: {
    top: hp(17),
    backgroundColor: "#213555",
    padding: wp(4),
    borderRadius: 10,
    paddingHorizontal: wp(25),
  },
});

export default WelcomeScreen;
