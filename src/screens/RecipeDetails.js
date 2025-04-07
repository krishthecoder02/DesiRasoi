import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#D84040", paddingVertical: wp(6) }}>
        <FontAwesome
          name="arrow-left"
          size={20}
          color="#fff"
          style={styles.fontAwesome}
        />
        <Text style={[styles.header, { top: wp(7), paddingHorizontal: wp(8) }]}>
          🍛 {item.dish} बनाने की विधि:
        </Text>
      </View>

      <FlatList
        data={item.vidhi}
        keyExtractor={(item) => item.step.toString()}
        renderItem={({ item }) => (
          <View style={styles.stepBox}>
            <Text style={styles.stepTitle}>
              Step {item.step}: {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ffffff",
  },
  stepBox: {
    marginBottom: wp(2),
    backgroundColor: "#ffff",
    elevation: 10,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#FFD54F",
    marginHorizontal: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6D4C41",
  },
  description: {
    fontSize: 16,
    color: "#4E342E",
  },
});

export default RecipeDetails;
