import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Nasta from "../components/Nasta";
import Mithai from "../components/Mithai";
import RotiPuri from "../components/RotiPuri";
import Manshari from "../components/manshari";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Sabji from "../components/Sabji";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header headerText={"भारतीय भोजन "} navigation={navigation} />
      <View>
        <Nasta />
        <Mithai />
        <RotiPuri />
        <Sabji />
        <Manshari />
        <Manshari />
        <Manshari />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginBottom: wp(4),
  },
});
