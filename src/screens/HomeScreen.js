import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header headerText={"भारतीय भोजन "} navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
